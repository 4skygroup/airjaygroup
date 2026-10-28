import { Link } from "react-router-dom";

type Offre = {
    id: number;
    titre: string;
    date: string;
    lieu: string;
    contrat: string;
};

const offres: Offre[] = [
    { id: 1, titre: "Analyste Private Equity", date: "12.08.2026", lieu: "France", contrat: "CDI" },
    { id: 2, titre: "Analyste Private Equity", date: "12.08.2026", lieu: "France", contrat: "CDI" },
    { id: 3, titre: "Analyste Private Equity", date: "12.08.2026", lieu: "France", contrat: "CDI" },
    { id: 4, titre: "Analyste Private Equity", date: "12.08.2026", lieu: "France", contrat: "CDI" },
    { id: 5, titre: "Analyste Private Equity", date: "12.08.2026", lieu: "France", contrat: "CDI" },
    { id: 6, titre: "Analyste Private Equity", date: "12.08.2026", lieu: "France", contrat: "CDI" },
];

function CarteOffre({ titre, date, lieu, contrat }: Offre) {
    return (
        <article className="flex flex-col bg-white overflow-hidden">

            <div className="flex flex-col flex-1 p-5">
                <h3 className="text-sm font-sans text-couleur3">{titre}</h3>

                <p className="mt-4 text-sm font-sans text-couleur3">Publié le {date}</p>

                <div className="mt-4 flex justify-between text-sm font-sans text-couleur3">
                    <span>{lieu}</span>
                    <span>{contrat}</span>
                </div>

                <div className="mt-8 flex justify-center">
                    <Link
                        to="/contact"
                        className="bg-couleur1 text-couleur2 text-xs font-sans px-4 py-2 rounded-sm hover:bg-couleur3 transition-colors"
                    >
                        Contactez - nous
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function AnnuaireOffres() {
    return (
        <section className="bg-couleur2 py-12 px-6">
            <h2 className="text-center text-2xl font-display text-couleur3">
                Annuaire des Offres
            </h2>

            <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {offres.map((offre) => (
                    <CarteOffre key={offre.id} {...offre} />
                ))}
            </div>
        </section>
    );
}