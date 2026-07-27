import CategoryForm from "@/components/admin/CategoryForm";
import AdminPageHeading from "@/components/admin/AdminPageHeading";

export default function NewCategoryPage() {
  return (
    <>
      <AdminPageHeading titleKey="categoriesNew" />
      <CategoryForm />
    </>
  );
}
