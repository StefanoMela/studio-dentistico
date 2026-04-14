"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheckIcon } from "@/components/ui/icons";

const COOKIE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage not available
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
      <div className="bg-dark text-white rounded-2xl shadow-2xl p-6 border border-white/10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
            <ShieldCheckIcon size={20} className="text-primary-light" />
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">Utilizziamo i cookie</p>
            <p className="text-xs text-white/60 leading-relaxed">
              Questo sito utilizza cookie tecnici necessari al suo funzionamento.
              Non raccogliamo dati di profilazione senza il tuo consenso.{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2 text-primary-light hover:text-white transition-colors"
                onClick={() => setVisible(false)}
              >
                Maggiori informazioni
              </Link>
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            onClick={() => handleChoice(false)}
            className="flex-1 text-xs font-medium px-4 py-2.5 rounded-xl border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
          >
            Rifiuta
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="flex-1 text-xs font-medium px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white transition-all shadow-md shadow-primary/30"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
