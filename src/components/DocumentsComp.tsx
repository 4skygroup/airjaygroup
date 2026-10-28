import { Upload } from "lucide-react";

type DocumentItem = {
    titre: string;
    fichier: string;
    image?: string;
};

type DocumentsProps = {
    titre?: string;
    documents: DocumentItem[];
};

export default function DocumentsComp({
    titre = "DocumentsComp",
    documents,
}: DocumentsProps) {

    return (
        <section className="bg-couleur2 px-6 py-16">
            <h2 className="text-center text-2xl text-couleur3">{titre}</h2>

            <ul className="mx-auto mt-16 flex max-w-4xl flex-col gap-6">
                {documents.map((doc, index) => (
                    <li key={index} className="grid grid-cols-3 items-center gap-6">
                        {doc.image ? (
                            <img
                                src={doc.image}
                                alt={doc.titre}
                                className="h-28 w-40 object-cover"
                            />
                        ) : (
                            <div className="h-28 w-40 bg-couleur4" />
                        )}

                        <p className="max-w-xs text-sm text-couleur3">{doc.titre}</p>

                        <a
                            href={doc.fichier}
                            download
                            className="ml-auto flex w-fit cursor-pointer items-center gap-2 border-b border-couleur3 text-sm text-couleur3"
                        >
                            Télécharger
                            <Upload size={14} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}