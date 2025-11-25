"use client";

import { useLanguage } from "../context/LanguageContext";

const servicesCopy = {
  en: {
    tag: "What we do",
    title: "A holistic partner from insight to launch.",
    description:
      "We assemble small, senior squads for each project, blending strategy, product, content, and code. Everything stays integrated, fast, and intentional.",
    services: [
      {
        title: "Product Strategy",
        description:
          "Discovery sprints, customer interviews, and prototype testing to validate the right thing before we build it.",
        stack: ["Notion", "Figma", "Maze"],
      },
      {
        title: "Experience Design",
        description:
          "Design systems, responsive interfaces, motion language, and storytelling that stays cohesive across every device.",
        stack: ["Figma", "Framer", "After Effects"],
      },
      {
        title: "Engineering",
        description:
          "Full-stack web apps built with TypeScript, Next.js, and edge-ready APIs, optimized for performance and accessibility.",
        stack: ["Next.js", "Tailwind", "Vercel", "Supabase"],
      },
    ],
  },
  ar: {
    tag: "ماذا نفعل",
    title: "شريك متكامل من الفكرة إلى الإطلاق.",
    description:
      "نكوّن فرقاً صغيرة من الخبراء لكل مشروع، نمزج الاستراتيجية والمنتج والمحتوى والبرمجة لنضمن عملاً سريعاً ومقصوداً.",
    services: [
      {
        title: "إستراتيجية المنتج",
        description:
          "أسابيع اكتشاف ومقابلات مع العملاء واختبارات للنماذج الأولية للتأكد من بناء الشيء الصحيح قبل كتابة أي سطر.",
        stack: ["Notion", "Figma", "Maze"],
      },
      {
        title: "تصميم التجربة",
        description:
          "أنظمة تصميم وواجهات مرنة ولغة حركة وقصص متماسكة عبر كل الأجهزة.",
        stack: ["Figma", "Framer", "After Effects"],
      },
      {
        title: "الهندسة",
        description:
          "تطبيقات ويب متكاملة بـ TypeScript وNext.js وواجهات برمجة جاهزة للحافة مع أداء وإتاحة عاليين.",
        stack: ["Next.js", "Tailwind", "Vercel", "Supabase"],
      },
    ],
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const content = servicesCopy[language];

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
          {content.tag}
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          {content.title}
        </h1>
        <p className="text-lg text-slate-300">{content.description}</p>
      </header>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-2">
        {content.services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white">
                {service.title}
              </h2>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
                {service.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-200/30 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-slate-300">{service.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

