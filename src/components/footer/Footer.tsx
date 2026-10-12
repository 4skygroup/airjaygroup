import { Link } from "react-router-dom";
import {COLUMNS, LEGAL_LINKS, SOCIAL} from "./FooterData.ts";

const COPYRIGHT = `© ${new Date().getFullYear()} AirJay Tous droits réservés.`;
const linkClass = "transition-colors hover:text-couleur1";

export default function Footer() {
    return (
        <div className="font-glacial bg-couleur2 p-4 md:p-8 lg:p-12">
            <footer className="bg-couleur3 text-couleur2">
                <div className="mx-auto max-w-7xl px-8 py-12">
                    {/* Contact + Réseaux */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="lg:col-start-2">
                            <p className="mb-4">Nous contacter</p>
                            <a href={`mailto:ir@airjay.group`} className={linkClass}>
                                ir@airjay.group
                            </a>
                        </div>

                        <div className="lg:col-span-2">
                            <p className="mb-4">{SOCIAL.title}</p>
                            <ul className="flex items-center gap-6">
                                {SOCIAL.links.map(({ label, url, icon: Icon }) => (
                                    <li key={label}>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className={linkClass}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Logo + colonnes de liens */}
                    <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                        <div className="max-w-xs">
                            <img src="/airjaylogofooter.png" alt="logo de AIRJAY GROUP" className="mb-4 h-20 w-auto" />
                            <p>
                                Investissement stratégique et développement d'excellence à travers les secteurs du luxe, de l'industrie et de la finance.
                            </p>
                        </div>

                        {COLUMNS.map((column) => (
                            <nav key={column.title} aria-label={column.title}>
                                <h3 className="mb-6 text-sm md:text-base font-normal">{column.title}</h3>
                                <ul className="space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <Link to={link.path} className={linkClass}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>

                    {/* Bas de page */}
                    <div className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
                        {LEGAL_LINKS.map((link) => (
                            <Link key={link.label} to={link.path} className={linkClass}>
                                {link.label}
                            </Link>
                        ))}
                        <p>{COPYRIGHT}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}