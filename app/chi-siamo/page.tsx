import type { Metadata } from "next";
import { Section, SectionHeader, Card, Button } from "@/components/ui";

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
    bio: "Laureato in Odontoiatria presso l'Università degli Studi di Milano, il Dott. Sparano ha conseguito un master in Implantologia presso l'Università di Barcellona. Con oltre vent'anni di esperienza, guida il team con passione e precisione.",
    initials: "MB",
  },
  {
    name: "Dott.ssa Laura Ferretti",
    role: "Specialista in Ortodonzia",
    spec: "Ortodonzia fissa, allineatori trasparenti e ortodonzia pediatrica",
    bio: "Specializzata in Ortodonzia presso l'Università di Bologna, la Dott.ssa Ferretti è membro attivo della Società Italiana di Ortodonzia. Si aggiorna costantemente con corsi internazionali per offrire le tecniche più innovative.",
    initials: "LF",
  },
  {
    name: "Dott. Andrea Conti",
    role: "Parodontologo",
    spec: "Parodontologia, chirurgia rigenerativa e perimplantite",
    bio: "Il Dott. Conti si è specializzato in Parodontologia a Siena e ha svolto un fellowship in chirurgia rigenerativa a Zurigo. La sua competenza è fondamentale per i casi complessi che richiedono la riabilitazione dei tessuti parodontali.",
    initials: "AC",
  },
  {
    name: "Dott.ssa Sofia Marchetti",
    role: "Odontoiatra ed Endodontista",
    spec: "Endodonzia, odontoiatria conservativa e pedodonzia",
    bio: "Laureata con lode a Firenze, la Dott.ssa Marchetti ha una spiccata sensibilità verso i pazienti pediatrici e i casi di endodonzia complessa. La sua attenzione al dettaglio la rende un punto di riferimento per i casi più delicati.",
    initials: "SM",
  },
];

const values = [
  {
    title: "Ascolto",
    desc: "Prima di tutto, ti ascoltiamo. Capire le tue preoccupazioni e aspettative è il primo passo per un trattamento riuscito.",
  },
  {
    title: "Trasparenza",
    desc: "Spieghiamo ogni trattamento in modo chiaro, con preventivi dettagliati e senza sorprese. Hai il diritto di scegliere in modo consapevole.",
  },
  {
    title: "Aggiornamento continuo",
    desc: "La medicina evolve. Il nostro team partecipa ogni anno a congressi e corsi di formazione per portarti le soluzioni più efficaci e sicure.",
  },
  {
    title: "Ambiente sicuro",
    desc: "Seguiamo rigorosi protocolli di sterilizzazione e igiene per garantire la massima sicurezza in ogni visita.",
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted uppercase mb-4">
              Il nostro team
            </p>
            <h1
              className="text-4xl md:text-5xl font-semibold text-dark leading-tight mb-5"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Professionisti al servizio del tuo sorriso
            </h1>
            <p className="text-gray leading-relaxed">
              Lo Studio Dentistico Sparano è nato nel 2003 con una visione
              chiara: offrire cure odontoiatriche di eccellenza in un ambiente
              umano e accogliente. Oggi siamo un team di quattro specialisti che
              condividono la stessa filosofia di cura.
            </p>
          </div>
        </div>
      </section>

      {/* Storia */}
      <Section bg="ivory">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="La nostra storia"
              title="Vent'anni di passione per la cura orale"
            />
            <p className="text-gray leading-relaxed mb-5">
              Lo studio nasce dalla visione del Dott. Marco Sparano, che dopo
              anni di formazione in Italia e all'estero decide di fondare uno
              studio in cui la qualità clinica si unisse all'attenzione genuina
              verso il paziente.
            </p>
            <p className="text-gray leading-relaxed mb-5">
              Negli anni abbiamo investito in tecnologie all'avanguardia —
              scanner intraorale 3D, radiologia digitale a bassa emissione,
              laser dentale — senza mai perdere di vista ciò che conta davvero:
              la relazione con le persone che ci affidano il loro sorriso.
            </p>
            <p className="text-gray leading-relaxed">
              Oggi lo studio è cresciuto in dimensioni e competenze, ma la
              nostra filosofia rimane invariata: ogni paziente è unico e merita
              un piano di trattamento cucito su misura.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "+2.000", label: "Pazienti seguiti ogni anno" },
              { value: "20+", label: "Anni di esperienza" },
              { value: "4", label: "Specialisti del team" },
              { value: "96%", label: "Tasso di soddisfazione" },
            ].map((s) => (
              <Card key={s.label} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-semibold text-primary mb-2"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-gray leading-snug">{s.label}</p>
              </Card>
            ))}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <Card key={member.name} className="flex gap-5">
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-xl bg-surface-alt text-primary flex items-center justify-center font-semibold text-base shrink-0"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <div>
                <h2
                  className="text-base font-semibold text-dark mb-0.5"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  {member.name}
                </h2>
                <p className="text-xs font-medium text-primary mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-muted italic mb-3">{member.spec}</p>
                <p className="text-xs text-gray leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section bg="ivory">
        <SectionHeader
          eyebrow="La nostra filosofia"
          title="I valori che guidano il nostro lavoro"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center px-4">
              <div
                className="w-10 h-px bg-sage mx-auto mb-4"
                aria-hidden="true"
              />
              <h3
                className="text-base font-semibold text-dark mb-3"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                {v.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="cream">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto text-center md:text-left">
          <div>
            <h2
              className="text-2xl font-semibold text-dark mb-2"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Vieni a conoscerci
            </h2>
            <p className="text-gray text-sm">
              La prima visita è il modo migliore per iniziare un percorso
              insieme.
            </p>
          </div>
          <Button href="/contatti" className="shrink-0">
            Prenota ora
          </Button>
        </div>
      </Section>
    </>
  );
}
