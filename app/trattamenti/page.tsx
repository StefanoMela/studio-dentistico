import type { Metadata } from "next";
import {
  Section,
  SectionHeader,
  Button,
} from "@/components/ui";
import {
  SparkleIcon,
  ToothIcon,
  TargetIcon,
  ShieldCheckIcon,
  HeartPulseIcon,
  SmileIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Trattamenti",
  description:
    "Scopri tutti i trattamenti dello Studio Dentistico Sparano: odontoiatria estetica, implantologia, ortodonzia, parodontologia e molto altro.",
  openGraph: {
    title: "Trattamenti | Studio Dentistico Sparano",
    description:
      "Scopri la gamma completa di trattamenti dentistici dello Studio Sparano.",
    url: "https://studiodentisticosparano.it/trattamenti",
  },
};

const categories = [
  {
    id: "estetica",
    icon: <SparkleIcon size={24} />,
    title: "Odontoiatria Estetica",
    intro:
      "Un sorriso bello e un sorriso sano. Combiniamo tecniche estetiche di alto livello con la cura della salute dentale per risultati naturali e duraturi.",
    treatments: [
      {
        name: "Sbiancamento professionale",
        desc: "Trattamento in studio o domiciliare per denti visibilmente piu bianchi in tempi brevi.",
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
    icon: <ToothIcon size={24} />,
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
    icon: <TargetIcon size={24} />,
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
    icon: <ShieldCheckIcon size={24} />,
    title: "Prevenzione e Igiene",
    intro:
      "La prevenzione e la base della salute orale. Pulizie professionali regolari e programmi personalizzati per mantenere i tuoi denti sani nel tempo.",
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
        desc: "Consigli personalizzati su tecnica di spazzolamento, filo interdentale e prodotti piu adatti.",
      },
    ],
  },
  {
    id: "parodontologia",
    icon: <HeartPulseIcon size={24} />,
    title: "Parodontologia",
    intro:
      "Le malattie gengivali sono tra le cause piu frequenti di perdita dei denti. La nostra parodontologa offre diagnosi precoce e trattamenti mirati.",
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
    icon: <SmileIcon size={24} />,
    title: "Pedodonzia",
    intro:
      "I bambini meritano cure speciali. Il nostro approccio pediatrico e pensato per rendere la visita dal dentista un'esperienza positiva fin dalla prima volta.",
    treatments: [
      {
        name: "Prima visita pediatrica",
        desc: "Visita di controllo per bambini dai 3 anni con approccio giocoso e rassicurante.",
      },
      {
        name: "Trattamento della carie nei bambini",
        desc: "Cure dei denti da latte e permanenti con materiali e tecniche adatte all'eta.",
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
      <section className="relative bg-gradient-to-b from-surface-alt to-surface py-20 md:py-28 overflow-hidden">
        {/* Decorative */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              I nostri servizi
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-dark leading-tight mb-5 text-balance">
              Trattamenti completi per ogni esigenza
            </h1>
            <p className="text-gray text-base md:text-lg leading-relaxed">
              Dall'estetica alla prevenzione, dalla chirurgia all'ortodonzia: ogni
              paziente trova nel nostro studio una risposta professionale alle
              proprie necessita.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment categories */}
      {categories.map((cat, catIndex) => (
        <Section
          key={cat.id}
          id={cat.id}
          bg={catIndex % 2 === 0 ? "white" : "cream"}
        >
          <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              {cat.icon}
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-dark mb-3">
                {cat.title}
              </h2>
              <p className="text-gray max-w-2xl leading-relaxed">{cat.intro}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cat.treatments.map((t) => (
              <div
                key={t.name}
                className="group bg-white rounded-xl p-5 border border-border hover:border-primary/20 card-hover"
              >
                <h3 className="text-sm font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {t.name}
                </h3>
                <p className="text-xs text-gray leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section bg="charcoal">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <ToothIcon size={28} className="text-primary-light" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4 text-balance">
            Hai domande su un trattamento?
          </h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            Contattaci per una consulenza iniziale. Ti aiuteremo a capire qual e
            il percorso piu adatto alle tue esigenze.
          </p>
          <Button
            href="/contatti"
            className="bg-white text-dark hover:bg-surface-alt"
          >
            Contattaci
            <ArrowRightIcon size={18} />
          </Button>
        </div>
      </Section>
    </>
  );
}
