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

type MemberRow = {
  id: number;
  email: string;
  role: "owner" | "member";
};

export default function AdminMembersListClient({ members }: { members: MemberRow[] }) {
  const { locale } = useLanguage();
  const t = getAdminContent(locale);

  return (
    <>
      <div className="admin-title-row">
        <h1>{t.members.listTitle}</h1>
        <Link href="/admin/members/new" className={buttonVariants({ variant: "default" })}>
          <Plus className="size-4" />
          {t.members.newButton}
        </Link>
      </div>

      {members.length === 0 ? (
        <Card className="p-12 text-center text-sm text-muted-foreground">{t.members.empty}</Card>
      ) : (
        <Card className="overflow-hidden p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">{t.members.colEmail}</TableHead>
                <TableHead>{t.members.colRole}</TableHead>
                <TableHead className="pr-6" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((m) => (
                <TableRow key={m.id}>
                  <TableCell className="pl-6 font-semibold">{m.email}</TableCell>
                  <TableCell>
                    <Badge variant={m.role === "owner" ? "default" : "secondary"}>
                      {m.role === "owner" ? t.members.roleOwner : t.members.roleMember}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-6">
                    <div className="flex justify-end gap-4">
                      <Link
                        href={`/admin/members/${m.id}`}
                        className={buttonVariants({ variant: "outline", size: "sm" })}
                      >
                        <Pencil className="size-3.5" />
                        {t.common.edit}
                      </Link>
                      <DeleteButton endpoint={`/api/admin/members/${m.id}`} />
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
