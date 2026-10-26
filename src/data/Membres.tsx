export type Categorie = "comite" | "conseil";

export interface Membre {
    id: string;
    nom: string;
    poste: string;
    categorie: Categorie;
    image?: string;
    bio: string[];
}

const bio = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sapien sed nisl pharetra ullamcorper. Integer vitae libero nec lectus aliquet tincidunt.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec fermentum, nibh at luctus gravida, nulla orci faucibus augue.",
];

export const comiteExecutif: Membre[] = [
    { id: "robbin-james-agor", nom: "Robbin James AGOR", poste: "CEO", categorie: "comite", image: "/robbin.jpg", bio },
    { id: "membre-comite-2", nom: "Robbin James AGOR", poste: "CEO", categorie: "comite", bio },
    { id: "membre-comite-3", nom: "Robbin James AGOR", poste: "CEO", categorie: "comite", bio },
    { id: "membre-comite-4", nom: "Robbin James AGOR", poste: "CEO", categorie: "comite", bio },
    { id: "membre-comite-5", nom: "Robbin James AGOR", poste: "CEO", categorie: "comite", bio },
    { id: "membre-comite-6", nom: "Robbin James AGOR", poste: "CEO", categorie: "comite", bio },
];

export const conseilAdministration: Membre[] = [
    { id: "membre-conseil-1", nom: "Robbin James AGOR", poste: "CEO", categorie: "conseil", image: "/robbin.jpg", bio },
    { id: "membre-conseil-2", nom: "Robbin James AGOR", poste: "CEO", categorie: "conseil", bio },
    { id: "membre-conseil-3", nom: "Robbin James AGOR", poste: "CEO", categorie: "conseil", bio },
    { id: "membre-conseil-4", nom: "Robbin James AGOR", poste: "CEO", categorie: "conseil", bio },
    { id: "membre-conseil-5", nom: "Robbin James AGOR", poste: "CEO", categorie: "conseil", bio },
    { id: "membre-conseil-6", nom: "Robbin James AGOR", poste: "CEO", categorie: "conseil", bio },
];

export const membres: Membre[] = [...comiteExecutif, ...conseilAdministration];

export const titreCategorie: Record<Categorie, string> = {
    comite: "Comité exécutif",
    conseil: "Conseil d'administration",
};