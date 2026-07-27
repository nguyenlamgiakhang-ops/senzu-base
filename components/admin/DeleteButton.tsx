"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Trash } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogClose,
} from "@/components/ui/alert-dialog";

export default function DeleteButton({ endpoint }: { endpoint: string }) {
  const router = useRouter();
  const { locale } = useLanguage();
  const t = getAdminContent(locale);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    setBusy(true);
    try {
      await fetch(endpoint, { method: "DELETE" });
      setOpen(false);
      router.refresh();
    } finally {
      setBusy(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        render={
          <Button type="button" variant="destructive" size="sm">
            <Trash className="size-3.5" />
            {t.common.delete}
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogTitle>{t.common.deleteTitle}</AlertDialogTitle>
        <AlertDialogDescription>{t.common.confirmDelete}</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogClose render={<Button variant="outline">{t.common.cancel}</Button>} />
          <Button variant="destructive" onClick={handleDelete} disabled={busy}>
            {busy ? t.common.loading : t.common.delete}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
