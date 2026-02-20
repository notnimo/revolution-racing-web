import Image from "next/image";

export function StemRacingOverview() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-around items-center-safe">
        <h1>The STEM Racing Competition</h1>
        <Image
          src="/stem-racing-logo.jpg"
          alt="stem racing logo"
          className="h-20 w-100"
          width={0}
          height={0}
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
      </div>
    </div>
  );
}
