import type {MarqueProps} from "../types/Marque.ts";

type MarquesSocietesProps = {
    marques: MarqueProps[];
};

export default function MarquesSocietes({ marques }: MarquesSocietesProps) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl text-couleur3 text-center mb-8 md:mb-12">
                Marques & Sociétés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {marques.map((marque) => (
                    <article key={marque.nom} className="flex flex-col items-center text-center gap-4">
                        {/* À remplacer par une <img> plus tard */}
                        <div className="w-full h-80 md:h-96 bg-gray-300" />
                        <h3 className="text-sm md:text-base uppercase font-sans text-couleur3">
                            {marque.nom}
                        </h3>
                        <p className="max-w-xs text-sm text-couleur1">
                            {marque.desc}
                        </p>
                        <a href={marque.lien} className="text-sm text-couleur3 hover:text-couleur4">
                            En savoir plus
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}