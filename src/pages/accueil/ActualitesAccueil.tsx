import {actualitesAirjaygroup} from "../../data/Actualites.ts";
import ActualitesListe from "../../components/ActualitesListe.tsx";


export default function ActualitesAccueil() {
    return (
        <>
            <section className="bg-couleur2 px-6 py-16">
                <h2 className="mb-12 text-center text-3xl text-couleur3">Actualités du groupe</h2>
                <ActualitesListe actualites={actualitesAirjaygroup} />
            </section>
        </>
    );
}