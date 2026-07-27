import NewsForm from "@/components/admin/NewsForm";
import AdminPageHeading from "@/components/admin/AdminPageHeading";
import { auth } from "@/auth";

export default async function NewNewsPage() {
  const session = await auth();

  return (
    <>
      <AdminPageHeading titleKey="newsNew" />
      <NewsForm role={session?.user?.role ?? "member"} />
    </>
  );
}
