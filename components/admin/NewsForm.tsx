"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { ImageIcon } from "lucide-react";
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
  published: boolean;
};

type CategoryOption = { id: number; name_vi: string | null; name_ja: string | null };

export default function NewsForm({ initial }: { initial?: NewsFormValues }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const t = getAdminContent(locale);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<CategoryOption[]>([]);

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
      published: false,
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

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
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
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        body: JSON.stringify(values),
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

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      {error && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>{t.news.sectionGeneral}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label>{t.news.fieldCategory}</Label>
              <Select
                value={values.category_id ? String(values.category_id) : ""}
                onValueChange={(v) => set("category_id", v ? Number(v) : null)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.news.categoryPlaceholder}>
                    {selectedCategoryLabel}
                  </SelectValue>
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
              <Label>{t.news.fieldImageAlt}</Label>
              <Input
                type="text"
                placeholder={t.news.fieldImageAltPlaceholder}
                value={values.image_alt}
                onChange={(e) => set("image_alt", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>{t.news.fieldCover}</Label>
            <div className="flex items-start gap-5">
              <div className="flex h-28 w-40 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-input bg-background">
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
              <div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => coverInputRef.current?.click()}
                  disabled={uploadingCover}
                >
                  {uploadingCover ? t.common.loading : values.image_url ? t.news.changeImage : t.news.chooseImage}
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">{t.news.imageHint}</p>
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
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>{t.news.fieldBodyJa}</Label>
                <RichTextEditor value={values.body_ja} onChange={(html) => set("body_ja", html)} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-3 pt-6">
          <Switch checked={values.published} onCheckedChange={(v) => set("published", v)} />
          <Label className="font-normal">{t.news.fieldPublish}</Label>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button type="submit" disabled={saving}>
          {saving ? t.common.saving : t.news.saveButton}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/news")}>
          {t.common.cancel}
        </Button>
      </div>
    </form>
  );
}
