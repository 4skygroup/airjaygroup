import ListDorreSemi from "../../components/ListDorreSemi.tsx";

export default function Recherches() {

    return (

        <>
            <ListDorreSemi
                title="Nos recherches"
                items={[
                    { title: "Recherche 1", description: "Ingénierie financière et gestion de patrimoine institutionnel à l'échelle globale.",},
                    { title: "Recherche 2", description: "Gestion de marques iconiques et développement d'expériences exclusives.",},
                    { title: "Recherche 3", description: "Recherche avancée et innovation dans les secteurs de pointe de l'industrie.",},
                    { title: "Recherche 4", description: "La holding centrale assure la direction stratégique, la gestion des risques et l'allocation optimale des ressources pour l'ensemble des filiales.",},
                ]}
            />
        </>
    );
}