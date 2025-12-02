"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "الخدمات" },
  { href: "/contact", label: "تواصل" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-semibold uppercase tracking-[0.3em] text-white sm:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          mayar
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition hover:border-white/40 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? "إغلاق" : "القائمة"}
          </button>
        </div>

        <ul className="hidden flex-1 items-center justify-end gap-2 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 transition duration-300 ${
                    isActive
                      ? "bg-white/10 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-white/5 bg-slate-950/95 px-4 py-4 sm:px-6 md:hidden">
          <ul className="flex flex-col gap-2 text-sm font-medium text-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-2xl px-4 py-3 transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

