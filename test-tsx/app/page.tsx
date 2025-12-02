"use client";

const heroCopy = {
  tag: "استوديو يصنع المستقبل",
  heroTitlePre: "نبتكر تجارب رقمية تبدو",
  heroHighlight: "نابضة بالحياة",
  heroTitlePost: "",
  heroDescription:
    "نمزج بين الإستراتيجية والتصميم والهندسة لنصنع منتجات جريئة يحبها الناس. من بناء الهوية إلى المنصات المعقدة، نحافظ في Mayar Studio على كل التفاصيل أنيقة وقريبة من الإنسان.",
  primaryCta: "استكشف الخدمات",
  secondaryCta: "احجز مكالمة",
  deliverTitle: "ماذا نقدم",
  deliverItems: [
    "أنظمة هوية واستجابات بصرية متكاملة",
    "إستراتيجية منتج ونماذج أولية واختبار مبكر",
    "هندسة شاملة مع تركيز على الأداء",
    "تجارب نمو مستمرة وتحسينات قابلة للقياس",
  ],
  cards: [
    {
      title: "البحث أولاً",
      description:
        "نستمع بعمق وندرس جمهورك لنكتشف أوضح الأفكار قبل تصميم أي تفصيلة.",
    },
    {
      title: "أنظمة تصميم",
      description:
        "مكتبات واجهات متماسكة، وأنماط تعتمد على الرموز، وحركة منظمة عبر كل نقاط الاتصال.",
    },
    {
      title: "هندسة دقيقة",
      description:
        "مكدسات حديثة وتجارب يسهل الوصول إليها، مع أداء يمكن الاعتماد عليه في كل إطلاق.",
    },
  ],
};

export default function Home() {
  const copy = heroCopy;
  return (
    <div className="space-y-16">
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-cyan-900/30 p-6 shadow-2xl shadow-cyan-500/10 sm:p-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">
            {copy.tag}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {copy.heroTitlePre}{" "}
            <span className="text-cyan-300">{copy.heroHighlight}</span>{" "}
            {copy.heroTitlePost}
          </h1>
          <p className="text-lg text-slate-300">{copy.heroDescription}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/services"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {copy.primaryCta}
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-300/80 hover:text-cyan-200"
            >
              {copy.secondaryCta}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-cyan-500/20 blur-3xl" />
          <div className="relative h-full rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              {copy.deliverTitle}
            </p>
            <ul className="mt-6 space-y-4 text-slate-200">
              {copy.deliverItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {copy.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-xl shadow-black/20"
          >
            <h3 className="mb-3 text-xl font-semibold text-white">
              {card.title}
            </h3>
            <p className="text-sm text-slate-300">{card.description}</p>
          </article>
        ))}
      </section>
 
    </div>
   
  );
}
