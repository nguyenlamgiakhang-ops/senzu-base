import "./admin.css";
import { auth, signOut } from "@/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user?.role) {
    return <div className="admin-shell admin-shell-bare">{children}</div>;
  }

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/admin/login" });
  };

  return (
    <div className="admin-shell admin-dashboard">
      <AdminSidebar role={session.user.role} />
      <div className="admin-content-col">
        <AdminTopbar userEmail={session.user.email} onSignOut={handleSignOut} />
        <main className="admin-main">{children}</main>
      </div>
    </div>
  );
}
