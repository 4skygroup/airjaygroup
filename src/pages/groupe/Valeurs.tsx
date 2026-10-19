import ListDoree from "../../components/ListDoree.tsx";

export default function Valeurs() {
    return (
        <>
            <ListDoree
                title="Nos valeurs"
                cards={
                [
                    { titre: "Excellence Chirurgicale", desc: "Chaque détail est scruté, chaque décision est pesée avec une précision mathématique pour garantir la pérennité de nos interventions." },
                    { titre: "Intégrité Institutionnelle", desc: "Nous agissons comme des gardiens du capital, avec une transparence totale envers nos partenaires et une éthique inébranlable." },
                    { titre: "Héritage Durable", desc: "Notre horizon n'est pas le trimestre, mais le siècle. Nous bâtissons des structures capables de traverser les époques." },
                    { titre: "Innovation de Rupture", desc: "L'audace de remettre en question les modèles établis pour créer de nouveaux paradigmes de croissance durable." },
                ]
            }
            />
        </>
    );
}