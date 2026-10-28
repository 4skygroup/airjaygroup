import ListDorreSemi from "../../components/ListDorreSemi.tsx";

export default function Metiers() {

    return (

        <>
            <ListDorreSemi
                title="Découvrez nos Métiers"
                items={[
                    { title: "Finance & Asset Management", description: "Ingénierie financière et gestion de patrimoine institutionnel à l'échelle globale.",},
                    { title: "Luxe & Art de Vivre", description: "Gestion de marques iconiques et développement d'expériences exclusives.",},
                    { title: "Technologies Industrielles", description: "Recherche avancée et innovation dans les secteurs de pointe de l'industrie.",},
                    { title: "Rôle de Holding", description: "La holding centrale assure la direction stratégique, la gestion des risques et l'allocation optimale des ressources pour l'ensemble des filiales.",},
                ]}
            />
        </>
    );
}