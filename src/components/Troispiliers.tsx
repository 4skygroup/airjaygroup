type Pilier = {
    titre: string;
    points: string[];
};

type TroisPiliersProps = {
    titre?: string;
    piliers?: Pilier[];
    image?: string;
};

const piliersParDefaut: Pilier[] = [
    {
        titre: "Expérience client",
        points: [
            "Financement et incubation de startups",
            "Financement et incubation de startups",
            "Financement et incubation de startups",
        ],
    },
    {
        titre: "Expérience client",
        points: [
            "Financement et incubation de startups",
            "Financement et incubation de startups",
            "Financement et incubation de startups",
        ],
    },
    {
        titre: "Expérience client",
        points: [
            "Financement et incubation de startups",
            "Financement et incubation de startups",
            "Financement et incubation de startups",
        ],
    },
];

export default function TroisPiliers({
    titre = "Trois piliers au cœur de la stratégie de Airjay",
    piliers = piliersParDefaut,
    image,
}: TroisPiliersProps) {
    return (
        <section className="bg-couleur2 p-30">
            <div
                className={`relative overflow-hidden px-12 py-20 ${
                    image ? "" : "bg-couleur4"
                }`}
            >
                {image && (
                    <img
                        src={image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )}

                <div className="relative mx-auto max-w-5xl">
                    <h2 className="mb-12 text-center text-3xl text-couleur3">{titre}</h2>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {piliers.map((pilier, index) => (
                            <article
                                key={index}
                                className="bg-white px-8 py-10 text-couleur3"
                            >
                                <h3 className="mb-6 text-center font-sans text-base">
                                    {pilier.titre}
                                </h3>
                                <ul className="list-disc space-y-2 pl-4 font-sans text-xs">
                                    {pilier.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}