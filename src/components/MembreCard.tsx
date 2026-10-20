import { Link } from "react-router-dom";
import type { Membre } from "../data/Membres.tsx";

export default function MembreCard({ membre }: { membre: Membre }) {
    return (
        <Link
            to={`/groupe/gouvernance/${membre.id}`}
            className="block bg-white p-4 transition hover:shadow-md"
        >
            {membre.image ? (
                <img
                    src={membre.image}
                    alt={membre.nom}
                    className="w-full aspect-3/4 object-cover"
                />
            ) : (
                <div className="w-full aspect-3/4 bg-gray-300" />
            )}
            <p className="mt-3 text-center font-glacial text-xs text-couleur3">{membre.nom}</p>
            <p className="text-center font-glacial text-xs text-couleur1">{membre.poste}</p>
        </Link>
    );
}