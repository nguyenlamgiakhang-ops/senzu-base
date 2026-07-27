"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ResizableImage from "./ResizableImage";
import LinkExtension from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect, useRef, useState } from "react";
import {
  TextB,
  TextItalic,
  TextHTwo,
  TextHThree,
  ListBullets,
  ListNumbers,
  Quotes,
  LinkSimple,
  ImageSquare,
  ArrowUUpLeft,
  ArrowUUpRight,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  TextAlignJustify,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function ToolbarButton({
  icon: Icon,
  title,
  active,
  disabled,
  onClick,
}: {
  icon: PhosphorIcon;
  title: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      type="button"
      title={title}
      variant={active ? "secondary" : "ghost"}
      size="icon"
      className="size-8"
      disabled={disabled}
      onClick={onClick}
    >
      <Icon size={16} weight="bold" />
    </Button>
  );
}

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const { locale } = useLanguage();
  const t = getAdminContent(locale);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file: File): Promise<string | null> => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!data.ok) {
        alert(data.error || t.news.errorUploadFailed);
        return null;
      }
      return data.url as string;
    } catch {
      alert(t.news.errorUploadFailed);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      LinkExtension.configure({ openOnClick: false }),
      ResizableImage,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      // Ảnh dán/kéo-thả vào bài đều phải đi qua Vercel Blob, không cho phép
      // ProseMirror tự chèn thẳng data-URI base64 hoặc URL ảnh ngoài vào nội dung.
      handlePaste: (view, event) => {
        const file = Array.from(event.clipboardData?.items || [])
          .find((item) => item.type.startsWith("image/"))
          ?.getAsFile();
        if (!file) return false;
        event.preventDefault();
        uploadFile(file).then((url) => {
          if (!url) return;
          const node = view.state.schema.nodes.image.create({ src: url });
          view.dispatch(view.state.tr.replaceSelectionWith(node));
        });
        return true;
      },
      handleDrop: (view, event) => {
        const file = Array.from(event.dataTransfer?.files || []).find((f) =>
          f.type.startsWith("image/")
        );
        if (!file) return false;
        event.preventDefault();
        uploadFile(file).then((url) => {
          if (!url) return;
          const node = view.state.schema.nodes.image.create({ src: url });
          const coords = view.posAtCoords({ left: event.clientX, top: event.clientY });
          const tr = view.state.tr.insert(coords ? coords.pos : view.state.selection.from, node);
          view.dispatch(tr);
        });
        return true;
      },
    },
  });

  useEffect(() => {
    if (editor && !editor.isFocused && value !== editor.getHTML()) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editor]);

  if (!editor) return null;

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const url = await uploadFile(file);
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const isImageSelected = editor.isActive("image");

  const isAlign = (align: "left" | "center" | "right" | "justify") =>
    isImageSelected ? editor.isActive("image", { align }) : editor.isActive({ textAlign: align });

  const setAlign = (align: "left" | "center" | "right" | "justify") => {
    if (isImageSelected) {
      editor.chain().focus().updateAttributes("image", { align }).run();
    } else {
      editor.chain().focus().setTextAlign(align).run();
    }
  };

  const setLink = () => {
    const url = window.prompt(locale === "ja" ? "URLを入力:" : "Nhập URL liên kết:");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="overflow-hidden rounded-md border border-input bg-background">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-muted/40 p-1.5">
        <ToolbarButton icon={TextB} title={t.editor.bold} active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} />
        <ToolbarButton icon={TextItalic} title={t.editor.italic} active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} />
        <Separator orientation="vertical" className="mx-1 h-5" />
        <ToolbarButton icon={TextHTwo} title={t.editor.h2} active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
        <ToolbarButton icon={TextHThree} title={t.editor.h3} active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        <Separator orientation="vertical" className="mx-1 h-5" />
        <ToolbarButton icon={ListBullets} title={t.editor.bulletList} active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} />
        <ToolbarButton icon={ListNumbers} title={t.editor.orderedList} active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
        <ToolbarButton icon={Quotes} title={t.editor.quote} active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
        <Separator orientation="vertical" className="mx-1 h-5" />
        <ToolbarButton icon={TextAlignLeft} title={t.editor.alignLeft} active={isAlign("left")} onClick={() => setAlign("left")} />
        <ToolbarButton icon={TextAlignCenter} title={t.editor.alignCenter} active={isAlign("center")} onClick={() => setAlign("center")} />
        <ToolbarButton icon={TextAlignRight} title={t.editor.alignRight} active={isAlign("right")} onClick={() => setAlign("right")} />
        {!isImageSelected && (
          <ToolbarButton icon={TextAlignJustify} title={t.editor.alignJustify} active={isAlign("justify")} onClick={() => setAlign("justify")} />
        )}
        <Separator orientation="vertical" className="mx-1 h-5" />
        <ToolbarButton icon={LinkSimple} title={t.editor.link} active={editor.isActive("link")} onClick={setLink} />
        <ToolbarButton icon={ImageSquare} title={t.editor.image} disabled={uploading} onClick={() => fileInputRef.current?.click()} />
        <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleImageUpload} />
        <Separator orientation="vertical" className="mx-1 h-5" />
        <ToolbarButton icon={ArrowUUpLeft} title={t.editor.undo} disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()} />
        <ToolbarButton icon={ArrowUUpRight} title={t.editor.redo} disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()} />
      </div>
      <EditorContent editor={editor} className="rte-content" />
    </div>
  );
}
