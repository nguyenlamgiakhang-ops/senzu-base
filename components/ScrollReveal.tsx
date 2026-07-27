"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" }
    );

    let delayIndex = 0;
    const observe = (el: HTMLElement) => {
      el.classList.remove("in");
      el.style.transitionDelay = `${Math.min(delayIndex % 3, 2) * 80}ms`;
      delayIndex++;
      io.observe(el);
    };

    document.querySelectorAll<HTMLElement>(".reveal").forEach(observe);

    // Nội dung tải sau (vd danh sách bài viết lấy qua fetch client-side ở /news)
    // chưa tồn tại trong DOM lúc effect này chạy lần đầu — MutationObserver bắt
    // các phần tử .reveal được thêm vào sau đó để tránh bị kẹt vĩnh viễn ở opacity:0.
    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList.contains("reveal")) observe(node);
          node.querySelectorAll?.<HTMLElement>(".reveal").forEach(observe);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
