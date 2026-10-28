import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Question } from "../data/Questions";

type QuestionsFrequentesProps = {
    titre?: string;
    questions: Question[];
};

export default function QuestionsFrequentes({
                                                titre = "Questions fréquentes",
                                                questions,
}: QuestionsFrequentesProps) {
    const [ouvert, setOuvert] = useState<number | null>(null);

    const basculer = (index: number) => {
        setOuvert(ouvert === index ? null : index);
    };

    return (
        <section className="bg-couleur2 px-6 py-16">
            <h2 className="text-center text-2xl uppercase text-couleur3">{titre}</h2>

            <ul className="mx-auto mt-16 flex max-w-xl flex-col">
                {questions.map((item, index) => {
                    const estOuvert = ouvert === index;

                    return (
                        <li key={index} className="border-b border-couleur3">
                            <button
                                type="button"
                                onClick={() => basculer(index)}
                                aria-expanded={estOuvert}
                                className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm text-couleur3"
                            >
                                {item.question}
                                {estOuvert ? <Minus size={18} /> : <Plus size={18} />}
                            </button>

                            {estOuvert && (
                                <p className="pb-4 text-sm text-couleur1">{item.reponse}</p>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}