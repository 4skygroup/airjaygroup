import ChiffresCles from "../../components/ChiffresCles.tsx";

export default function ChiffresImple() {
    return (
        <>

            <ChiffresCles
                title="Chiffres clés de notre excellence opérationnelle."
                chiffres={[
                    { valeur: "4.2 Md€", label: "Chiffre d'Affaires" },
                    { valeur: "12 500", label: "Collaborateurs" },
                    { valeur: "24", label: "Pays Présents" },
                    { valeur: "850M€", label: "Capacité d’Investissement" },
                ]}
            />
        </>
    );
}