import ActualitesComp from "../../components/ActualitesComp.tsx";


export default function ActualitesGroupe() {
    return (
        <>
            <ActualitesComp
                titre="Actualités"
                actualites={[
                    {
                        id: 1,
                        date: "25.06.2026",
                        duree: "4 mins",
                        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
                        lien: "/actualites/1",
                        image: "/images/solarnexus.jpg",
                    },
                    {
                        id: 2,
                        date: "25.06.2026",
                        duree: "4 mins",
                        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
                        lien: "/actualites/2",
                    },
                    {
                        id: 3,
                        date: "25.06.2026",
                        duree: "4 mins",
                        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
                        lien: "/actualites/3",
                    },
                    {
                        id: 4,
                        date: "25.06.2026",
                        duree: "4 mins",
                        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
                        lien: "/actualites/4",
                    },
                ]}
            />
        </>
    );
}