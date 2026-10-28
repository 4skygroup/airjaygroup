import Accroche from "../../components/Accroche.tsx";
import ProchainsEvenements from "../../components/ProchainsEvenements.tsx";
import {ambitons} from "../../data/Evenements.ts";

export default function Ambitions() {

    return (

        <>
            <Accroche
                accroche="Rejoindre AIRJAY n'est pas une simple acte mais des ambitions qui nous pousse au sommet"
            />

            <ProchainsEvenements evenements={ambitons} />

        </>
    );
}