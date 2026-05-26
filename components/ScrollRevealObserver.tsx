"use client";

import { useEffect } from "react";

export default function ScrollRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.classList.add("active");

          const staggerEls = entry.target.querySelectorAll<HTMLElement>(".stagger-reveal");
          staggerEls.forEach((el, i) => {
            setTimeout(() => el.classList.add("active"), i * 150);
          });
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
