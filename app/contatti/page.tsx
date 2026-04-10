import type { Metadata } from "next";
import { Section, Card } from "@/components/ui";

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
  { day: "Lunedì", hours: "09:00 – 19:00" },
  { day: "Martedì", hours: "09:00 – 19:00" },
  { day: "Mercoledì", hours: "09:00 – 19:00" },
  { day: "Giovedì", hours: "09:00 – 19:00" },
  { day: "Venerdì", hours: "09:00 – 19:00" },
  { day: "Sabato", hours: "09:00 – 13:00" },
  { day: "Domenica", hours: "Chiuso" },
];

export default function ContattiPage() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Via+Giuseppe+Verdi+14+Milano";

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted uppercase mb-4">
            Vieni a trovarci
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-dark leading-tight mb-4 max-w-xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Dove siamo e come raggiungerci
          </h1>
          <p className="text-gray max-w-lg leading-relaxed">
            Il nostro studio si trova nel cuore di Milano. Siamo facilmente
            raggiungibili con i mezzi pubblici e disponiamo di parcheggio nelle
            immediate vicinanze.
          </p>
        </div>
      </section>

      {/* Contacts grid */}
      <Section bg="ivory">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Address */}
          <Card>
            <div
              className="w-12 h-12 rounded-xl bg-surface-alt text-primary flex items-center justify-center text-xl mb-4"
              aria-hidden="true"
            >
              ◎
            </div>
            <h2
              className="text-base font-semibold text-dark mb-3"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Indirizzo
            </h2>
            <address className="not-italic text-sm text-gray leading-relaxed">
              Via Giuseppe Verdi, 14
              <br />
              20121 Milano (MI)
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary hover:text-dark transition-colors"
            >
              Apri in Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </Card>

          {/* Phone & Email */}
          <Card>
            <div
              className="w-12 h-12 rounded-xl bg-surface-alt text-primary flex items-center justify-center text-xl mb-4"
              aria-hidden="true"
            >
              ✦
            </div>
            <h2
              className="text-base font-semibold text-dark mb-3"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Recapiti
            </h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs text-muted font-medium tracking-wide uppercase mb-0.5">
                  Telefono
                </dt>
                <dd>
                  <a
                    href="tel:+390212345678"
                    className="text-gray hover:text-dark transition-colors"
                  >
                    02 1234 5678
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted font-medium tracking-wide uppercase mb-0.5">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:info@studiosparano.it"
                    className="text-gray hover:text-dark transition-colors break-all"
                  >
                    info@studiosparano.it
                  </a>
                </dd>
              </div>
            </dl>
          </Card>

          {/* Hours */}
          <Card>
            <div
              className="w-12 h-12 rounded-xl bg-surface-alt text-primary flex items-center justify-center text-xl mb-4"
              aria-hidden="true"
            >
              ⊕
            </div>
            <h2
              className="text-base font-semibold text-dark mb-3"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Orari di apertura
            </h2>
            <dl className="space-y-1.5">
              {orari.map(({ day, hours }) => (
                <div key={day} className="flex justify-between text-sm">
                  <dt className="text-gray">{day}</dt>
                  <dd
                    className={`font-medium ${
                      hours === "Chiuso" ? "text-gray opacity-50" : "text-dark"
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
            className="group relative bg-surface-alt h-56 md:h-80 flex items-center justify-center"
          >
            {/* Decorative grid mimicking a map */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              {/* Street lines */}
              <div className="absolute inset-0 opacity-20">
                {[20, 40, 60, 80].map((p) => (
                  <div
                    key={`h${p}`}
                    className="absolute w-full h-px bg-sage"
                    style={{ top: `${p}%` }}
                  />
                ))}
                {[15, 35, 55, 75, 90].map((p) => (
                  <div
                    key={`v${p}`}
                    className="absolute h-full w-px bg-sage"
                    style={{ left: `${p}%` }}
                  />
                ))}
              </div>
              {/* Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-accent border-2 border-white shadow-lg" />
                  <div className="w-0.5 h-4 bg-accent" />
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="relative z-10 bg-surface/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow text-center group-hover:shadow-md transition-shadow">
              <p className="text-sm font-semibold text-dark">
                Via Giuseppe Verdi, 14 – Milano
              </p>
              <p className="text-xs text-primary mt-1 flex items-center justify-center gap-1">
                Apri in Google Maps
                <span aria-hidden="true">↗</span>
              </p>
            </div>
          </a>
        </div>

        {/* How to reach */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🚇",
              title: "Metro",
              desc: "Linea 3 (Gialla), fermata Montenapoleone – 3 minuti a piedi.",
            },
            {
              icon: "🚌",
              title: "Bus e Tram",
              desc: "Fermate di superficie nelle immediate vicinanze con linee 1, 94 e 61.",
            },
            {
              icon: "🚗",
              title: "Auto",
              desc: "Parcheggio a pagamento in Via Borgospesso e in Via della Spiga, a 200 m dallo studio.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-xl bg-surface-alt"
            >
              <span className="text-2xl shrink-0" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
