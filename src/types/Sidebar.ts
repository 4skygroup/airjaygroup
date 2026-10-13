import type {IconType} from "react-icons";

export type SidebarSubLink = {
    label: string;
    url: string;
};

export type SidebarLink = {
    label: string;
    url: string;
    subLinks: SidebarSubLink[];
};

export type SidebarSocialLink = {
    label: string;
    url: string;
    icon: IconType;
};