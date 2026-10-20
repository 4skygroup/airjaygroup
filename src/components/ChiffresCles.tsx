import type {ChiffreCleProps} from "../types/ChiffreCle.ts";

type ChiffresClesProps = {
    title?: string;
    chiffres: ChiffreCleProps[];
};

export default function ChiffresCles({ title, chiffres }: ChiffresClesProps) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl text-couleur3 text-center mb-8 md:mb-12">
                {title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {chiffres.map((chiffre) => (
                    <div key={chiffre.label} className="flex flex-col items-center text-center gap-2">
                        <p className="font-display text-2xl md:text-3xl text-couleur3">
                            {chiffre.valeur}
                        </p>
                        <p className="text-sm text-couleur1">
                            {chiffre.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}