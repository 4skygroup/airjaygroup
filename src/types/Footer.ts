import type {IconType} from "react-icons";

export type FooterLink = {
    label: string;
    path: string;
};

export type FooterColumn = {
    title: string;
    links: FooterLink[];
};

export type SocialLink = {
    label: string;
    url: string;
    icon: IconType;
};