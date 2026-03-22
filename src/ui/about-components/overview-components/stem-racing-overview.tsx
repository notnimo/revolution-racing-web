export function StemRacingOverview() {
	return (
		<section className="w-full rounded-2xl bg-white p-5 md:p-8 shadow-md fade-in-section">
			<div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-4">
				<h1 className="text-2xl md:text-3xl font-bold text-[#3B9FE5]">
					The STEM Racing Competition
				</h1>
				<img
					src="/stem-racing-logo.png"
					alt="stem racing logo"
					className="w-[22vw] min-w-[8rem] max-w-[10rem] h-auto"
				/>
			</div>

			<div className="text-[#2C3E50] text-sm md:text-base space-y-3 md:max-w-[80%]">
				<p>
					STEM Racing (precedentemente Formula 1 in Schools) è un programma
					educativo internazionale riconosciuto a livello mondiale che coinvolge
					studenti di scuole secondarie di secondo grado. La competizione
					unisce:
				</p>
				<ul className="list-disc list-inside space-y-2">
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
				<p>
					Centinaia di team partecipano alle qualifiche regionali italiane, dai
					50 ai 100+ team per ogni regione nelle aree ad alta
					industrializzazione (Piemonte, Lombardia, Emilia-Romagna) ed un numero
					variabile avanza alle finali regionali (top 10-15 per regione). Infine
					circa 50-100 team competono al campionato nazionale a settembre.
				</p>
			</div>
		</section>
	);
}
