import type { Metadata } from "next";
import {
  Section,
  SectionHeader,
  Card,
  IconWrapper,
  Button,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Trattamenti",
  description:
    "Scopri tutti i trattamenti dello Studio Dentistico Sparano: odontoiatria estetica, implantologia, ortodonzia, parodontologia e molto altro.",
  openGraph: {
    title: "Trattamenti | Studio Dentistico Sparano",
    description:
      "Scopri la gamma completa di trattamenti dentistici dello Studio Sparano a Milano.",
    url: "https://studiodentisticosparano.it/trattamenti",
  },
};

const categories = [
  {
    id: "estetica",
    icon: "✦",
    title: "Odontoiatria Estetica",
    intro:
      "Un sorriso bello è un sorriso sano. Combiniamo tecniche estetiche di alto livello con la cura della salute dentale per risultati naturali e duraturi.",
    treatments: [
      {
        name: "Sbiancamento professionale",
        desc: "Trattamento in studio o domiciliare per denti visibilmente più sparano in tempi brevi.",
      },
      {
        name: "Faccette in ceramica",
        desc: "Lamine sottilissime applicate sulla superficie del dente per correggere forma, colore e allineamento.",
      },
      {
        name: "Compositi diretti",
        desc: "Restauri estetici in resina composita modellati direttamente sul dente per ripristinarne l'aspetto.",
      },
      {
        name: "Bonding dentale",
        desc: "Tecnica adesiva per correggere piccoli difetti estetici come scheggiature o diastemi.",
      },
    ],
  },
  {
    id: "implantologia",
    icon: "⊕",
    title: "Implantologia",
    intro:
      "Gli impianti dentali sono la soluzione definitiva per sostituire i denti mancanti. Utilizziamo impianti in titanio di ultima generazione con protocolli minimamente invasivi.",
    treatments: [
      {
        name: "Impianto singolo",
        desc: "Sostituzione di un singolo dente mancante con una radice artificiale in titanio e corona su misura.",
      },
      {
        name: "Protesi su impianti",
        desc: "Protesi parziali o totali supportate da impianti per una soluzione stabile e confortevole.",
      },
      {
        name: "All-on-4 / All-on-6",
        desc: "Riabilitazione completa dell'arcata con soli 4 o 6 impianti per chi ha perdita totale dei denti.",
      },
      {
        name: "Rialzo del seno mascellare",
        desc: "Tecnica chirurgica per aumentare il volume osseo nella mascella superiore prima dell'inserimento degli impianti.",
      },
    ],
  },
  {
    id: "ortodonzia",
    icon: "◎",
    title: "Ortodonzia",
    intro:
      "Correggiamo la posizione dei denti e la funzione occlusale per migliorare sia l'estetica che la salute della bocca, con soluzioni per adulti e bambini.",
    treatments: [
      {
        name: "Allineatori trasparenti",
        desc: "Mascherine rimovibili quasi invisibili che correggono gradualmente la posizione dei denti.",
      },
      {
        name: "Apparecchio fisso",
        desc: "Brackets metallici o in ceramica per trattamenti ortodontici complessi con risultati precisi.",
      },
      {
        name: "Ortodonzia intercettiva",
        desc: "Trattamento precoce nei bambini per guidare correttamente la crescita mascellare e dentale.",
      },
      {
        name: "Contenzione",
        desc: "Mantenimento dei risultati ottenuti con fili fissi o mascherine di contenzione.",
      },
    ],
  },
  {
    id: "prevenzione",
    icon: "❋",
    title: "Prevenzione e Igiene",
    intro:
      "La prevenzione è la base della salute orale. Pulizie professionali regolari e programmi personalizzati per mantenere i tuoi denti sani nel tempo.",
    treatments: [
      {
        name: "Igiene orale professionale",
        desc: "Rimozione del tartaro sopra e sottogengivale e lucidatura dei denti con strumenti ultrasonici.",
      },
      {
        name: "Visita di controllo",
        desc: "Esame completo della bocca, dei denti e dei tessuti molli con eventuale radiografia panoramica.",
      },
      {
        name: "Sigillatura dei solchi",
        desc: "Applicazione di resina protettiva nelle fessure dei molari per prevenire le carie, indicata per bambini e adulti.",
      },
      {
        name: "Istruzione all'igiene domiciliare",
        desc: "Consigli personalizzati su tecnica di spazzolamento, filo interdentale e prodotti più adatti.",
      },
    ],
  },
  {
    id: "parodontologia",
    icon: "◑",
    title: "Parodontologia",
    intro:
      "Le malattie gengivali sono tra le cause più frequenti di perdita dei denti. La nostra parodontologa offre diagnosi precoce e trattamenti mirati.",
    treatments: [
      {
        name: "Terapia parodontale causale",
        desc: "Rimozione del tartaro sottogengivale e levigatura radicolare per arrestare la progressione della parodontite.",
      },
      {
        name: "Chirurgia parodontale",
        desc: "Interventi chirurgici per trattare forme gravi di parodontite e rigenerare il tessuto osseo perso.",
      },
      {
        name: "Allungamento di corona clinica",
        desc: "Tecnica per esporre maggiore struttura dentale in casi di gengive eccessive o fratture sottogengivali.",
      },
    ],
  },
  {
    id: "pedodonzia",
    icon: "◇",
    title: "Pedodonzia",
    intro:
      "I bambini meritano cure speciali. Il nostro approccio pediatrico è pensato per rendere la visita dal dentista un'esperienza positiva fin dalla prima volta.",
    treatments: [
      {
        name: "Prima visita pediatrica",
        desc: "Visita di controllo per bambini dai 3 anni con approccio giocoso e rassicurante.",
      },
      {
        name: "Trattamento della carie nei bambini",
        desc: "Cure dei denti da latte e permanenti con materiali e tecniche adatte all'età.",
      },
      {
        name: "Fluoroprofilassi",
        desc: "Applicazione professionale di fluoro per rinforzare lo smalto e prevenire la carie.",
      },
    ],
  },
];

