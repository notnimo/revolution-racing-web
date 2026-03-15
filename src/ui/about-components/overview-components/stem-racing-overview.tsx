import Image from "next/image";

export function StemRacingOverview() {
  return (
    <div className="flex flex-col items-center max-w-[50vw]">
      <div className="flex flex-row justify-around items-center-safe gap-10">
        <h1>The STEM Racing Competition</h1>
        <img
          src="/stem-racing-logo.png"
          alt="stem racing logo"
          className="h-[6rem]"
        />
      </div>
      <div>
        <p>
          STEM Racing (precedentemente Formula 1 in Schools) è un programma
          educativo internazionale riconosciuto a livello mondiale che coinvolge
          studenti di scuole secondarie di secondo grado. La competizione
          unisce:
        </p>
        <ul>
          <li>
            <strong>Ingegneria e tecnologia:</strong> progettazione e
            realizzazione di una vettura in miniatura
          </li>
          <li>
            <strong>Gestione progettuale:</strong> budget, timeline, controllo
            delle risorse
          </li>
          <li>
            <strong>Comunicazione:</strong> presentazione professionale del
            progetto e brand identity
          </li>
          <li>
            <strong>Competizione:</strong> gare cronometrate su pista con
            sistema di timing elettronico
          </li>
        </ul>
        <div>
          Centinaia di team partecipano alle qualifiche regionali italiane, dai
          50 ai 100+ team per ogni regione nelle aree ad alta
          industrializzazione (Piemonte, Lombardia, Emilia-Romagna) ed un numero
          variabile avanza alle finali regionali (top 10-15 per regione). Infine
          circa 50-100 team competono al campionato nazionale a settembre
        </div>
      </div>
    </div>
  );
}
