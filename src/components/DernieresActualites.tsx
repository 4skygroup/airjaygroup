import { dernieresActualites } from "../data/Actualites.ts";
import ActualitesListe from "./ActualitesListe.tsx";

type DernieresActualitesProps = {
    titre?: string;
    nombre?: number;
};

export default function DernieresActualites({
                                                titre = "Nos dernières actualités",
                                                nombre = 2,
                                            }: DernieresActualitesProps) {
    return (
        <section className="bg-couleur2 px-6 py-16">
            <h2 className="mb-12 text-center text-sm uppercase tracking-widest text-couleur3">
                {titre}
            </h2>

            <ActualitesListe actualites={dernieresActualites(nombre)} />
        </section>
    );
}