export default function TrattamentiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-sage uppercase mb-4">
            I nostri servizi
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-charcoal leading-tight mb-5 max-w-2xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Trattamenti completi per ogni esigenza
          </h1>
          <p className="text-warm-gray max-w-xl leading-relaxed">
            Dall'estetica alla prevenzione, dalla chirurgia all'ortodonzia: ogni
            paziente trova nel nostro studio una risposta professionale alle
            proprie necessità.
          </p>
        </div>
      </section>

      {/* Treatment categories */}
      {categories.map((cat, catIndex) => (
        <Section
          key={cat.id}
          id={cat.id}
          bg={catIndex % 2 === 0 ? "ivory" : "cream"}
        >
          <div className="flex items-start gap-4 mb-8">
            <IconWrapper>
              <span aria-hidden="true">{cat.icon}</span>
            </IconWrapper>
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold text-charcoal mb-3"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                {cat.title}
              </h2>
              <p className="text-warm-gray max-w-2xl leading-relaxed">
                {cat.intro}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cat.treatments.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-5 border border-cream shadow-sm"
              >
                <h3 className="text-sm font-semibold text-charcoal mb-2">
                  {t.name}
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section bg="charcoal">
        <div className="text-center max-w-lg mx-auto">
          <h2
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Hai domande su un trattamento?
          </h2>
          <p className="text-white/65 mb-7 text-sm leading-relaxed">
            Contattaci per una consulenza iniziale. Ti aiuteremo a capire qual è
            il percorso più adatto alle tue esigenze.
          </p>
          <Button
            href="/contatti"
            className="bg-white text-charcoal hover:bg-cream"
          >
            Contattaci
          </Button>
        </div>
      </Section>
    </>
  );
}
