import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/trattamenti", label: "Trattamenti" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p
              className="text-xl font-semibold tracking-tight mb-1"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Studio Dentistico Sparano
            </p>
            <p className="text-xs tracking-[0.2em] text-white/60 uppercase mb-4">
              Specialisti del sorriso
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Odontoiatria estetica e conservativa, con oltre vent'anni di
              esperienza al servizio del tuo sorriso.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase mb-4">
              Navigazione
            </h2>
            <nav aria-label="Navigazione footer">
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase mb-4">
              Dove siamo
            </h2>
            <address className="not-italic space-y-2.5">
              <p className="text-sm text-white/70">
                Via Giuseppe Verdi, 14 – Milano (MI)
              </p>
              <p className="text-sm text-white/70">
                <a
                  href="tel:+390212345678"
                  className="hover:text-white transition-colors"
                >
                  02 1234 5678
                </a>
              </p>
              <p className="text-sm text-white/70">
                <a
                  href="mailto:info@studiosparano.it"
                  className="hover:text-white transition-colors"
                >
                  info@studiosparano.it
                </a>
              </p>
              <p className="text-sm text-white/70">
                Lun–Ven: 9:00–19:00
                <br />
                Sab: 9:00–13:00
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {currentYear} Studio Dentistico Sparano. Tutti i diritti
            riservati.
          </p>
          <p>P. IVA 01234567890</p>
        </div>
      </div>
    </footer>
  );
}
