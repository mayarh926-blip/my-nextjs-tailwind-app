"use client";

const copy = {
  tag: "عن Mayar Studio",
  title:
    "نحن فريق صغير ومهووس من المصممين والمهندسين نؤمن أن كل واجهة يجب أن تكون سهلة وسلسة.",
  description:
    "من البحث والتموضع وحتى اليوم الأخير قبل الإطلاق، نقدم تجربة تعاون قريبة وشخصية. طريقتنا تمزج بين التفكير الإبداعي الجريء والتنفيذ الموثوق.",
  sectionTitle: "كيف نتعاون",
  highlights: [
    { stat: "12+", label: "أكثر من 12 عاماً نصنع منتجات مبهجة" },
    { stat: "40", label: "أعدنا ابتكار 40 علامة منذ 2020" },
    { stat: "92%", label: "92% من العملاء يعودون لمشاريع جديدة" },
  ],
  bullets: [
    "فريق مخصص يعمل كأنه جزء من شركتك",
    "اجتماعات أسبوعية للعرض والتجربة واتخاذ القرار",
    "خطط طريق واضحة ومدعومة بمؤشرات قياس",
    "أدلة إطلاق تشمل الجودة وإمكانية الوصول والنمو",
  ],
};

export default function AboutPage() {
  const content = copy;
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
          {content.tag}
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          {content.title}
        </h1>
        <p className="text-lg text-slate-300">{content.description}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {content.highlights.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center shadow-inner shadow-cyan-500/10"
          >
            <p className="text-4xl font-bold text-white">{item.stat}</p>
            <p className="mt-2 text-sm text-slate-300">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200">
        <h2 className="text-2xl font-semibold text-white">
          {content.sectionTitle}
        </h2>
        <ul className="mt-6 space-y-4 text-slate-300">
          {content.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}