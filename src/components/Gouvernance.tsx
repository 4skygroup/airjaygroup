import { useState } from "react";
import { comiteExecutif, conseilAdministration, titreCategorie, type Categorie } from "../data/Membres.tsx";
import MembreCard from "../components/MembreCard";

const onglets: Categorie[] = ["comite", "conseil"];

export default function Gouvernance() {
    const [categorie, setCategorie] = useState<Categorie>("conseil");
    const liste = categorie === "comite" ? comiteExecutif : conseilAdministration;

    return (
        <main className="bg-couleur2 px-6 py-12 md:px-16">
            <section className="text-center">
                <h1 className="text-2xl text-couleur3">Une excellence au service de la stratégie.</h1>
                <p className="mt-2 text-xs font-glacial text-couleur1">
                    Découvrez les profils des membres du Comité exécutif et du Conseil d'administration de Airjay.
                </p>

                <div className="mt-6 flex justify-center gap-2">
                    {onglets.map((onglet) => (
                        <button
                            key={onglet}
                            type="button"
                            onClick={() => setCategorie(onglet)}
                            className={
                                categorie === onglet
                                    ? "rounded-full bg-couleur3 px-4 py-1 text-xs text-couleur2 border border-couleur3"
                                    : "rounded-full bg-white px-4 py-1 text-xs text-couleur3 border border-couleur1"
                            }
                        >
                            {titreCategorie[onglet]}
                        </button>
                    ))}
                </div>
            </section>

            <h2 className="mt-12 text-center text-xl text-couleur3">{titreCategorie[categorie]}</h2>

            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
                {liste.map((membre) => (
                    <MembreCard key={membre.id} membre={membre} />
                ))}
            </div>
        </main>
    );
}