import { initDB } from "@/lib/db";
import { requireOwner } from "@/lib/require-owner";
import AdminMembersListClient from "@/components/admin/AdminMembersListClient";

export const dynamic = "force-dynamic";

export default async function AdminMembersPage() {
  await requireOwner();

  const sql = await initDB();
  const members = await sql`
    SELECT id, email, role
    FROM admin_users
    ORDER BY created_at ASC
  `;

  return <AdminMembersListClient members={members as never} />;
}
