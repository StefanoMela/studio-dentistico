"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        // Small delay so it doesn't flash on load
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage not available (SSR or privacy mode)
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    try {
      localStorage.setItem(COOKIE_KEY, accepted ? "accepted" : "rejected");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Informativa sui cookie"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 animate-fade-up"
    >
      <div className="bg-charcoal text-white rounded-2xl shadow-2xl p-5 border border-white/10">
        {/* Icon */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-xl mt-0.5" aria-hidden="true">🍪</span>
          <div>
            <p className="text-sm font-semibold mb-1">Utilizziamo i cookie</p>
            <p className="text-xs text-white/65 leading-relaxed">
              Questo sito utilizza cookie tecnici necessari al suo funzionamento.
              Non raccogliamo dati di profilazione senza il tuo consenso.{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2 text-sage-light hover:text-white transition-colors"
                onClick={() => setVisible(false)}
              >
                Maggiori informazioni
              </Link>
            </p>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => handleChoice(false)}
            className="flex-1 text-xs font-medium px-3 py-2 rounded-lg border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="flex-1 text-xs font-medium px-3 py-2 rounded-lg bg-sage hover:bg-sage-dark text-white transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
