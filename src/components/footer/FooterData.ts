import {FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter} from "react-icons/fa6";
import type {FooterColumn, FooterLink, SocialLink} from "../../types/Footer.ts";

export const SOCIAL = {
    title: "Nous suivre",
    links: [
        { label: "Instagram", url: "https://www.instagram.com/", icon: FaInstagram },
        { label: "TikTok", url: "https://www.tiktok.com/", icon: FaTiktok },
        { label: "LinkedIn", url: "https://www.linkedin.com/", icon: FaLinkedinIn },
        { label: "X", url: "https://x.com/", icon: FaXTwitter },
    ] as SocialLink[],
};

export const COLUMNS: FooterColumn[] = [
    {
        title: "AIRJAY",
        links: [
            { label: "Histoire", path: "/histoire" },
            { label: "Gouvernance", path: "/gouvernance" },
            { label: "EngagementsAccueil", path: "/engagements" },
            { label: "Actualités", path: "/actualites" },
        ],
    },
    {
        title: "Presse",
        links: [
            { label: "Accueil", path: "/presse" },
            { label: "Contacts Presse", path: "/presse/contacts" },
            { label: "Communiqués de presse", path: "/presse/communiques" },
            { label: "DocumentsComp", path: "/presse/documents" },
        ],
    },
    {
        title: "Candidats",
        links: [
            { label: "Travailler chez", path: "/candidats" },
            { label: "Médiathèque", path: "/candidats/mediatheque" },
            { label: "Contact Presse", path: "/presse/contacts" },
        ],
    },
];

export const LEGAL_LINKS: FooterLink[] = [
    { label: "Mentions légales", path: "/mentions-legales" },
    { label: "Données personnelles", path: "/donnees-personnelles" },
];