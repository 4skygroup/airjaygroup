import HeroGris from "../../components/HeroGris.tsx";
import ListDorreSemi from "../../components/ListDorreSemi.tsx";

export default function EntitesRattachees() {
    return (
        <>
            <HeroGris
                accroche="Entités rattachées"
                desc="Dans un monde de volatilité croissante, notre mandat est d'opérer comme une ancre de stabilité, transformant la complexité financière en trajectoires de croissance structurées. Le pôle Asset Management d'AIRJAY GROUP orchestre des portefeuilles d'actifs complexes avec une approche centrée sur la préservation du capital à long terme. Nous combinons l'agilité des structures privées avec la rigueur des standards institutionnels mondiaux. Notre proposition de valeur repose sur une ingénierie financière sur-mesure, capable d'identifier les poches de valeur inexploitées dans les segments du Private Equity et de la gestion de fortune stratégique."
            />

            <ListDorreSemi
                title="Entités rattachées"
                items={[
                    { title: "Play to sky", description:"Investissements stratégiques dans des entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                    { title: "Play to sky", description:"Investissements stratégiques dans des entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                    { title: "Play to sky", description:"Investissements stratégiques dans des entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                    { title: "Play to sky", description:"Investissements stratégiques dans des entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                ]}
            />
        </>
    );
}