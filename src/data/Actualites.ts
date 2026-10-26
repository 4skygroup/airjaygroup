// ne pas mettre le meme slug

type ActualiteBrute = {
    titre: string;
    date: string;
    duree: string;
    image?: string;
    slug?: string; // optionnel : à utiliser seulement si deux titres sont identiques
    lien?: string; // optionnel : par défaut /actualites/<id>
};

export type Actualite = {
    id: string;
    titre: string;
    date: string;
    duree: string;
    lien: string;
    image?: string;
};

function slugify(texte: string): string {
    return texte
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function creerActualites(liste: ActualiteBrute[]): Actualite[] {
    return liste.map((actu) => {
        const id = actu.slug ?? slugify(actu.titre);
        return {
            id,
            titre: actu.titre,
            date: actu.date,
            duree: actu.duree,
            image: actu.image,
            lien: actu.lien ?? `/actualites/${id}`,
        };
    });
}

export const actualitesAirjaygroup = creerActualites([
    {
        titre: "TEST123",
        date: "25.06.2026",
        duree: "4 mins",
        image: "/images/solarnexus.jpg",
    },
    {
        titre: "zAIRJAY annonce une prise de participation dans SolarNexus",
        date: "25.06.2026",
        duree: "4 mins",
    },
]);

export const actualitesGroupe = creerActualites([
    {
        titre: "TEST1",
        date: "25.06.2026",
        duree: "4 mins",
        image: "/images/solarnexus.jpg",
    },
    {
        titre: "AIRJAY annonce une prise de participation dans SolarNexus",
        date: "25.06.2026",
        duree: "4 mins",
    },
]);

export const actualitesActivites = creerActualites([
    {
        titre: "TEST2",
        date: "25.06.2026",
        duree: "4 mins",
    },
]);

export const actualitesPartenaires = creerActualites([]);
export const actualitesEngagements = creerActualites([]);
export const actualitesEvenements = creerActualites([]);
export const actualitesPresse = creerActualites([]);

export const categoriesActualites = [
    { nom: "Airjaygroup", actualites: actualitesAirjaygroup },
    { nom: "Groupe", actualites: actualitesGroupe },
    { nom: "Activités", actualites: actualitesActivites },
    { nom: "Partenaires", actualites: actualitesPartenaires },
    { nom: "Engagements", actualites: actualitesEngagements },
    { nom: "Événements", actualites: actualitesEvenements },
    { nom: "Presse", actualites: actualitesPresse },
];

// Vérification des doublons sur l'ensemble des catégories
const idsVus = new Set<string>();
for (const categorie of categoriesActualites) {
    for (const actu of categorie.actualites) {
        if (idsVus.has(actu.id)) {
            throw new Error(
                `Actualité en double : "${actu.titre}" (id "${actu.id}", catégorie "${categorie.nom}"). Change le titre ou ajoute un champ slug.`
            );
        }
        idsVus.add(actu.id);
    }
}

function dateEnNombre(date: string): number {
    const [jour, mois, annee] = date.split(".");
    return Number(annee) * 10000 + Number(mois) * 100 + Number(jour);
}

export function dernieresActualites(nombre: number): Actualite[] {
    return categoriesActualites
        .flatMap((categorie) => categorie.actualites)
        .sort((a, b) => dateEnNombre(b.date) - dateEnNombre(a.date))
        .slice(0, nombre);
}