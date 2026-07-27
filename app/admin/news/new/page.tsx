import NewsForm from "@/components/admin/NewsForm";
import AdminPageHeading from "@/components/admin/AdminPageHeading";

export default function NewNewsPage() {
  return (
    <>
      <AdminPageHeading titleKey="newsNew" />
      <NewsForm />
    </>
  );
}
