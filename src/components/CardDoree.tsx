import type {CardDoreeProps} from "../types/CardDoree.ts";

export default function CardDoree({ titre, desc }: CardDoreeProps) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="bg-couleur4 p-6 md:p-12 lg:p-20">
                <div className="bg-white px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-24 flex flex-col items-center text-center gap-6 md:gap-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-couleur3">
                        {titre}
                    </h2>
                    <p className="max-w-xl text-sm md:text-base text-couleur3">
                        {desc}
                    </p>
                </div>
            </div>
        </section>
    );
}