import HeroGris from "../../components/HeroGris.tsx";
import ListDoree from "../../components/ListDoree.tsx";

export default function Ecosysteme() {
    return (
        <>
            <HeroGris
                accroche="Notre Mission"
                desc="L'héritage de demain se construit avec la précision d'aujourd'hui. AIRJAY GROUP incarne une vision à long terme de l'investissement institutionnel, mêlant rigueur financière et passion pour l'excellence opérationnelle. Nous ne gérons pas seulement des actifs ; nous cultivons des écosystèmes pérennes."
            />

            <ListDoree
                cards={[
                    { titre: "Asset Management", desc: "Gestion de portefeuilles institutionnels et familiaux avec une vision à long terme." },
                    { titre: "Luxury & Retail", desc: "Développement de marques de prestige et réseaux de distribution exclusifs." },
                    { titre: "Industrial Tech", desc: "Innovation technologique appliquée aux processus de fabrication de haute précision." },
                    { titre: "Real Estate", desc: "Patrimoine immobilier, conception et aménagement urbain durable." },
                ]}
            />
        </>
    );
}