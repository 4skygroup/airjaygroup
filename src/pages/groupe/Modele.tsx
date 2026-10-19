import ListDorreSemi from "../../components/ListDorreSemi.tsx";

export default function Modele() {
    return (
        <>
            <ListDorreSemi
                title="Un écosystème de synergies maîtrisées."
                items={[
                    { title: "Rôle de Holding", description: "La holding centrale assure la direction stratégique, la gestion des risques et l'allocation optimale des ressources pour l'ensemble des filiales.",},
                    { title: "Synergies Opérationnelles", description: "Chaque société bénéficie des plateformes mutualisées du groupe (Tech, HR, Legal) pour se concentrer sur son expertise métier.",},
                    { title: "Gouvernance Éclairée ", description: "Un conseil d'administration indépendant garantit la transparence et la pérennité de notre modèle économique.",},
                    { title: "Rôle de Holding", description: "La holding centrale assure la direction stratégique, la gestion des risques et l'allocation optimale des ressources pour l'ensemble des filiales.",},
                ]}
            />
        </>
    );
}