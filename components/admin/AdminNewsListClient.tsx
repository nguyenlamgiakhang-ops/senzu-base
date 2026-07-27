"use client";

import Link from "next/link";
import { Pencil, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import DeleteButton from "./DeleteButton";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

type PostRow = {
  id: number;
  title_vi: string | null;
  title_ja: string | null;
  category_name_vi: string | null;
  category_name_ja: string | null;
  published: boolean;
  created_at: string;
};

export default function AdminNewsListClient({ posts }: { posts: PostRow[] }) {
  const { locale } = useLanguage();
  const t = getAdminContent(locale);

  return (
    <>
      <div className="admin-title-row">
        <h1>{t.news.listTitle}</h1>
        <Link href="/admin/news/new" className={buttonVariants({ variant: "default" })}>
          <Plus className="size-4" />
          {t.news.newButton}
        </Link>
      </div>

      {posts.length === 0 ? (
        <Card className="p-12 text-center text-sm text-muted-foreground">{t.news.empty}</Card>
      ) : (
        <Card className="overflow-hidden p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">{t.news.colTitle}</TableHead>
                <TableHead>{t.news.colCategory}</TableHead>
                <TableHead>{t.news.colStatus}</TableHead>
                <TableHead>{t.news.colCreated}</TableHead>
                <TableHead className="pr-6" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((p) => {
                const title = p.title_vi || p.title_ja || t.news.untitled;
                const category =
                  (locale === "ja" ? p.category_name_ja : p.category_name_vi) ||
                  p.category_name_vi ||
                  p.category_name_ja ||
                  "—";
                return (
                  <TableRow key={p.id}>
                    <TableCell className="pl-6 font-semibold">{title}</TableCell>
                    <TableCell>{category}</TableCell>
                    <TableCell>
                      <Badge variant={p.published ? "default" : "secondary"}>
                        {p.published ? t.news.statusPublished : t.news.statusDraft}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(p.created_at).toLocaleDateString(locale === "ja" ? "ja-JP" : "vi-VN")}</TableCell>
                    <TableCell className="pr-6">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/news/${p.id}`}
                          className={buttonVariants({ variant: "outline", size: "sm" })}
                        >
                          <Pencil className="size-3.5" />
                          {t.common.edit}
                        </Link>
                        <DeleteButton endpoint={`/api/admin/news/${p.id}`} />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      )}
    </>
  );
}
