import type {CardDoreeProps} from "../types/CardDoree.ts";
import CardDoree from "./CardDoree.tsx";

type ListDoreeProps = {
    title?:string;
    cards: CardDoreeProps[];
};

export default function ListDoree({ title, cards }: ListDoreeProps) {
    return (
        <div className="flex flex-col">
            <h2 className="mb-12 text-center text-2xl text-couleur3">{title}</h2>

            {cards.map((card) => (
                <CardDoree key={card.titre} titre={card.titre} desc={card.desc} />
            ))}
        </div>
    );
}