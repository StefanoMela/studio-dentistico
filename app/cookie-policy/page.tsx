import type { Metadata } from "next";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sull'uso dei cookie del sito web dello Studio Dentistico Sparano di Milano.",
};

export default function CookiePolicyPage() {
  const lastUpdate = "10 aprile 2025";
  return (
    <Section bg="ivory">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] text-sage uppercase mb-3">
          Informativa legale
        </p>
        <h1
          className="text-3xl md:text-4xl font-semibold text-charcoal mb-3 leading-tight"
          style={{ fontFamily: "Playfair Display, Georgia, serif" }}
        >
          Cookie Policy
        </h1>
        <p className="text-sm text-warm-gray mb-10">
          Ultimo aggiornamento: {lastUpdate}
        </p>

        <div className="prose-policy">
          <h2>1. Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti web visitati
            dall'utente inviano al suo terminale (computer, tablet, smartphone),
            dove vengono memorizzati per essere poi ritrasmessi agli stessi siti
            alla visita successiva. I cookie sono utilizzati per diverse
            finalità: esecuzione di autenticazioni informatiche, monitoraggio di
            sessioni, memorizzazione di informazioni su specifiche
            configurazioni riguardanti gli utenti che accedono al server, ecc.
          </p>

          <h2>2. Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento dei dati personali raccolti tramite il
            presente sito web è:
          </p>
          <p>
            <strong>Studio Dentistico Sparano</strong>
            <br />
            Via Giuseppe Verdi, 14 – 20121 Milano (MI)
            <br />
            P. IVA 01234567890
            <br />
            Email:{" "}
            <a
              href="mailto:info@studiosparano.it"
              className="text-sage-dark underline underline-offset-2"
            >
              info@studiosparano.it
            </a>
          </p>

          <h2>3. Tipologie di cookie utilizzati</h2>

          <h3>3.1 Cookie tecnici strettamente necessari</h3>
          <p>
            Questi cookie sono indispensabili per il corretto funzionamento del
            sito web e non possono essere disabilitati. Vengono impostati in
            risposta ad azioni compiute dall'utente, come la memorizzazione
            delle preferenze relative ai cookie stessi. Non contengono
            informazioni personali identificabili.
          </p>
          <p>
            Il sito utilizza un cookie di tipo <em>localStorage</em> per
            memorizzare la scelta dell'utente in merito all'accettazione o al
            rifiuto dei cookie. Questa informazione viene salvata esclusivamente
            nel dispositivo dell'utente e non viene trasmessa a server di terze
            parti.
          </p>

          <h3>3.2 Cookie analitici (non attivi)</h3>
          <p>
            Il presente sito web <strong>non utilizza</strong> attualmente
            strumenti di analisi del traffico web (come Google Analytics o
            strumenti analoghi). Qualora in futuro venissero introdotti, la
            presente informativa sarà aggiornata e all'utente sarà richiesto un
            consenso esplicito prima di qualsiasi raccolta di dati.
          </p>

          <h3>3.3 Cookie di profilazione e marketing (non presenti)</h3>
          <p>
            Il presente sito web non utilizza cookie di profilazione né cookie
            di terze parti a fini pubblicitari o di remarketing. Nessun dato
            relativo alla navigazione degli utenti viene condiviso con
            piattaforme pubblicitarie.
          </p>

          <h2>4. Base giuridica del trattamento</h2>
          <p>
            Il trattamento dei dati attraverso i soli cookie tecnici
            strettamente necessari si fonda sull'interesse legittimo del
            titolare (art. 6, comma 1, lett. f del GDPR) a garantire il corretto
            funzionamento del sito, nonché sull'esecuzione di un contratto o di
            misure precontrattuali (art. 6, comma 1, lett. b del GDPR) quando
            applicabile.
          </p>
          <p>
            Per eventuali cookie non necessari (analitici, di profilazione), la
            base giuridica è il consenso esplicito dell'utente (art. 6, comma 1,
            lett. a del GDPR), liberamente espresso tramite il banner presente
            sul sito.
          </p>

          <h2>5. Durata dei cookie</h2>
          <p>I cookie utilizzati da questo sito hanno le seguenti durate:</p>
          <ul>
            <li>
              <strong>Cookie di preferenza (localStorage)</strong>: persistente,
              viene conservato sul dispositivo dell'utente fino a quando
              l'utente non cancella manualmente i dati di navigazione o lo
              storage locale del browser.
            </li>
          </ul>

          <h2>6. Diritti dell'utente</h2>
          <p>
            In qualità di interessato, hai il diritto di accedere ai tuoi dati
            personali, richiederne la rettifica, la cancellazione o la
            portabilità, opporti al trattamento o chiederne la limitazione, nei
            casi previsti dal Regolamento UE 2016/679 (GDPR) e dal D.Lgs.
            196/2003 e ss.mm.ii.
          </p>
          <p>
            Per esercitare tali diritti puoi contattarci all'indirizzo email{" "}
            <a
              href="mailto:info@studiosparano.it"
              className="text-sage-dark underline underline-offset-2"
            >
              info@studiosparano.it
            </a>
            . Hai inoltre il diritto di proporre reclamo al Garante per la
            Protezione dei Dati Personali (
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-dark underline underline-offset-2"
            >
              www.garanteprivacy.it
            </a>
            ).
          </p>

          <h2>7. Come gestire i cookie</h2>
          <p>
            Puoi modificare le tue preferenze in qualsiasi momento cancellando
            il dato memorizzato nel localStorage del tuo browser. Di seguito le
            istruzioni per i principali browser:
          </p>
          <ul>
            <li>
              <strong>Google Chrome</strong>: Impostazioni → Privacy e sicurezza
              → Cookie e altri dati dei siti → Visualizza tutti i dati e le
              autorizzazioni per i siti
            </li>
            <li>
              <strong>Mozilla Firefox</strong>: Impostazioni → Privacy e
              sicurezza → Cookie e dati dei siti web
            </li>
            <li>
              <strong>Apple Safari</strong>: Preferenze → Privacy → Gestisci
              dati dei siti web
            </li>
            <li>
              <strong>Microsoft Edge</strong>: Impostazioni → Cookie e
              autorizzazioni sito → Cookie e dati archiviati
            </li>
          </ul>
          <p>
            Tieni presente che la disabilitazione dei cookie tecnici potrebbe
            compromettere la corretta navigazione del sito.
          </p>

          <h2>8. Modifiche alla presente informativa</h2>
          <p>
            Il titolare si riserva il diritto di modificare o aggiornare i
            contenuti della presente Cookie Policy in qualsiasi momento, in
            seguito a variazioni normative, tecnologiche o operative. In caso di
            modifiche sostanziali, l'utente sarà informato tramite avviso
            visibile sul sito. La data dell'ultimo aggiornamento è indicata in
            cima a questa pagina.
          </p>
        </div>
      </div>
    </Section>
  );
}
