import ListDorreSemi from "../../components/ListDorreSemi.tsx";

export default function Prevision() {
    return (
        <>
            <ListDorreSemi
                title="Horizon 2050"
                items={[
                    { title: "Consolidation Digitale", description: "Intégration totale de l'IA générative dans nos processus de risk management et optimisation de la supply chain globale.",},
                    { title: "Neutralité Systémique", description: "Achèvement de notre transition vers un modèle d'investissement à impact positif net, redéfinissant les standards ESG.",},
                    { title: "Expansion Infra-Modale", description: "Déploiement de hubs logistiques autonomes de nouvelle génération sur les trois continents majeurs de croissance.",},
                    { title: "L'Institution", description: "Stabilisation d'un héritage intergénérationnel agissant comme pilier de stabilité dans l'économie globale.",},
                ]}
            />
        </>
    );
}