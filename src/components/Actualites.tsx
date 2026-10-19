type Actualite = {
    id: number;
    date: string;
    duree: string;
    titre: string;
    lien: string;
};

const actualites: Actualite[] = [
    {
        id: 1,
        date: "25.06.2026",
        duree: "4 mins",
        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
        lien: "#",
    },
    {
        id: 2,
        date: "25.06.2026",
        duree: "4 mins",
        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
        lien: "#",
    },
    {
        id: 3,
        date: "25.06.2026",
        duree: "4 mins",
        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
        lien: "#",
    },
    {
        id: 4,
        date: "25.06.2026",
        duree: "4 mins",
        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
        lien: "#",
    },
];

export default function Actualites() {
    return (
        <section className="bg-couleur2 px-6 py-16">
            <h2 className="text-center text-3xl text-couleur3 mb-12">Actualités</h2>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
                {actualites.map((actu) => (
                    <article
                        key={actu.id}
                        className="flex flex-col items-center bg-couleur5 px-12 py-8 text-center text-couleur3"
                    >
                        {/* Emplacement image */}
                        <div className="h-40 w-full bg-couleur4" />

                        <p className="mt-8 text-xs">
                            Publiée le {actu.date} - {actu.duree}
                        </p>

                        <h3 className="mt-6 max-w-48 font-sans text-xs">{actu.titre}</h3>

                        <a href={actu.lien} className="mt-6 text-xs hover:underline">
                            En savoir plus
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}