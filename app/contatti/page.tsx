import type { Metadata } from "next";
import { Section, Card } from "@/components/ui";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MetroIcon,
  BusIcon,
  CarIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo Studio Dentistico Sparano: indirizzo, orari, telefono ed email. Siamo in Via Giuseppe Verdi 14.",
  openGraph: {
    title: "Contatti | Studio Dentistico Sparano",
    description: "Indirizzo, orari e recapiti dello Studio Dentistico Sparano.",
    url: "https://studiodentisticosparano.it/contatti",
  },
};

const orari = [
  { day: "Lunedi", hours: "09:00 – 19:00" },
  { day: "Martedi", hours: "09:00 – 19:00" },
  { day: "Mercoledi", hours: "09:00 – 19:00" },
  { day: "Giovedi", hours: "09:00 – 19:00" },
  { day: "Venerdi", hours: "09:00 – 19:00" },
  { day: "Sabato", hours: "09:00 – 13:00" },
  { day: "Domenica", hours: "Chiuso" },
];

const transportOptions = [
  {
    icon: <MetroIcon size={24} />,
    title: "Metro",
    desc: "Linea 3 (Gialla), fermata Montenapoleone – 3 minuti a piedi.",
  },
  {
    icon: <BusIcon size={24} />,
    title: "Bus e Tram",
    desc: "Fermate di superficie nelle immediate vicinanze con linee 1, 94 e 61.",
  },
  {
    icon: <CarIcon size={24} />,
    title: "Auto",
    desc: "Parcheggio a pagamento in Via Borgospesso e in Via della Spiga, a 200 m dallo studio.",
  },
];

export default function ContattiPage() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Via+Giuseppe+Verdi+14+Milano";

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
              Vieni a trovarci
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-dark leading-tight mb-5 text-balance">
              Dove siamo e come raggiungerci
            </h1>
            <p className="text-gray text-base md:text-lg leading-relaxed">
              Il nostro studio si trova nel cuore di Milano. Siamo facilmente
              raggiungibili con i mezzi pubblici e disponiamo di parcheggio nelle
              immediate vicinanze.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts grid */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Address */}
          <Card>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <MapPinIcon size={24} />
            </div>
            <h2 className="font-serif text-lg font-semibold text-dark mb-3">
              Indirizzo
            </h2>
            <address className="not-italic text-sm text-gray leading-relaxed mb-4">
              Via Giuseppe Verdi, 14
              <br />
              20121 Milano (MI)
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              Apri in Google Maps
              <span aria-hidden="true" className="text-lg">↗</span>
            </a>
          </Card>

          {/* Phone & Email */}
          <Card>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <PhoneIcon size={24} />
            </div>
            <h2 className="font-serif text-lg font-semibold text-dark mb-3">
              Recapiti
            </h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs text-muted font-medium tracking-wide uppercase mb-1">
                  Telefono
                </dt>
                <dd>
                  <a
                    href="tel:+390212345678"
                    className="text-gray hover:text-primary transition-colors font-medium"
                  >
                    02 1234 5678
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted font-medium tracking-wide uppercase mb-1">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:info@studiosparano.it"
                    className="text-gray hover:text-primary transition-colors font-medium break-all"
                  >
                    info@studiosparano.it
                  </a>
                </dd>
              </div>
            </dl>
          </Card>

          {/* Hours */}
          <Card>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <ClockIcon size={24} />
            </div>
            <h2 className="font-serif text-lg font-semibold text-dark mb-3">
              Orari di apertura
            </h2>
            <dl className="space-y-2">
              {orari.map(({ day, hours }) => (
                <div key={day} className="flex justify-between text-sm">
                  <dt className="text-gray">{day}</dt>
                  <dd
                    className={`font-medium ${
                      hours === "Chiuso" ? "text-muted" : "text-dark"
                    }`}
                  >
                    {hours}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>

        {/* Map placeholder / link */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visualizza lo studio su Google Maps (apre in una nuova finestra)"
            className="group relative bg-gradient-to-br from-surface-alt to-surface-warm h-64 md:h-80 flex items-center justify-center"
          >
            {/* Decorative grid mimicking a map */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              {/* Street lines */}
              <div className="absolute inset-0 opacity-10">
                {[20, 40, 60, 80].map((p) => (
                  <div
                    key={`h${p}`}
                    className="absolute w-full h-px bg-primary"
                    style={{ top: `${p}%` }}
                  />
                ))}
                {[15, 35, 55, 75, 90].map((p) => (
                  <div
                    key={`v${p}`}
                    className="absolute h-full w-px bg-primary"
                    style={{ left: `${p}%` }}
                  />
                ))}
              </div>
              {/* Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center animate-float">
                  <div className="w-6 h-6 rounded-full bg-primary border-3 border-white shadow-lg" />
                  <div className="w-0.5 h-5 bg-primary" />
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-border text-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <p className="font-serif text-base font-semibold text-dark mb-1">
                Via Giuseppe Verdi, 14 – Milano
              </p>
              <p className="text-sm text-primary flex items-center justify-center gap-1.5">
                Apri in Google Maps
                <span aria-hidden="true" className="text-lg">↗</span>
              </p>
            </div>
          </a>
        </div>

        {/* How to reach */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {transportOptions.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-2xl bg-surface-alt border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-dark mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
