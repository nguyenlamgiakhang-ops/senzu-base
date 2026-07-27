"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export type CategoryFormValues = {
  id?: number;
  name_vi: string;
  name_ja: string;
};

export default function CategoryForm({ initial }: { initial?: CategoryFormValues }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const t = getAdminContent(locale);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState<CategoryFormValues>(initial ?? { name_vi: "", name_ja: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!values.name_vi.trim() && !values.name_ja.trim()) {
      setError(t.categories.errorNeedName);
      return;
    }
    setSaving(true);
    try {
      const url = initial?.id ? `/api/admin/categories/${initial.id}` : "/api/admin/categories";
      const method = initial?.id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error || t.categories.errorSaveFailed);
        setSaving(false);
        return;
      }
      router.push("/admin/categories");
      router.refresh();
    } catch {
      setError(t.categories.errorSaveFailed);
      setSaving(false);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      {error && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
      )}

      <Card>
        <CardContent className="flex flex-col gap-5 pt-6">
          <div className="flex flex-col gap-1.5">
            <Label>{t.categories.fieldNameVi}</Label>
            <Input
              type="text"
              value={values.name_vi}
              onChange={(e) => setValues((v) => ({ ...v, name_vi: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>{t.categories.fieldNameJa}</Label>
            <Input
              type="text"
              value={values.name_ja}
              onChange={(e) => setValues((v) => ({ ...v, name_ja: e.target.value }))}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button type="submit" disabled={saving}>
          {saving ? t.common.saving : t.categories.saveButton}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/categories")}>
          {t.common.cancel}
        </Button>
      </div>
    </form>
  );
}
