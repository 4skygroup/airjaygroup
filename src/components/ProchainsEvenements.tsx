import type { Evenement } from "../data/Evenements.ts";

type ProchainsEvenementsProps = {
    titre?: string;
    evenements: Evenement[];
};

const MOIS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

export default function ProchainsEvenements({
                                                titre = "Les prochains événements",
                                                evenements,
                                            }: ProchainsEvenementsProps) {
    return (
        <section className="bg-couleur2 px-6 py-16">
            <h2 className="mb-12 text-center text-xl text-couleur3">{titre}</h2>

            <div className="mx-auto flex max-w-4xl flex-col gap-10">
                {evenements.map((evenement) => {
                    const [jour, mois, annee] = evenement.date.split(".");

                    return (
                        <article
                            key={`${evenement.titre}-${evenement.date}`}
                            className="flex items-center gap-8 text-couleur3"
                        >
                            <div className="flex w-12 flex-col items-center text-center">
                                <span className="text-xs">{MOIS[Number(mois) - 1]}</span>
                                <span className="font-display text-2xl">{jour}</span>
                                <span className="text-xs text-couleur1">{annee}</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl">{evenement.titre}</h3>
                                <p className="text-xs text-couleur1">{evenement.description}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}