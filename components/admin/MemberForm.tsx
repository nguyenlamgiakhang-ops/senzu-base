"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export type MemberFormValues = {
  id?: number;
  email: string;
  role: "owner" | "member";
};

export default function MemberForm({ initial }: { initial?: MemberFormValues }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const t = getAdminContent(locale);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState<MemberFormValues>(initial ?? { email: "", role: "member" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!values.email.trim()) {
      setError(t.members.errorNeedEmail);
      return;
    }
    setSaving(true);
    try {
      const url = initial?.id ? `/api/admin/members/${initial.id}` : "/api/admin/members";
      const method = initial?.id ? "PUT" : "POST";
      const body = initial?.id ? { role: values.role } : { email: values.email, role: values.role };
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error || t.members.errorSaveFailed);
        setSaving(false);
        return;
      }
      router.push("/admin/members");
      router.refresh();
    } catch {
      setError(t.members.errorSaveFailed);
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
            <Label>{t.members.fieldEmail}</Label>
            <Input
              type="email"
              value={values.email}
              disabled={!!initial?.id}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>{t.members.fieldRole}</Label>
            <Select value={values.role} onValueChange={(v) => setValues((s) => ({ ...s, role: v as "owner" | "member" }))}>
              <SelectTrigger>
                <SelectValue>{values.role === "owner" ? t.members.roleOwner : t.members.roleMember}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="member">{t.members.roleMember}</SelectItem>
                <SelectItem value="owner">{t.members.roleOwner}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button type="submit" disabled={saving}>
          {saving ? t.common.saving : t.members.saveButton}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/members")}>
          {t.common.cancel}
        </Button>
      </div>
    </form>
  );
}
