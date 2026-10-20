import TalentCard from "./TalentCard";

export interface Talent {
    prenom: string;
    description: string;
    image?: string;
}

export interface GalerieTalentsProps {
    titre?: string;
    talents: Talent[];
}

export default function GalerieTalents({
    titre = "Galerie des talents",
    talents,
}: GalerieTalentsProps) {
    return (
        <section className="mx-auto w-full max-w-5xl bg-couleur2 px-4 py-8">
            <h2 className="mb-8 text-center text-2xl text-couleur3">{titre}</h2>

            <div className="grid grid-cols-3 gap-4">
                {talents.map((talent, index) => (
                    <TalentCard
                        key={`${talent.prenom}-${index}`}
                        prenom={talent.prenom}
                        description={talent.description}
                        image={talent.image}
                    />
                ))}
            </div>
        </section>
    );
}