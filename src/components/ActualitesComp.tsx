import { Link } from "react-router-dom";

export type Actualite = {
    id: number;
    date: string;
    duree: string;
    titre: string;
    lien: string;
    image?: string;
};

type ActualitesProps = {
    titre?: string;
    actualites: Actualite[];
};

export default function ActualitesComp({ titre = "Actualités", actualites }: ActualitesProps) {
    return (
        <section className="bg-couleur2 px-6 py-16">
            <h2 className="mb-12 text-center text-3xl text-couleur3">{titre}</h2>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
                {actualites.map((actu) => (
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
                            <div className="h-40 w-full bg-couleur4" />
                        )}

                        <p className="mt-8 text-xs text-couleur1">
                            Publiée le {actu.date} - {actu.duree}
                        </p>

                        <h3 className="mt-6 max-w-48 font-sans text-xs">{actu.titre}</h3>

                        <Link to={actu.lien} className="mt-6 text-xs text-couleur3 hover:underline">
                            En savoir plus
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}