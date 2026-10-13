import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { SIDEBAR_LINKS, SIDEBAR_SOCIAL } from "../data/Sidebar.ts";

type SidebarProps = {
    open: boolean;
    onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
    const [activeLabel, setActiveLabel] = useState<string | null>(null);

    if (!open) return null;

    const activeLink = SIDEBAR_LINKS.find((link) => link.label === activeLabel);
    const subLinks = activeLink ? activeLink.subLinks : [];
    const hasSubLinks = subLinks.length > 0;

    const handleClose = () => {
        setActiveLabel(null);
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 top-16 z-40 bg-couleur3/50"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Panneau */}
            <aside
                className={`fixed top-16 bottom-0 left-0 z-50 bg-couleur2 text-couleur3 px-20 py-12 ${
                    hasSubLinks ? "w-2/3" : "w-1/2"
                }`}
            >
                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute top-12 right-12 flex items-center gap-2 text-base cursor-pointer"
                >
                    <X className="size-5" />
                    Fermer
                </button>

                <div className="flex gap-24 pt-16">
                    {/* Colonne principale */}
                    <div className="flex flex-col">
                        <p className="font-display text-4xl mb-10">AirJay</p>

                        <nav className="flex flex-col gap-6 text-lg">
                            {SIDEBAR_LINKS.map((link) => {
                                if (link.subLinks.length > 0) {
                                    const isActive = activeLabel === link.label;

                                    return (
                                        <button
                                            key={link.label}
                                            type="button"
                                            onClick={() => setActiveLabel(isActive ? null : link.label)}
                                            className={`text-left cursor-pointer ${
                                                isActive ? "font-semibold" : "font-medium"
                                            }`}
                                        >
                                            {link.label}
                                        </button>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.label}
                                        to={link.url}
                                        onClick={handleClose}
                                        className="font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <Link
                            to="/contact"
                            onClick={handleClose}
                            className="mt-10 w-fit rounded-md bg-couleur1 px-6 py-3 text-sm text-couleur2"
                        >
                            Contact
                        </Link>

                        {/* Réseaux sociaux */}
                        <div className="mt-16 flex items-center gap-8">
                            {SIDEBAR_SOCIAL.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                    >
                                        <Icon className="size-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Colonne des sous-liens */}
                    {hasSubLinks && (
                        <nav className="flex flex-col gap-6 pt-16 text-lg">
                            {subLinks.map((subLink) => (
                                <Link
                                    key={subLink.label}
                                    to={subLink.url}
                                    onClick={handleClose}
                                    className="font-medium"
                                >
                                    {subLink.label}
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>
            </aside>
        </>
    );
}