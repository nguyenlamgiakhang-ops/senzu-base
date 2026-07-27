"use client";

import Link from "next/link";
import { Pencil, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import DeleteButton from "./DeleteButton";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

type CategoryRow = {
  id: number;
  name_vi: string | null;
  name_ja: string | null;
};

export default function AdminCategoriesListClient({ categories }: { categories: CategoryRow[] }) {
  const { locale } = useLanguage();
  const t = getAdminContent(locale);

  return (
    <>
      <div className="admin-title-row">
        <h1>{t.categories.listTitle}</h1>
        <Link href="/admin/categories/new" className={buttonVariants({ variant: "default" })}>
          <Plus className="size-4" />
          {t.categories.newButton}
        </Link>
      </div>

      {categories.length === 0 ? (
        <Card className="p-12 text-center text-sm text-muted-foreground">{t.categories.empty}</Card>
      ) : (
        <Card className="overflow-hidden p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">{t.categories.colNameVi}</TableHead>
                <TableHead>{t.categories.colNameJa}</TableHead>
                <TableHead className="pr-6" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="pl-6 font-semibold">{c.name_vi || "—"}</TableCell>
                  <TableCell>{c.name_ja || "—"}</TableCell>
                  <TableCell className="pr-6">
                    <div className="flex justify-end gap-4">
                      <Link
                        href={`/admin/categories/${c.id}`}
                        className={buttonVariants({ variant: "outline", size: "sm" })}
                      >
                        <Pencil className="size-3.5" />
                        {t.common.edit}
                      </Link>
                      <DeleteButton endpoint={`/api/admin/categories/${c.id}`} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </>
  );
}
