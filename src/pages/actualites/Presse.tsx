import HeroGris from "../../components/HeroGris.tsx";
import DernieresActualites from "../../components/DernieresActualites.tsx";
import PressReleases, {type PressRelease} from "../../components/PressReleases.tsx";
import PressContact from "../../components/PressContact.tsx";

export default function Presse() {
    const communiques: PressRelease[] = [

        {
            id: 1,
            date: "02.02.2026",
            tags: ["Expansion", "stratégique"],
            title: "Acquisition de nouveaux actifs en Asie du Sud-Est",
            fileSize: "PDF - 758 KO",
            href: "/pdf/acquisition-asie.pdf",
            image: "/images/asie.jpg", // avec image : l'image s'affiche
        },
        {
            id: 2,
            date: "15.01.2026",
            tags: ["Finance"],
            title: "Résultats annuels 2025",
            fileSize: "PDF - 1,2 MO",
            href: "/pdf/resultats-2025.pdf",
            // sans image : le bloc doré s'affiche
        },
        {
            id: 3,
            date: "15.01.2026",
            tags: ["Finance"],
            title: "Résultats annuels 2025",
            fileSize: "PDF - 1,2 MO",
            href: "/pdf/resultats-2025.pdf",
            // sans image : le bloc doré s'affiche
        },
        {
            id: 4,
            date: "15.01.2026",
            tags: ["Finance"],
            title: "Résultats annuels 2025",
            fileSize: "PDF - 1,2 MO",
            href: "/pdf/resultats-2025.pdf",
            // sans image : le bloc doré s'affiche
        },
        {
            id: 5,
            date: "15.01.2026",
            tags: ["Finance"],
            title: "Résultats annuels 2025",
            fileSize: "PDF - 1,2 MO",
            href: "/pdf/resultats-2025.pdf",
            // sans image : le bloc doré s'affiche
        },
    ];

    return (
        <>

            <HeroGris
                accroche="Espace Presse"
                desc="Accédez aux ressources stratégiques de AIRJAY GROUP. Nous maintenons un dialogue continu et transparent avec les médias et la communauté financière internationale pour soutenir notre vision de croissance durable."
            />
            <PressReleases releases={communiques} itemsPerPage={4}/>
            <DernieresActualites />
            <PressContact />
        </>
    );
}