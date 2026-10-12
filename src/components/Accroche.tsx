import type {AccrocheProps} from "../types/Accroche.ts";

export default function Accroche({accroche, desc} : AccrocheProps) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-32 text-center bg-couleur2">
            <h2 className="max-w-2xl text-xl md:text-3xl leading-snug text-couleur3">
                {accroche}
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed text-couleur1">
                {desc}
            </p>
        </section>
    );
}