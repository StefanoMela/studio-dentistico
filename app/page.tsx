import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Section,
  SectionHeader,
  Card,
  IconWrapper,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Studio Dentistico Sparano | Specialisti del sorriso a Milano",
  description:
    "Studio dentistico a Milano con oltre 20 anni di esperienza. Odontoiatria estetica, implantologia, ortodonzia e cure preventive. Prenota la tua visita.",
  openGraph: {
    title: "Studio Dentistico Sparano | Specialisti del sorriso a Milano",
    description:
      "Studio dentistico a Milano con oltre 20 anni di esperienza. Odontoiatria estetica, implantologia, ortodonzia.",
    url: "https://studiodentisticosparano.it",
  },
};

const highlights = [
  {
    icon: "✦",
    title: "Esperienza ventennale",
    desc: "Oltre vent'anni di pratica clinica al fianco di migliaia di pazienti soddisfatti.",
  },
  {
    icon: "⊕",
    title: "Tecnologie avanzate",
    desc: "Radiologia digitale, scanner intraorale 3D e laser dentale di ultima generazione.",
  },
  {
    icon: "◎",
    title: "Approccio personalizzato",
    desc: "Ogni piano di trattamento è studiato su misura per le esigenze del singolo paziente.",
  },
  {
    icon: "❋",
    title: "Ambiente accogliente",
    desc: "Studio moderno e rilassante, pensato per farti sentire a tuo agio fin dal primo momento.",
  },
];

const featuredTreatments = [
  {
    title: "Odontoiatria Estetica",
    desc: "Sbiancamenti, faccette in ceramica e riallineamento per un sorriso luminoso e naturale.",
    href: "/trattamenti#estetica",
  },
  {
    title: "Implantologia",
    desc: "Impianti in titanio di alta qualità per sostituire i denti mancanti in modo stabile e duraturo.",
    href: "/trattamenti#implantologia",
  },
  {
    title: "Ortodonzia",
    desc: "Apparecchi fissi, mobili e allineatori trasparenti per correggere la posizione dei denti.",
    href: "/trattamenti#ortodonzia",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-alt overflow-hidden">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted uppercase mb-5">
              Studio Dentistico Sparano · Milano
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-dark leading-[1.12] mb-6"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Il sorriso
              <br />
              che hai sempre
              <br />
              <em className="text-primary not-italic">desiderato.</em>
            </h1>
            <p className="text-gray text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Ci prendiamo cura della tua salute orale con professionalità,
              tecnologie avanzate e un approccio umano e personalizzato. Siamo
              qui per te, ogni giorno.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contatti">Prenota una visita</Button>
              <Button href="/trattamenti" variant="secondary">
                Scopri i trattamenti
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div
          aria-hidden="true"
          className="relative h-12 md:h-20 overflow-hidden"
        >
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="var(--color-surface)"
            />
          </svg>
        </div>
      </section>

      {/* Highlights */}
      <Section bg="ivory">
        <SectionHeader
          eyebrow="Perché sceglierci"
          title="La nostra promessa verso di te"
          subtitle="In ogni visita mettiamo al primo posto il tuo benessere, la tua tranquillità e il tuo sorriso."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <Card
              key={item.title}
              className={`animate-fade-up delay-${(i + 1) * 100}`}
            >
              <IconWrapper>
                <span aria-hidden="true">{item.icon}</span>
              </IconWrapper>
              <h3
                className="text-base font-semibold text-dark mb-2"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured treatments */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="I nostri servizi"
          title="Trattamenti su misura"
          subtitle="Dall'estetica alla prevenzione, offriamo una gamma completa di cure odontoiatriche."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredTreatments.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <h3
                className="text-lg font-semibold text-dark mb-3 group-hover:text-primary transition-colors"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                {t.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed mb-5">
                {t.desc}
              </p>
              <span className="text-xs font-semibold tracking-wide text-primary group-hover:gap-2 flex items-center gap-1">
                Scopri di più
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Button href="/trattamenti" variant="secondary">
            Tutti i trattamenti
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="charcoal">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-4">
            Inizia oggi
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-5"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Prenota la tua visita di controllo
          </h2>
          <p className="text-white/65 mb-8 leading-relaxed">
            Una visita preventiva è il primo passo per un sorriso sano e
            duraturo. Contattaci per fissare un appuntamento, siamo disponibili
            dal lunedì al sabato.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href="/contatti"
              className="bg-white text-dark hover:bg-surface-alt"
            >
              Contattaci
            </Button>
            <Button
              href="/chi-siamo"
              variant="ghost"
              className="text-white/70 hover:text-white"
            >
              Conosci il team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
