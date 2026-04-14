import type { Metadata } from "next";
import { Section, SectionHeader, Card, Button, StatCard } from "@/components/ui";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import {
  UsersIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  BrainIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Conosci il team dello Studio Dentistico Sparano: medici specializzati, storia dello studio e filosofia di cura.",
  openGraph: {
    title: "Chi siamo | Studio Dentistico Sparano",
    description: "Il team di professionisti dello Studio Dentistico Sparano.",
    url: "https://studiodentisticosparano.it/chi-siamo",
  },
};

const team = [
  {
    name: "Dott. Marco Sparano",
    role: "Fondatore & Responsabile clinico",
    spec: "Odontoiatria generale, implantologia e chirurgia orale",
    bio: "Laureato in Odontoiatria presso l'Universita degli Studi di Milano, il Dott. Sparano ha conseguito un master in Implantologia presso l'Universita di Barcellona. Con oltre vent'anni di esperienza, guida il team con passione e precisione.",
    initials: "MS",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Dott.ssa Laura Ferretti",
    role: "Specialista in Ortodonzia",
    spec: "Ortodonzia fissa, allineatori trasparenti e ortodonzia pediatrica",
    bio: "Specializzata in Ortodonzia presso l'Universita di Bologna, la Dott.ssa Ferretti e membro attivo della Societa Italiana di Ortodonzia. Si aggiorna costantemente con corsi internazionali per offrire le tecniche piu innovative.",
    initials: "LF",
    color: "bg-accent/10 text-accent-hover",
  },
  {
    name: "Dott. Andrea Conti",
    role: "Parodontologo",
    spec: "Parodontologia, chirurgia rigenerativa e perimplantite",
    bio: "Il Dott. Conti si e specializzato in Parodontologia a Siena e ha svolto un fellowship in chirurgia rigenerativa a Zurigo. La sua competenza e fondamentale per i casi complessi che richiedono la riabilitazione dei tessuti parodontali.",
    initials: "AC",
    color: "bg-secondary/10 text-secondary",
  },
  {
    name: "Dott.ssa Sofia Marchetti",
    role: "Odontoiatra ed Endodontista",
    spec: "Endodonzia, odontoiatria conservativa e pedodonzia",
    bio: "Laureata con lode a Firenze, la Dott.ssa Marchetti ha una spiccata sensibilita verso i pazienti pediatrici e i casi di endodonzia complessa. La sua attenzione al dettaglio la rende un punto di riferimento per i casi piu delicati.",
    initials: "SM",
    color: "bg-primary/10 text-primary",
  },
];

const values = [
  {
    icon: <HeartPulseIcon size={24} />,
    title: "Ascolto",
    desc: "Prima di tutto, ti ascoltiamo. Capire le tue preoccupazioni e aspettative e il primo passo per un trattamento riuscito.",
  },
  {
    icon: <ShieldCheckIcon size={24} />,
    title: "Trasparenza",
    desc: "Spieghiamo ogni trattamento in modo chiaro, con preventivi dettagliati e senza sorprese. Hai il diritto di scegliere in modo consapevole.",
  },
  {
    icon: <BrainIcon size={24} />,
    title: "Aggiornamento continuo",
    desc: "La medicina evolve. Il nostro team partecipa ogni anno a congressi e corsi di formazione per portarti le soluzioni piu efficaci e sicure.",
  },
  {
    icon: <UsersIcon size={24} />,
    title: "Ambiente sicuro",
    desc: "Seguiamo rigorosi protocolli di sterilizzazione e igiene per garantire la massima sicurezza in ogni visita.",
  },
];

const stats = [
  { value: "+2.000", label: "Pazienti seguiti ogni anno" },
  { value: "20+", label: "Anni di esperienza" },
  { value: "4", label: "Specialisti del team" },
  { value: "96%", label: "Tasso di soddisfazione" },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-surface-alt to-surface py-20 md:py-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              Il nostro team
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-dark leading-tight mb-5 text-balance">
              Professionisti al servizio del tuo sorriso
            </h1>
            <p className="text-gray text-base md:text-lg leading-relaxed">
              Lo Studio Dentistico Sparano e nato nel 2003 con una visione
              chiara: offrire cure odontoiatriche di eccellenza in un ambiente
              umano e accogliente. Oggi siamo un team di quattro specialisti che
              condividono la stessa filosofia di cura.
            </p>
          </div>
        </div>
      </section>

      {/* Storia */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="La nostra storia"
              title="Vent&apos;anni di passione per la cura orale"
            />
            <div className="space-y-5 text-gray leading-relaxed">
              <p>
                Lo studio nasce dalla visione del Dott. Marco Sparano, che dopo
                anni di formazione in Italia e all&apos;estero decide di fondare uno
                studio in cui la qualita clinica si unisse all&apos;attenzione genuina
                verso il paziente.
              </p>
              <p>
                Negli anni abbiamo investito in tecnologie all&apos;avanguardia —
                scanner intraorale 3D, radiologia digitale a bassa emissione,
                laser dentale — senza mai perdere di vista cio che conta davvero:
                la relazione con le persone che ci affidano il loro sorriso.
              </p>
              <p>
                Oggi lo studio e cresciuto in dimensioni e competenze, ma la
                nostra filosofia rimane invariata: ogni paziente e unico e merita
                un piano di trattamento cucito su misura.
              </p>
            </div>
          </div>

          {/* Studio photo + Stats */}
          <div className="flex flex-col gap-5">
            <PhotoPlaceholder
              label="Foto storica o panoramica dello studio"
              hint="Scatto d'insieme della sala principale o dell'esterno dello studio. Può essere una foto d'archivio che racconta la storia del luogo."
              aspect="aspect-[16/9]"
            />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StatCard key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Il team"
          title="Conosci i nostri specialisti"
          subtitle="Medici con percorsi formativi di eccellenza, uniti dalla stessa passione per la cura."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member) => (
            <Card key={member.name} className="flex flex-col gap-5">
              {/* Portrait photo placeholder */}
              <PhotoPlaceholder
                label={`Ritratto – ${member.name}`}
                hint={`Foto professionale del ${member.role} in camice bianco, sfondo neutro o studio dentistico. Formato verticale 3:4.`}
                aspect="aspect-[3/2]"
                className="w-full"
              />
              <div>
                <h2 className="font-serif text-lg font-semibold text-dark mb-1">
                  {member.name}
                </h2>
                <p className="text-xs font-medium text-primary mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-muted italic mb-3">{member.spec}</p>
                <p className="text-sm text-gray leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section bg="white">
        <SectionHeader
          eyebrow="La nostra filosofia"
          title="I valori che guidano il nostro lavoro"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center px-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                {v.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-dark mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="charcoal">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary-light uppercase mb-4">
            Contattaci
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight mb-5 text-balance">
            Pronto a sorridere?
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
            Il nostro team è disponibile per rispondere a tutte le tue domande e aiutarti a prenotare una visita senza impegno. Contattaci oggi stesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contatti"
              className="bg-white text-dark hover:bg-surface-alt shadow-lg hover:shadow-xl"
            >
              Contattaci ora
              <ArrowRightIcon size={18} />
            </Button>
            <Button
              href="/trattamenti"
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              Scopri i servizi
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
