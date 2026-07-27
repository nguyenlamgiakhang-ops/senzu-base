import MemberForm from "@/components/admin/MemberForm";
import AdminPageHeading from "@/components/admin/AdminPageHeading";
import { requireOwner } from "@/lib/require-owner";

export default async function NewMemberPage() {
  await requireOwner();

  return (
    <>
      <AdminPageHeading titleKey="membersNew" />
      <MemberForm />
    </>
  );
}
