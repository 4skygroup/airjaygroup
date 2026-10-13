import type {CardFlexDoreeProps} from "../types/CardFlexDoree.ts";
import CardFlexDoree from "./CardFlexDoree.tsx";

type ListFlexDoreeProps = {
    cards: CardFlexDoreeProps[];
};

export default function ListFlexDoree({ cards }: ListFlexDoreeProps) {
    return (
        <div className="flex flex-col">
            {cards.map((card) => (
                <CardFlexDoree key={card.titre} titre={card.titre} points={card.points} />
            ))}
        </div>
    );
}