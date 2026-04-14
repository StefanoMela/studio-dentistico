import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Section,
  SectionHeader,
  Card,
  FeatureCard,
} from "@/components/ui";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import {
  AwardIcon,
  BrainIcon,
  HeartPulseIcon,
  SmileIcon,
  SparkleIcon,
  ArrowRightIcon,
  CheckIcon,
  ToothIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Studio Dentistico Sparano | Specialisti del sorriso",
  description:
    "Studio dentistico con oltre 20 anni di esperienza. Odontoiatria estetica, implantologia, ortodonzia e cure preventive. Prenota la tua visita.",
  openGraph: {
    title: "Studio Dentistico Sparano | Specialisti del sorriso",
    description:
      "Studio dentistico con oltre 20 anni di esperienza. Odontoiatria estetica, implantologia, ortodonzia.",
    url: "https://studiodentisticosparano.it",
  },
};

const highlights = [
  {
    icon: <AwardIcon size={24} />,
    title: "Esperienza ventennale",
    desc: "Oltre vent'anni di pratica clinica al fianco di migliaia di pazienti soddisfatti.",
  },
  {
    icon: <BrainIcon size={24} />,
    title: "Tecnologie avanzate",
    desc: "Radiologia digitale, scanner intraorale 3D e laser dentale di ultima generazione.",
  },
  {
    icon: <HeartPulseIcon size={24} />,
    title: "Approccio personalizzato",
    desc: "Ogni piano di trattamento e studiato su misura per le esigenze del singolo paziente.",
  },
  {
    icon: <SmileIcon size={24} />,
    title: "Ambiente accogliente",
    desc: "Studio moderno e rilassante, pensato per farti sentire a tuo agio fin dal primo momento.",
  },
];

const featuredTreatments = [
  {
    title: "Odontoiatria Estetica",
    desc: "Sbiancamenti, faccette in ceramica e riallineamento per un sorriso luminoso e naturale.",
    href: "/trattamenti#estetica",
    features: ["Sbiancamento professionale", "Faccette in ceramica", "Bonding dentale"],
  },
  {
    title: "Implantologia",
    desc: "Impianti in titanio di alta qualita per sostituire i denti mancanti in modo stabile e duraturo.",
    href: "/trattamenti#implantologia",
    features: ["Impianto singolo", "All-on-4 / All-on-6", "Protesi su impianti"],
  },
  {
    title: "Ortodonzia",
    desc: "Apparecchi fissi, mobili e allineatori trasparenti per correggere la posizione dei denti.",
    href: "/trattamenti#ortodonzia",
    features: ["Allineatori trasparenti", "Apparecchio fisso", "Ortodonzia pediatrica"],
  },
];

const stats = [
  { value: "+2.000", label: "Pazienti ogni anno" },
  { value: "20+", label: "Anni di esperienza" },
  { value: "96%", label: "Tasso di soddisfazione" },
  { value: "4", label: "Specialisti del team" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-surface-alt to-surface overflow-hidden">
        {/* Decorative elements */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-dark) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <ToothIcon size={16} className="text-primary" />
                <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                  Studio Dentistico Sparano
                </span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-dark leading-[1.1] mb-6 text-balance">
                Il sorriso che hai sempre{" "}
                <span className="gradient-text">desiderato</span>
              </h1>
              
              <p className="text-gray text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Ci prendiamo cura della tua salute orale con professionalita,
                tecnologie avanzate e un approccio umano e personalizzato. Siamo
                qui per te, ogni giorno.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contatti" size="lg">
                  Prenota una visita
                  <ArrowRightIcon size={18} />
                </Button>
                <Button href="/trattamenti" variant="outline" size="lg">
                  Scopri i trattamenti
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span className="font-serif text-2xl font-semibold text-primary">{stat.value}</span>
                    <span className="text-xs text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero photo placeholder */}
            <div className="relative hidden lg:block animate-fade-up delay-200">
              {/* Tilted background card for depth */}
              <div aria-hidden="true" className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 rotate-3 scale-95" />
              <PhotoPlaceholder
                label="Foto hero – reception o sala d'attesa"
                hint="Scatto luminoso dell'ingresso o dell'area di attesa dello studio, con luce naturale e atmosfera accogliente."
                aspect="aspect-[4/5]"
                className="relative shadow-2xl shadow-primary/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Perche sceglierci"
          title="La nostra promessa verso di te"
          subtitle="In ogni visita mettiamo al primo posto il tuo benessere, la tua tranquillita e il tuo sorriso."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.desc}
              className={`animate-fade-up delay-${(i + 1) * 100}`}
            />
          ))}
        </div>
      </Section>

      {/* Gallery strip */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Il nostro studio"
          title="Ambienti moderni e accoglienti"
          subtitle="Ogni spazio e stato progettato per metterti a tuo agio: dalla sala d'attesa alla poltrona, curi che ti senti al sicuro."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <PhotoPlaceholder
            label="Sala operatoria principale"
            hint="Vista della poltrona operatoria con strumentazione digitale, illuminazione clinica e ambiente pulito e ordinato."
            aspect="aspect-[3/2]"
            className="sm:col-span-2 lg:col-span-1 lg:row-span-1"
          />
          <PhotoPlaceholder
            label="Area di accoglienza / reception"
            hint="Bancone della reception, arredi moderni, luce naturale. Trasmettere calore e professionalita al primo sguardo."
            aspect="aspect-[3/2]"
          />
          <PhotoPlaceholder
            label="Sala d'attesa"
            hint="Poltroncine comode, riviste, verde decorativo. Atmosfera rilassante che riduce l'ansia del paziente."
            aspect="aspect-[3/2]"
          />
        </div>
      </Section>

      {/* Featured treatments */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="I nostri servizi"
          title="Trattamenti su misura"
          subtitle="Dall'estetica alla prevenzione, offriamo una gamma completa di cure odontoiatriche per ogni esigenza."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredTreatments.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group bg-white rounded-2xl p-7 border border-border hover:border-primary/30 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <SparkleIcon size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-dark group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
              </div>
              <p className="text-sm text-gray leading-relaxed mb-5">{t.desc}</p>
              <ul className="space-y-2 mb-5">
                {t.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-muted">
                    <CheckIcon size={14} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-primary group-hover:gap-2.5 transition-all">
                Scopri di piu
                <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Button href="/trattamenti" variant="outline">
            Tutti i trattamenti
          </Button>
        </div>
      </Section>

      {/* Stats section */}
      <Section bg="warm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center" hover={false}>
              <p className="font-serif text-3xl md:text-4xl font-semibold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-xs text-gray">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="charcoal">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <ToothIcon size={32} className="text-primary-light" />
          </div>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary-light uppercase mb-4">
            Inizia oggi
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight mb-5 text-balance">
            Prenota la tua visita di controllo
          </h2>
          <p className="text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
            Una visita preventiva è il primo passo per un sorriso sano e duraturo. Contattaci per fissare un appuntamento, siamo disponibili dal lunedì al sabato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contatti" variant="inverted">
              Prenota una visita
              <ArrowRightIcon size={18} />
            </Button>
            <Button href="/chi-siamo" variant="ghost-inverted">
              Conosci il team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
