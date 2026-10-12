import {Link} from "react-router-dom";

export default function Aboutgroupe() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center bg-couleur2">
            <h2 className="text-xl md:text-3xl text-couleur3">
                Texte de contexte
            </h2>

            <p className="max-w-3xl text-sm leading-relaxed text-couleur3">
                A symbol of our enduring presence in the European financial landscape,
                the new HQ combines tradition with modern efficiency. A symbol of our
                enduring presence in the European financial landscape, the new HQ
                combines tradition with modern efficiency.
                A symbol of our enduring presence in the European financial landscape,
                the new HQ combines tradition with modern efficiency. A symbol of our
                enduring presence in the European financial landscape, the new HQ
                combines tradition with modern efficiency.                A symbol of our enduring presence in the European financial landscape,
                the new HQ combines tradition with modern efficiency. A symbol of our
                enduring presence in the European financial landscape, the new HQ
                combines tradition with modern efficiency.
            </p>

            <Link
                to="/"
                className="bg-couleur3 px-4 md:px-6 py-2 md:py-3 text-sm text-couleur2 rounded-sm"
            >
                Voir le groupe
            </Link>
        </section>
    );
}