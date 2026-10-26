import { useState } from "react";
import type { Actualite } from "../data/Actualites.ts";
import ActualitesListe from "./ActualitesListe.tsx";

type Categorie = {
    nom: string;
    actualites: Actualite[];
};

type ActualitesCompProps = {
    titre?: string;
    categories: Categorie[];
};

const TOUTES = "Toutes";
const NB_VISIBLES = 10; // 5 lignes x 2 colonnes

export default function ActualitesComp({ titre = "Actualités", categories }: ActualitesCompProps) {
    const [categorieActive, setCategorieActive] = useState(TOUTES);

    const estToutes = categorieActive === TOUTES;

    const actualitesAffichees = estToutes
        ? categories.flatMap((categorie) => categorie.actualites)
        : (categories.find((categorie) => categorie.nom === categorieActive)?.actualites ?? []);

    return (
        <section className="bg-couleur2 px-6 py-16">
            <h2 className="mb-12 text-center text-3xl text-couleur3">{titre}</h2>

            <nav className="mx-auto mb-12 flex max-w-4xl flex-wrap gap-6 text-sm text-couleur3">
                {[TOUTES, ...categories.map((categorie) => categorie.nom)].map((nom) => (
                    <button
                        key={nom}
                        type="button"
                        onClick={() => setCategorieActive(nom)}
                        className={
                            nom === categorieActive
                                ? "cursor-pointer underline underline-offset-4"
                                : "cursor-pointer hover:underline hover:underline-offset-4"
                        }
                    >
                        {nom}
                    </button>
                ))}
            </nav>

            <ActualitesListe
                key={categorieActive}
                actualites={actualitesAffichees}
                limite={estToutes ? NB_VISIBLES : undefined}
            />
        </section>
    );
}