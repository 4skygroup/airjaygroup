import HeroGris from "../../components/HeroGris.tsx";
import DernieresActualites from "../../components/DernieresActualites.tsx";
import QuestionsFrequentes from "../../components/Questionsfrequentes.tsx";
import {questions} from "../../data/Questions.ts";

export default function Questions() {

    return (
        <>
            <HeroGris
                accroche="QUESTIONS FRÉQUENTES"
                desc="Accédez aux ressources stratégiques de AIRJAY GROUP. Nous maintenons un dialogue continu et transparent avec les médias et la communauté financière internationale pour soutenir notre vision de croissance durable."
            />

            <QuestionsFrequentes questions={questions} />
            <DernieresActualites />
        </>
    );
}