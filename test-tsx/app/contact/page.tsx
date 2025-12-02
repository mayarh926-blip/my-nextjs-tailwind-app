"use client";

const contactCopy = {
  tag: "تواصل معنا",
  title: "أخبرنا عن المنتج الذي تريد بناءه.",
  description:
    "نتعاون مع الفرق التي تحب التجربة وتقدّر التصميم وتبحث عن إطلاق واثق. شاركنا خطك الزمني وأهدافك وسنرد خلال يومي عمل.",
  fields: {
    name: "الاسم الكامل",
    namePlaceholder: "ميار حسن",
    email: "البريد الإلكتروني",
    emailPlaceholder: "hello@mayar.studio",
    project: "ما الذي تبنيه؟",
    projectPlaceholder:
      "شارك أهداف المنتج، والتقنيات، وموعد الإطلاق المتوقع...",
    submit: "أرسل الرسالة",
  },
  sidebar: {
    hoursLabel: "ساعات العمل",
    hoursValue: "من الاثنين إلى الجمعة، 9 صباحاً حتى 6 مساءً بتوقيت +2",
    emailLabel: "البريد",
    socialLabel: "روابطنا",
    socialLinks: ["Behance", "Dribbble", "LinkedIn"],
  },
};

export default function ContactPage() {
  const copy = contactCopy;
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
          {copy.tag}
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          {copy.title}
        </h1>
        <p className="text-lg text-slate-300">{copy.description}</p>
      </header>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:grid-cols-[1fr_0.9fr]">
        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-white">
              {copy.fields.name}
            </label>
            <input
              type="text"
              placeholder={copy.fields.namePlaceholder}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white">
              {copy.fields.email}
            </label>
            <input
              type="email"
              placeholder={copy.fields.emailPlaceholder}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white">
              {copy.fields.project}
            </label>
            <textarea
              rows={5}
              placeholder={copy.fields.projectPlaceholder}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {copy.fields.submit}
          </button>
        </form>

        <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-200">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              {copy.sidebar.hoursLabel}
            </p>
            <p className="mt-2 text-lg text-white">{copy.sidebar.hoursValue}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              {copy.sidebar.emailLabel}
            </p>
            <a
              href="mailto:hello@mayar.studio"
              className="mt-2 block text-lg text-white hover:text-cyan-200"
            >
              hello@mayar.studio
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              {copy.sidebar.socialLabel}
            </p>
            <div className="mt-2 flex gap-4 text-white">
              {copy.sidebar.socialLinks.map((item) => (
                <a key={item} href="#" className="hover:text-cyan-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
  
    </div>
  );
}

