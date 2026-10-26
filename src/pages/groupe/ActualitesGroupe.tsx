import ActualitesListe from "../../components/ActualitesListe.tsx";
import {actualitesGroupe} from "../../data/Actualites.ts";


export default function ActualitesGroupe() {
    return (
        <>
            <section className="bg-couleur2 px-6 py-16">
                <h2 className="mb-12 text-center text-3xl text-couleur3">Actualités du groupe</h2>
                <ActualitesListe actualites={actualitesGroupe} />
            </section>
        </>
    );
}