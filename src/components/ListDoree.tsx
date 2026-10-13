import type {CardDoreeProps} from "../types/CardDoree.ts";
import CardDoree from "./CardDoree.tsx";

type ListDoreeProps = {
    cards: CardDoreeProps[];
};

export default function ListDoree({ cards }: ListDoreeProps) {
    return (
        <div className="flex flex-col">
            {cards.map((card) => (
                <CardDoree key={card.titre} titre={card.titre} desc={card.desc} />
            ))}
        </div>
    );
}