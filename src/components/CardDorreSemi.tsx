interface CardDorreSemiProps {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    className?: string;
}

export default function CardDorreSemi({
                                          title,
                                          description,
                                          image,
                                          imageAlt = "",
                                          className = "",
                                      }: CardDorreSemiProps) {
    return (
        <article className={`relative bg-couleur4 p-10 md:p-14 ${className}`}>
            {image && (
                <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            <div className="relative flex aspect-4/5 flex-col items-center justify-center gap-6 bg-white px-10 py-12 text-center md:px-14 md:py-16">
                <h3 className="font-sans text-xs font-medium uppercase tracking-wide text-couleur3">
                    {title}
                </h3>
                <p className="max-w-md font-sans text-xs leading-relaxed text-couleur3">
                    {description}
                </p>
            </div>
        </article>
    );
}