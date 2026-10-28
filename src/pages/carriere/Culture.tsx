import Accroche from "../../components/Accroche.tsx";
import ListFlexDoree from "../../components/ListFlexDoree.tsx";

export default function Culture() {

    return (
        <>
            <Accroche
                accroche="Rejoindre AIRJAY n'est pas une simple étape de carrière, c'est une immersion dans un univers où chaque décision impacte des décennies de patrimoine. La rigueur ici est une forme de liberté."
            />
            <ListFlexDoree
                cards={[
                    {
                        titre: "Une Culture de l'Excellence",
                        points: [
                            "Chez AIRJAY GROUP, l'excellence n'est pas un objectif mais un prérequis. Notre environnement de travail favorise la rigueur intellectuelle, la discrétion et l'audace entrepreneuriale.",
                            "Nous accompagnons chaque talent dans une trajectoire sur mesure, privilégiant la mobilité interne entre nos pôles d'activité mondiaux et une formation continue de haut niveau.",
                            "L'union des perspectives est le moteur de notre innovation institutionnelle.",
                            "Un mentorat structuré pour préserver et enrichir nos savoir-faire.",
                        ],
                    },
                ]}
            />
        </>
    );
}