import Link from "next/link";
import {
  ToothIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
} from "@/components/ui/icons";

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
    <footer className="bg-dark">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ToothIcon className="text-primary-light" size={22} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold text-white tracking-tight">
                  Studio Dentistico
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/50 uppercase">
                  Sparano
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Odontoiatria estetica e conservativa, con oltre vent&apos;anni di
              esperienza al servizio del tuo sorriso.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-primary-light uppercase mb-5">
              Navigazione
            </h2>
            <nav aria-label="Navigazione footer">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-primary-light uppercase mb-5">
              Contatti
            </h2>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-primary-light shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-white/60">
                  Via Giuseppe Verdi, 14
                  <br />
                  20121 Milano (MI)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-primary-light shrink-0" size={18} />
                <a
                  href="tel:+390212345678"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  02 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="text-primary-light shrink-0" size={18} />
                <a
                  href="mailto:info@studiosparano.it"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  info@studiosparano.it
                </a>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-primary-light uppercase mb-5">
              Orari
            </h2>
            <div className="flex items-start gap-3">
              <ClockIcon className="text-primary-light shrink-0 mt-0.5" size={18} />
              <div className="text-sm text-white/60 space-y-1">
                <p>Lun – Ven: 9:00 – 19:00</p>
                <p>Sabato: 9:00 – 13:00</p>
                <p className="text-white/40">Domenica: Chiuso</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              © {currentYear} Studio Dentistico Sparano. Tutti i diritti
              riservati.
            </p>
            <p>P. IVA 01234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
