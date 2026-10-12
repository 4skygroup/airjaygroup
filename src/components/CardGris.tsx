import type {CardTempsFortProps} from "../types/CardGris.ts";

export default function CardGris({ titre, img, sousTitre, desc }: CardTempsFortProps) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-couleur3 mb-6 md:mb-8">
                {titre}
            </h2>

            <div className="bg-couleur1 px-6 py-12 md:px-10 md:py-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
                <img
                    src={img}
                    alt={sousTitre}
                    className="w-full md:w-1/3 aspect-square object-cover bg-couleur4"
                />

                <div className="w-full md:w-1/2 text-couleur2 text-center md:text-left">
                    <h3 className="text-xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
                        {sousTitre}
                    </h3>
                    <p className="text-sm md:text-base">{desc}</p>
                </div>
            </div>
        </section>
    );
}