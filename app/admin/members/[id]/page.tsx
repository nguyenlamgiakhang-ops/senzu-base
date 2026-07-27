import { initDB } from "@/lib/db";
import MemberForm from "@/components/admin/MemberForm";
import AdminPageHeading from "@/components/admin/AdminPageHeading";
import { requireOwner } from "@/lib/require-owner";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditMemberPage({ params }: { params: Promise<{ id: string }> }) {
  await requireOwner();

  const { id } = await params;
  const sql = await initDB();
  const rows = await sql`SELECT id, email, role FROM admin_users WHERE id = ${id}`;
  if (rows.length === 0) notFound();
  const m = rows[0] as { id: number; email: string; role: "owner" | "member" };

  return (
    <>
      <AdminPageHeading titleKey="membersEdit" />
      <MemberForm initial={{ id: m.id, email: m.email, role: m.role }} />
    </>
  );
}
