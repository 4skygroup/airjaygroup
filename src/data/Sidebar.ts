import {FaInstagram, FaTiktok, FaXTwitter} from "react-icons/fa6";
import type {SidebarLink, SidebarSocialLink, SidebarSubLink} from "../types/Sidebar.ts";

const ACCUEIL: SidebarSubLink[] = [
    { label: "Manifeste", url: "/accueil/manifeste" },
    { label: "Temps fort", url: "/accueil/temps-forts" },
    { label: "Perspectives", url: "/accueil/perspectives" },
    { label: "Ecosystème", url: "/accueil/ecosysteme" },
    { label: "Impact", url: "/accueil/engagements" },
    { label: "Marques", url: "/accueil/marques" },
    { label: "Actualités", url: "/accueil/actualites" },
];

const GROUPE: SidebarSubLink[] = [
    { label: "Vision", url: "/groupe/vision" },
    { label: "Nos valeurs", url: "/groupe/valeurs" },
    { label: "Engagements", url: "/groupe/engagement" },
    { label: "Prévision", url: "/groupe/prevision" },
    { label: "Histoire", url: "/groupe/histoire" },
    { label: "Modèle AIRJAY", url: "/groupe/modele" },
    { label: "Nos talents", url: "/groupe/talents" },
    { label: "Gouvernance", url: "/groupe/gouvernance" },
    { label: "Chiffres et implementation", url: "/groupe/chiffres-implementation" },
    { label: "Actualités", url: "/groupe/actualites" },
];

const ACTIVITES: SidebarSubLink[] = [
    { label: "Excellence opérationnelle", url: "/activites/excellence-operationnelle" },
    { label: "Secteurs", url: "/activites/secteurs" },
    { label: "Les projets", url: "/activites/projects" },
    { label: "Entités rattachées", url: "/activites/entites-rattachees" },
    { label: "Actualités", url: "/activites/actualites" },
];

export const SIDEBAR_LINKS: SidebarLink[] = [
    { label: "Accueil", url: "/", subLinks: ACCUEIL },
    { label: "Groupe", url: "/groupe", subLinks: GROUPE },
    { label: "Activités", url: "/activites", subLinks: ACTIVITES },
    { label: "Marque & Sociétés", url: "/marques-societes", subLinks: [] },
    { label: "Engagements", url: "/engagements", subLinks: [] },
    { label: "Actualités", url: "/actualites", subLinks: [] },
    { label: "Carrières", url: "/carrieres", subLinks: [] },
];

export const SIDEBAR_SOCIAL: SidebarSocialLink[] = [
    { label: "Instagram", url: "https://www.instagram.com/", icon: FaInstagram },
    { label: "TikTok", url: "https://www.tiktok.com/", icon: FaTiktok },
    { label: "X", url: "https://x.com/", icon: FaXTwitter },
];