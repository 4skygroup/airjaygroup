import HeroGris from "../components/HeroGris.tsx";
import Accroche from "../components/Accroche.tsx";
import ListFlexDoree from "../components/ListFlexDoree.tsx";

export default function Engagements() {
    return (
        <>
            <HeroGris
                accroche="Nos Engagements"
                desc="Des actes vérifiables, une responsabilité partagée. Chez AIRJAY GROUP, l'engagement n'est pas une promesse abstraite mais une donnée auditée, consolidée par notre héritage institutionnel."
            />
            <Accroche
                accroche="La confiance se gagne par la preuve numérique et la validation légale de chaque acte."
                desc="Chaque chiffre présenté sur cette plateforme est le résultat d'un processus de collecte rigoureux. Nous refusons les communications cosmétiques. Notre démarche RSE s'appuie sur des protocoles de vérification interne et externe pour garantir l'intégrité de notre rapport institutionnel."
            />

            <ListFlexDoree
                cards={[
                    {
                        titre: "Entrepreneuriat & Talents",
                        points: [
                            "12k Heures de formation par an",
                            "35% Taux de mobilité interne",
                            "Accès prioritaire aux postes de direction pour les collaborateurs à haut potentiel via mentorat.",
                            "Financement intégral des certifications métiers pour 100% des équipes opérationnelles.",
                        ],
                    },
                    {
                        titre: "Impact & territoires",
                        points: ["12k Heures de formation par an", "35% Taux de mobilité interne"],
                    },
                    {
                        titre: "Éthique & gouvernance",
                        points: ["12k Heures de formation par an", "35% Taux de mobilité interne"],
                    },
                    {
                        titre: "Environnement",
                        points: ["12k Heures de formation par an", "35% Taux de mobilité interne"],
                    },
                ]}
            />
        </>
    );
}