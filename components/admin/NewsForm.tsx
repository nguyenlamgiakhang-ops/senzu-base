"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { ImageIcon, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { AdminRole } from "@/auth";

export type NewsStatus = "draft" | "pending" | "published";

export type NewsFormValues = {
  id?: number;
  category_id: number | null;
  title_vi: string;
  title_ja: string;
  excerpt_vi: string;
  excerpt_ja: string;
  body_vi: string;
  body_ja: string;
  image_url: string;
  image_alt: string;
  status: NewsStatus;
};

type CategoryOption = { id: number; name_vi: string | null; name_ja: string | null };

const EXCERPT_RECOMMENDED_MAX = 160;

export default function NewsForm({ initial, role }: { initial?: NewsFormValues; role: AdminRole }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const t = getAdminContent(locale);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [draggingCover, setDraggingCover] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [previewLang, setPreviewLang] = useState<"vi" | "ja">("vi");

  const [values, setValues] = useState<NewsFormValues>(
    initial ?? {
      category_id: null,
      title_vi: "",
      title_ja: "",
      excerpt_vi: "",
      excerpt_ja: "",
      body_vi: "",
      body_ja: "",
      image_url: "",
      image_alt: "",
      status: "draft",
    }
  );

  useEffect(() => {
    fetch("/api/admin/categories")
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) setCategories(data.categories);
      })
      .catch(() => {});
  }, []);

  const set = <K extends keyof NewsFormValues>(key: K, val: NewsFormValues[K]) =>
    setValues((v) => ({ ...v, [key]: val }));

  const uploadCoverFile = async (file: File) => {
    setUploadingCover(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) {
        set("image_url", data.url);
      } else {
        setError(data.error || t.news.errorUploadFailed);
      }
    } catch {
      setError(t.news.errorUploadFailed);
    } finally {
      setUploadingCover(false);
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    await uploadCoverFile(file);
  };

  const handleCoverDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggingCover(false);
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    await uploadCoverFile(file);
  };

  const save = async (statusOverride: NewsStatus) => {
    setError("");
    if (!values.title_vi.trim() && !values.title_ja.trim()) {
      setError(t.news.errorNeedTitle);
      return;
    }
    setSaving(true);
    try {
      const url = initial?.id ? `/api/admin/news/${initial.id}` : "/api/admin/news";
      const method = initial?.id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, status: statusOverride }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error || t.news.errorSaveFailed);
        setSaving(false);
        return;
      }
      router.push("/admin/news");
      router.refresh();
    } catch {
      setError(t.news.errorSaveFailed);
      setSaving(false);
    }
  };

  const selectedCategoryLabel = (() => {
    const c = categories.find((c) => c.id === values.category_id);
    if (!c) return null;
    return (locale === "ja" ? c.name_ja : c.name_vi) || c.name_vi || c.name_ja;
  })();

  const previewTitle = (previewLang === "ja" ? values.title_ja : values.title_vi) || "";
  const previewBody = (previewLang === "ja" ? values.body_ja : values.body_vi) || "";

  const PreviewDialog = (
    <Dialog>
      <DialogTrigger
        render={
          <Button type="button" variant="outline">
            <Eye className="size-4" />
            {t.news.preview}
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.news.preview}</DialogTitle>
        </DialogHeader>
        <div className="mb-4 inline-flex gap-0.5 rounded-full bg-muted p-1">
          <button
            type="button"
            onClick={() => setPreviewLang("vi")}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              previewLang === "vi" ? "bg-background text-primary shadow-sm" : "text-foreground/60"
            )}
          >
            {t.news.tabVi}
          </button>
          <button
            type="button"
            onClick={() => setPreviewLang("ja")}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              previewLang === "ja" ? "bg-background text-primary shadow-sm" : "text-foreground/60"
            )}
          >
            {t.news.tabJa}
          </button>
        </div>
        {values.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={values.image_url}
            alt={values.image_alt || previewTitle}
            className="mb-5 aspect-video w-full rounded-xl object-cover"
          />
        )}
        <h1 className="mb-4 text-2xl font-bold text-foreground">{previewTitle || t.news.untitled}</h1>
        {previewBody && (
          <div className="news-article-body" dangerouslySetInnerHTML={{ __html: previewBody }} />
        )}
      </DialogContent>
    </Dialog>
  );

  const canPublishDirectly = role === "owner" || values.status === "published";

  const SaveActions = (
    <>
      {canPublishDirectly ? (
        <Button type="button" onClick={() => save(values.status)} disabled={saving}>
          {saving ? t.common.saving : t.news.saveButton}
        </Button>
      ) : (
        <>
          <Button type="button" variant="outline" onClick={() => save("draft")} disabled={saving}>
            {saving ? t.common.saving : t.news.saveDraftButton}
          </Button>
          <Button type="button" onClick={() => save("pending")} disabled={saving}>
            {saving ? t.common.saving : t.news.submitReviewButton}
          </Button>
        </>
      )}
      <Button
        type="button"
        variant="outline"
        className="border-destructive/30 text-destructive hover:border-destructive/50 hover:bg-destructive/10"
        onClick={() => router.push("/admin/news")}
      >
        {t.common.cancel}
      </Button>
    </>
  );

  return (
    <form className="flex flex-col gap-6 pb-4" onSubmit={(e) => e.preventDefault()}>
      {error && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>{t.news.sectionGeneral}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5 sm:max-w-xs">
            <Label>{t.news.fieldCategory}</Label>
            <Select
              value={values.category_id ? String(values.category_id) : ""}
              onValueChange={(v) => set("category_id", v ? Number(v) : null)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t.news.categoryPlaceholder}>{selectedCategoryLabel}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {(locale === "ja" ? c.name_ja : c.name_vi) || c.name_vi || c.name_ja}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>{t.news.fieldCover}</Label>
            <div className="flex items-start gap-5">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDraggingCover(true);
                }}
                onDragLeave={() => setDraggingCover(false)}
                onDrop={handleCoverDrop}
                className={cn(
                  "flex h-28 w-40 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed bg-background transition-colors",
                  draggingCover ? "border-primary bg-primary/5" : "border-input"
                )}
              >
                {values.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={values.image_url} alt="preview" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-1 p-2 text-center text-xs text-muted-foreground">
                    <ImageIcon className="size-5" />
                    {t.news.noImage}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => coverInputRef.current?.click()}
                  disabled={uploadingCover}
                >
                  {uploadingCover ? t.common.loading : values.image_url ? t.news.changeImage : t.news.chooseImage}
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">{t.news.imageHint}</p>

                <div className="mt-3 flex flex-col gap-1.5">
                  <Label className={!values.image_url ? "text-muted-foreground" : undefined}>
                    {t.news.fieldImageAlt}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t.news.fieldImageAltPlaceholder}
                    value={values.image_alt}
                    disabled={!values.image_url}
                    onChange={(e) => set("image_alt", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <input ref={coverInputRef} type="file" accept="image/*" hidden onChange={handleCoverUpload} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="vi">
            <TabsList>
              <TabsTrigger value="vi">{t.news.tabVi}</TabsTrigger>
              <TabsTrigger value="ja">{t.news.tabJa}</TabsTrigger>
            </TabsList>

            <TabsContent value="vi" className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <Label>{t.news.fieldTitleVi}</Label>
                <Input type="text" value={values.title_vi} onChange={(e) => set("title_vi", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>{t.news.fieldExcerptVi}</Label>
                <Textarea value={values.excerpt_vi} onChange={(e) => set("excerpt_vi", e.target.value)} />
                <p
                  className={cn(
                    "text-right text-xs",
                    values.excerpt_vi.length > EXCERPT_RECOMMENDED_MAX ? "text-destructive" : "text-muted-foreground"
                  )}
                >
                  {values.excerpt_vi.length}/{EXCERPT_RECOMMENDED_MAX}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>{t.news.fieldBodyVi}</Label>
                <RichTextEditor value={values.body_vi} onChange={(html) => set("body_vi", html)} />
              </div>
            </TabsContent>

            <TabsContent value="ja" className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <Label>{t.news.fieldTitleJa}</Label>
                <Input type="text" value={values.title_ja} onChange={(e) => set("title_ja", e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>{t.news.fieldExcerptJa}</Label>
                <Textarea value={values.excerpt_ja} onChange={(e) => set("excerpt_ja", e.target.value)} />
                <p
                  className={cn(
                    "text-right text-xs",
                    values.excerpt_ja.length > EXCERPT_RECOMMENDED_MAX ? "text-destructive" : "text-muted-foreground"
                  )}
                >
                  {values.excerpt_ja.length}/{EXCERPT_RECOMMENDED_MAX}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>{t.news.fieldBodyJa}</Label>
                <RichTextEditor value={values.body_ja} onChange={(html) => set("body_ja", html)} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {role === "owner" && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Switch
                checked={values.status === "published"}
                onCheckedChange={(checked) => set("status", checked ? "published" : "draft")}
              />
              <Label className="font-normal">{t.news.fieldPublish}</Label>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {values.status === "published" ? t.news.publishOnNote : t.news.publishOffNote}
            </p>
          </CardContent>
        </Card>
      )}

      {role !== "owner" && values.status === "pending" && (
        <p className="text-sm text-muted-foreground">{t.news.pendingNote}</p>
      )}
      {role !== "owner" && values.status === "published" && (
        <p className="text-sm text-muted-foreground">{t.news.alreadyPublishedNote}</p>
      )}

      <div className="sticky bottom-4 z-10 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur">
        {SaveActions}
        <div className="ml-auto">{PreviewDialog}</div>
      </div>
    </form>
  );
}
