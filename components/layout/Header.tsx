"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ToothIcon } from "@/components/ui/icons";

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-surface/95 backdrop-blur-lg shadow-sm border-b border-border/50"
        : "bg-surface"
        }`}
    >
      <div className="mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Studio Dentistico Sparano - vai alla home"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              {/*
              <ToothIcon className="text-primary" size={22} />
              */}
              <Image src={"/logo.png"} alt="logo" width={22} height={22} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg md:text-xl font-semibold text-dark tracking-tight group-hover:text-primary transition-colors">
                Studio Dentistico
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-muted uppercase">
                Sparano
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Navigazione principale"
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${isActive
                    ? "text-primary bg-primary/5"
                    : "text-gray hover:text-dark hover:bg-surface-alt"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contatti"
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
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
            className="md:hidden w-10 h-10 flex items-center justify-center text-dark rounded-xl hover:bg-surface-alt transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className="block w-5 h-0.5 bg-current transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen
                    ? "rotate(45deg) translateY(7px)"
                    : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 bg-current transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-current transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(-7px)"
                    : "none",
                }}
              />
            </div>
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
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                    ? "bg-primary/5 text-primary"
                    : "text-gray hover:bg-surface-alt hover:text-dark"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contatti"
              className="mt-2 px-4 py-3 bg-primary text-white text-sm font-medium rounded-xl text-center shadow-md shadow-primary/20"
            >
              Prenota un appuntamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
