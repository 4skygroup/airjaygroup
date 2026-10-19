import HeroGris from "../../components/HeroGris.tsx";
import CardGris from "../../components/CardGris.tsx";

export default function Histoire() {
    return (
        <>
            <HeroGris
                accroche="Nous croyons en un capitalisme de conviction."
                desc="Depuis la création d'AIRJAY GROUP, notre boussole est restée la même : l'exigence. Dans un monde de plus en plus volatile, la stabilité est devenue le luxe ultime. Notre structure de holding nous permet de prendre le temps nécessaire pour que chaque projet atteigne sa pleine maturité.  Ma vision pour le groupe est celle d'un archipel de talents, unis par des valeurs communes mais libres d'innover dans leurs domaines respectifs. C'est cette synergie entre autonomie et appartenance qui fait notre force unique sur le marché mondial."
            />

            <CardGris
                titre="Un parcours d'engagements."
                img=""
                sousTitre="1998 La Fondation"
                desc="Création de la première entité de conseil financier à Paris par Jean-René Jay, posant les jalons de ce qui deviendra AIRJAY GROUP."
            />

            <CardGris
                img=""
                sousTitre="1998 La Fondation"
                desc="Création de la première entité de conseil financier à Paris par Jean-René Jay, posant les jalons de ce qui deviendra AIRJAY GROUP."
            />

            <CardGris
                img=""
                sousTitre="1998 La Fondation"
                desc="Création de la première entité de conseil financier à Paris par Jean-René Jay, posant les jalons de ce qui deviendra AIRJAY GROUP."
            />
        </>
    );
}