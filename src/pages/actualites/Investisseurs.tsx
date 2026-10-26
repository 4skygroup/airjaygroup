import HeroGris from "../../components/HeroGris.tsx";
import ProchainsEvenements from "../../components/ProchainsEvenements.tsx";
import {evenements} from "../../data/Evenements.ts";
import DernieresActualites from "../../components/DernieresActualites.tsx";

export default function Investisseurs() {
    return (
        <>
            <HeroGris
                accroche="Calendrier Financier"
                desc="Suivez les moments clés de notre année financière et institutionnelle. Les dates de publications sont communiquées sous réserve de modification."
            />

            <ProchainsEvenements evenements={evenements} />
            <DernieresActualites />

        </>
    );
}