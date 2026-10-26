import { Link, useParams } from "react-router-dom";
import { membres, titreCategorie } from "../data/Membres.tsx";
import MembreCard from "../components/MembreCard";

export default function MembreDetail() {
    const { id } = useParams();
    const membre = membres.find((m) => m.id === id);

    if (!membre) {
        return (
            <main className="bg-couleur2 px-6 py-16 text-center">
                <p className="font-glacial text-couleur3">Membre introuvable.</p>
                <Link to="/groupe/gouvernance" className="text-couleur4">Retour à la gouvernance</Link>
            </main>
        );
    }

    const autres = membres.filter((m) => m.categorie === membre.categorie && m.id !== membre.id);

    return (
        <main className="bg-couleur2 px-6 py-12 md:px-16">
            <section className="text-center">
                <h1 className="text-2xl text-couleur3">{membre.nom}</h1>
                <p className="mt-1 font-glacial text-sm text-couleur1">{membre.poste}</p>
            </section>

            <section className="mx-auto mt-8 grid max-w-4xl items-center gap-8 bg-couleur1 p-8 md:grid-cols-3">
                {/* Image fournie : on l'affiche, sinon on affiche le bord doré */}
                {membre.image ? (
                    <img
                        src={membre.image}
                        alt={membre.nom}
                        className="w-full aspect-3/4 object-contain"
                    />
                ) : (
                    <div className="w-full aspect-3/4 border border-couleur4 bg-couleur4" />
                )}

                <div className="md:col-span-2 flex flex-col gap-4">
                    {membre.bio.map((paragraphe, index) => (
                        <p key={index} className="font-glacial text-xs text-couleur2">
                            {paragraphe}
                        </p>
                    ))}
                </div>
            </section>

            <h2 className="mt-16 text-center text-xl text-couleur3">{titreCategorie[membre.categorie]}</h2>

            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
                {autres.map((m) => (
                    <MembreCard key={m.id} membre={m} />
                ))}
            </div>
        </main>
    );
}