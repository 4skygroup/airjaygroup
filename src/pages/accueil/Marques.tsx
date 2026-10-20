import MarquesSocietes from "../../components/MarquesSocietes.tsx";
import ChiffresCles from "../../components/ChiffresCles.tsx";

export default function Marques() {
    return (
        <>
            <MarquesSocietes
                marques={[
                    { nom: "Vandome Precision", desc: "Horlogerie de haute complication et micro-mécanique d'art.", lien: "#" },
                    { nom: "Vandome Precision", desc: "Horlogerie de haute complication et micro-mécanique d'art.", lien: "#" },
                    { nom: "Vandome Precision", desc: "Horlogerie de haute complication et micro-mécanique d'art.", lien: "#" },
                ]}
            />

            <ChiffresCles
                title="Chiffres clés"
                chiffres={[
                    { valeur: "230+", label: "Années d'Expérience" },
                    { valeur: "3000", label: "Collaborateurs" },
                    { valeur: "97", label: "Pays de Présence" },
                    { valeur: "4.9M", label: "Actifs Sous Gestion" },
                ]}
            />
        </>
    );
}