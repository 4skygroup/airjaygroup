import Aboutgroupe from "../components/accueil/Aboutgroupe.tsx";
import CardGris from "../components/CardGris.tsx";

export default function TempsForts() {
    return (
        <>
            <Aboutgroupe />
            <CardGris
                titre="Temps Forts"
                img=""
                sousTitre="Le renouveau de l'artisanat industriel"
                desc="Notre dernier investissement majeur dans la manufacture de haute précision marque une étape décisive dans notre stratégie de verticalisation des métiers d'excellence"
            />
        </>
    );
}