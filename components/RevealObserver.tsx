"use client";

import { useEffect } from "react";

/**
 * Observa todos os elementos com [data-reveal] e adiciona .is-visible quando entram na tela.
 * Após a animação de entrada, remove o atributo para liberar o transform (ex.: hover:scale nos cards).
 * Opcional: data-reveal-delay="150" (ms) para escalonar itens de uma grade.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.removeAttribute("data-reveal"));
      return;
    }

    const finish = (el: HTMLElement) => {
      el.removeAttribute("data-reveal");
      el.classList.remove("is-visible");
      el.style.removeProperty("--reveal-delay");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add("is-visible");
          observer.unobserve(el);
          window.setTimeout(() => finish(el), delay + 800);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
