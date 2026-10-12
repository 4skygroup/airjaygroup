import HeroGris from "../components/HeroGris.tsx";
import Accroche from "../components/Accroche.tsx";

export default function Manifeste() {
    return (
        <>
            <HeroGris
                accroche="Nous ne bâtissons pas seulement des entreprises, nous orchestrons des
                    écosystèmes où la rigueur institutionnelle rencontre l'audace créative."
                desc="Depuis plus de 10 décennies, AIRJAY GROUP s'impose comme une
                    sentinelle du savoir-faire et de la performance. Notre approche repose
                    sur une sélection sans compromis de talents et une gestion active du
                    capital intellectuel."
            />
            <Accroche
                accroche="Nous ne bâtissons pas seulement des entreprises, nous orchestrons des écosystèmes où la rigueur institutionnelle rencontre l'audace créative"
                desc="Depuis plus de 10 décennies, AIRJAY GROUP s'impose comme une sentinelle du savoir-faire et de la performance. Notre approche repose sur une sélection sans compromis de talents et une gestion active du capital intellectuel."
            />
        </>
    );
}