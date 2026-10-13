import {FaInstagram, FaTiktok, FaXTwitter} from "react-icons/fa6";
import type {SidebarLink, SidebarSocialLink, SidebarSubLink} from "../types/Sidebar.ts";

const ACCUEIL: SidebarSubLink[] = [
    { label: "Manifeste", url: "/accueil/manifeste" },
    { label: "Temps fort", url: "/accueil/temps-forts" },
    { label: "Perspectives", url: "/accueil/perspectives" },
    { label: "Ecosystème", url: "/" },
    { label: "Impact", url: "/" },
    { label: "Marques", url: "/" },
    { label: "Actualités", url: "/" },
];

export const SIDEBAR_LINKS: SidebarLink[] = [
    { label: "Accueil", url: "/", subLinks: ACCUEIL },
    { label: "Groupe", url: "/groupe", subLinks: [] },
    { label: "Activités", url: "/activites", subLinks: [] },
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