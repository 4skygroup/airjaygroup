import CardDorreSemi from "./CardDorreSemi";

export interface ItemDorreSemi {
    id?: string | number;
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
}

interface ListDorreSemiProps {
    title: string;
    items: ItemDorreSemi[];
    className?: string;
}

export default function ListDorreSemi({
    title,
    items,
    className = "",
}: ListDorreSemiProps) {

    return (
        <section className={`px-6 py-12 md:px-12 ${className}`}>
            <h2 className="mb-12 text-center text-2xl text-couleur3">{title}</h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                {items.map((item, index) => (
                    <CardDorreSemi
                        key={item.id ?? index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        imageAlt={item.imageAlt}
                    />
                ))}
            </div>
        </section>
    );
}