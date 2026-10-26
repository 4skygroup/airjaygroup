import { useState } from "react";
import { Link } from "react-router-dom";
import type { Actualite } from "../data/Actualites.ts";

type ActualitesListeProps = {
    actualites: Actualite[];
    limite?: number;
};

export default function ActualitesListe({ actualites, limite }: ActualitesListeProps) {
    const [toutAfficher, setToutAfficher] = useState(false);

    const peutVoirPlus = limite !== undefined && !toutAfficher && actualites.length > limite;
    const actualitesAffichees = peutVoirPlus ? actualites.slice(0, limite) : actualites;

    return (
        <>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
                {actualitesAffichees.map((actu) => (
                    <article
                        key={actu.id}
                        className="flex flex-col items-center bg-couleur5 px-12 py-8 text-center text-couleur3"
                    >
                        {actu.image ? (
                            <img
                                src={actu.image}
                                alt={actu.titre}
                                className="h-40 w-full object-cover"
                            />
                        ) : (
                            <div className="h-40 w-full border border-couleur4" />
                        )}

                        <p className="mt-8 text-xs">
                            Publiée le {actu.date} - {actu.duree}
                        </p>

                        <h3 className="mt-6 max-w-48 font-sans text-xs">{actu.titre}</h3>

                        <Link to={actu.lien} className="mt-6 text-xs hover:underline">
                            En savoir plus
                        </Link>
                    </article>
                ))}
            </div>

            {actualitesAffichees.length === 0 && (
                <p className="text-center text-sm text-couleur1">
                    Aucune actualité dans cette catégorie.
                </p>
            )}

            {peutVoirPlus && (
                <div className="mt-12 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setToutAfficher(true)}
                        className="cursor-pointer border border-couleur4 px-8 py-3 text-sm text-couleur3 hover:bg-couleur4"
                    >
                        Voir plus
                    </button>
                </div>
            )}
        </>
    );
}