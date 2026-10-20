export interface TalentCardProps {
    prenom: string;
    description: string;
    image?: string;
}

export default function TalentCard({ prenom, description, image }: TalentCardProps) {
    return (
        <article className="relative aspect-3/4 w-full overflow-hidden bg-couleur4">
            {image ? (
                <img
                    src={image}
                    alt={prenom}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            ) : (
                <div className="absolute inset-0 border-4 border-couleur4 bg-couleur4" />
            )}

            <div className="absolute inset-x-3 bottom-3 bg-couleur2 px-2 py-3 text-center">
                <h3 className="font-glacial text-sm text-couleur3">{prenom}</h3>
                <p className="mt-1 font-sans text-xs text-couleur1">{description}</p>
            </div>
        </article>
    );
}