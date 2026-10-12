import type {HeroGrisProps} from "../types/HeroGris.ts";

export default function HeroGris({accroche, desc} : HeroGrisProps) {
    return (
        <section className="flex min-h-screen items-center justify-center bg-couleur1 px-4 py-16">
            <div className="w-full max-w-2xl bg-couleur2 px-8 py-16 text-center md:px-16">
                <h2 className="text-xl md:text-3xl leading-snug text-couleur3">
                    {accroche}
                </h2>
                <p className="mx-auto mt-8 max-w-md text-sm text-couleur3">
                    {desc}
                </p>
            </div>
        </section>
    );
}