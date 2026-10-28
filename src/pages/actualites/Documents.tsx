import HeroGris from "../../components/HeroGris.tsx";
import DernieresActualites from "../../components/DernieresActualites.tsx";
import DocumentsComp from "../../components/DocumentsComp.tsx";

export default function Documents() {

    type DocumentItem = {
        titre: string;
        fichier: string;
        image?: string;
    };

    const documentsParDefaut: DocumentItem[] = [
        {
            titre: "Expansion stratégique : Acquisition de nouveaux actifs en Asie du Sud-Est",
            fichier: "/documents/document1.pdf",
        },
        {
            titre: "Expansion stratégique : Acquisition de nouveaux actifs en Asie du Sud-Est",
            fichier: "/documents/document2.pdf",
        },
        {
            titre: "Expansion stratégique : Acquisition de nouveaux actifs en Asie du Sud-Est",
            fichier: "/documents/document3.pdf",
        },
        {
            titre: "Expansion stratégique : Acquisition de nouveaux actifs en Asie du Sud-Est",
            fichier: "/documents/document4.pdf",
        },
    ];

    return (

        <>
            <HeroGris
                accroche="Espace Documents"
                desc="Accédez aux ressources stratégiques de AIRJAY GROUP. Nous maintenons un dialogue continu et transparent avec les médias et la communauté financière internationale pour soutenir notre vision de croissance durable."
            />
            <DocumentsComp documents={documentsParDefaut} />

            <DernieresActualites />
        </>
    );
}