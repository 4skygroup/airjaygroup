import { Menu, Search } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full bg-couleur2">
            <div className="flex items-center justify-between h-16 px-20">
                {/* Gauche : menu + recherche */}
                <div className="flex items-center gap-4 text-couleur3">
                    <button type="button" aria-label="Ouvrir le menu" className="cursor-pointer">
                        <Menu className="size-6" />
                    </button>

                    <button type="button" aria-label="Rechercher" className="cursor-pointer">
                        <Search className="size-6" />
                    </button>
                </div>

                {/* Droite : logo */}
                <img src="/airjaylogoheader.png" alt="AIRJAY GROUP logo" />
            </div>
        </header>
    );
}