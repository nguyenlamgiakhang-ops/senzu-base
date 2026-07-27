import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function requireOwner() {
  const session = await auth();
  if (session?.user?.role !== "owner") {
    redirect("/admin/news");
  }
}
