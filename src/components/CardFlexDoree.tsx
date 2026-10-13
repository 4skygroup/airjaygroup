import type {CardFlexDoreeProps} from "../types/CardFlexDoree.ts";

export default function CardFlexDoree({ titre, points }: CardFlexDoreeProps) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="bg-couleur4 p-6 md:p-12 lg:p-20">
                <div className="bg-couleur2 px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-24 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    <h2 className="text-2xl md:text-3xl text-couleur3 md:w-1/3">
                        {titre}
                    </h2>
                    <ul className="flex flex-col gap-4 md:w-2/3">
                        {points.map((point) => (
                            <li key={point} className="text-sm md:text-base text-couleur3">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}