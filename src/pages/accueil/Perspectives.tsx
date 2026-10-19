import CardGris from "../../components/CardGris.tsx";
import CardDoree from "../../components/CardDoree.tsx";
import ListDorreSemi from "../../components/ListDorreSemi.tsx";

export default function Perspectives() {
    return (
        <>
           <CardGris
               titre="Perspectives"
               img=""
               sousTitre="Notre Futur"
               desc="Des actes vérifiables, une responsabilité partagée. chez AIRJAY GROUP, notre engagement n'est pas une promesse abstraite mais une donnée auditée, consolidée par notre héritage de plus de 100 ans"
           />

           <CardDoree
               titre="Sélection"
               desc="Nous recherchons des startups et des partenaires technologies capables d'apporter une valeur.
               Nous recherchons des startups et des partenaires technologies capables d'apporter une valeur.
               Nous recherchons des startups et des partenaires technologies capables d'apporter une valeur.
               Nous recherchons des startups et des partenaires technologies capables d'apporter une valeur."
           />

            <ListDorreSemi
                title="Partenariats"
                items={[
                    { title: "VIVATECH", description: "Investissements stratégiques dans les entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                    { title: "VIVATECH", description: "Investissements stratégiques dans les entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                    { title: "VIVATECH", description: "Investissements stratégiques dans les entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                    { title: "VIVATECH", description: "Investissements stratégiques dans les entreprises à fort potentiel de croissance, avec un accompagnement opérationnel et une vision à 10 ans.",},
                ]}
            />
        </>
    );
}