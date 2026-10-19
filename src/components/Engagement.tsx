type EngagementProps = {
    image?: string;
    imagePortrait?: string;
};

export default function Engagement({ image, imagePortrait }: EngagementProps) {
    return (
        <section className="bg-couleur2 px-6 py-16">
            {/* Bord : image si fournie, sinon bord doré */}
            <div
                className="mx-auto max-w-6xl bg-couleur4 bg-cover bg-center p-12 md:p-16"
                style={image ? { backgroundImage: `url(${image})` } : undefined}
            >
                <div className="flex flex-col items-center gap-10 bg-white px-8 py-12 md:flex-row md:px-12">
                    {/* Emplacement portrait */}
                    <div className="h-48 w-full bg-gray-300 md:w-2/5">
                        {imagePortrait && (
                            <img
                                src={imagePortrait}
                                alt="Président Fondateur"
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>

                    <div className="w-full text-couleur3 md:w-3/5">
                        <h2 className="text-2xl">L'Engagement de Toute une Vie</h2>

                        <p className="mt-6 text-xs leading-relaxed">
                            Au sein de AIRJAY GROUP, nous ne nous contentons pas de gérer des
                            actifs ; nous cultivons des ambitions. Notre parcours est celui
                            d'une quête incessante de sens et de solidité.
                        </p>

                        <p className="mt-6 text-xs leading-relaxed">
                            Nous croyons fermement que la valeur réelle se construit à
                            l'intersection de la discipline opérationnelle et de la vision
                            stratégique. C'est ce pacte de confiance que nous renouvelons
                            chaque jour.
                        </p>

                        <p className="mt-6 text-xs">Président Fondateur</p>
                    </div>
                </div>
            </div>
        </section>
    );
}