"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trattamenti", label: "Trattamenti" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/95 backdrop-blur-md shadow-sm" : "bg-surface"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight group"
            aria-label="Studio Dentistico Sparano - vai alla home"
          >
            <span
              className="text-lg md:text-xl font-semibold text-dark tracking-tight group-hover:text-primary transition-colors"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Studio Dentistico
            </span>
            <span className="text-xs md:text-sm font-medium tracking-[0.15em] text-muted uppercase">
              Sparano
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Navigazione principale"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors pb-0.5 ${
                    isActive
                      ? "text-primary"
                      : "text-gray hover:text-dark"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sage rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contatti"
              className="ml-2 px-5 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-dark transition-colors"
            >
              Prenota
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            className="md:hidden p-2 text-dark rounded-md"
          >
            <span
              className="block w-5 h-0.5 bg-current mb-1.5 transition-transform"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 bg-current mb-1.5 transition-opacity"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-current transition-transform"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden animate-slide-down border-t border-border bg-surface"
        >
          <nav
            aria-label="Navigazione mobile"
            className="flex flex-col px-5 py-4 gap-1"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-surface-alt text-primary"
                      : "text-gray hover:bg-surface-alt"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contatti"
              className="mt-2 px-3 py-3 bg-accent text-white text-sm font-medium rounded-lg text-center"
            >
              Prenota un appuntamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
