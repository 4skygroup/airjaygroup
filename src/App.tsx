import { Routes, Route, } from 'react-router-dom'
import Hero from "./components/Hero.tsx";
import Manifeste from "./pages/accueil/Manifeste.tsx";
import TempsForts from "./pages/accueil/TempsForts.tsx";
import Perspectives from "./pages/accueil/Perspectives.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/Header.tsx";
import Ecosysteme from "./pages/accueil/Ecosysteme.tsx";
import EngagementsAccueil from "./pages/accueil/EngagementsAccueil.tsx";
import Marques from "./pages/accueil/Marques.tsx";
import Vision from "./pages/groupe/Vision.tsx";
import Valeurs from "./pages/groupe/Valeurs.tsx";
import Engagement from "./components/Engagement.tsx";
import Histoire from "./pages/groupe/Histoire.tsx";
import Modele from "./pages/groupe/Modele.tsx";
import Prevision from "./pages/groupe/Prevision.tsx";
import Talents from "./pages/groupe/Talents.tsx";
import Gouvernance from "./components/Gouvernance.tsx";
import MembreDetail from "./components/Membredetail.tsx";
import ChiffresImple from "./pages/groupe/ChiffresImple.tsx";
import ExcellenceOperationnelle from "./pages/activite/ExcellenceOperationnelle.tsx";
import Secteurs from "./pages/activite/Secteurs.tsx";
import Projects from "./pages/activite/Projects.tsx";
import EntitesRattachees from "./pages/activite/EntitesRattachees.tsx";
import ActualitesAccueil from "./pages/accueil/ActualitesAccueil.tsx";
import ActualitesActi from "./pages/activite/ActualitesActi.tsx";
import ActualitesGroupe from "./pages/groupe/ActualitesGroupe.tsx";
import ActualitesComp from "./components/ActualitesComp.tsx";
import {categoriesActualites} from "./data/Actualites.ts";
import Investisseurs from "./pages/actualites/Investisseurs.tsx";
import Presse from "./pages/actualites/Presse.tsx";
import Documents from "./pages/actualites/Documents.tsx";
import Questions from "./pages/actualites/Questions.tsx";
import MarquesSocietesPage from "./pages/marquessociete/MarquesSocietesPage.tsx";
import Excellence from "./pages/carriere/Excellence.tsx";
import Culture from "./pages/carriere/Culture.tsx";
import Metiers from "./pages/carriere/Metiers.tsx";
import MetiersDetails from "./pages/carriere/MetiersDetails.tsx";
import AnnuaireOffres from "./pages/carriere/Annuaireoffres.tsx";
import Projection from "./pages/innovation/Projection.tsx";
import Ambitions from "./pages/innovation/Ambitions.tsx";
import Recherches from "./pages/innovation/Recherches.tsx";
import Partenariats from "./pages/innovation/Partenariats.tsx";

export default function App() {
  return (
      <>
        <Header />
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/accueil/manifeste" element={<Manifeste />} />
            <Route path="/accueil/temps-forts" element={<TempsForts />} />
            <Route path="/accueil/perspectives" element={<Perspectives />} />
            <Route path="/accueil/ecosysteme" element={<Ecosysteme />} />
            <Route path="/accueil/engagements" element={<EngagementsAccueil />} />
            <Route path="/accueil/marques" element={<Marques />} />
            <Route path="/accueil/actualites" element={<ActualitesAccueil/>} />

            <Route path="/groupe/vision" element={<Vision />} />
            <Route path="/groupe/valeurs" element={<Valeurs />} />
            <Route path="/groupe/engagement" element={<Engagement />} />
            <Route path="/groupe/prevision" element={<Prevision />} />
            <Route path="/groupe/histoire" element={<Histoire />} />
            <Route path="/groupe/modele" element={<Modele />} />

            <Route path="/groupe/talents" element={<Talents />} />
            <Route path="/groupe/gouvernance" element={<Gouvernance />} />
            <Route path="/groupe/gouvernance/:id" element={<MembreDetail />} />
            <Route path="/groupe/chiffres-implementation" element={<ChiffresImple />} />
            <Route path="/groupe/actualites" element={<ActualitesGroupe/>} />

            <Route path="/activites/excellence-operationnelle" element={<ExcellenceOperationnelle />} />
            <Route path="/activites/secteurs" element={<Secteurs />} />
            <Route path="/activites/projects" element={<Projects />} />
            <Route path="/activites/entites-rattachees" element={<EntitesRattachees />} />
            <Route path="/activites/actualites" element={<ActualitesActi/>} />

            <Route path="/engagements" element={<EngagementsAccueil/>} />

            <Route path="/marques-societes" element={<MarquesSocietesPage/>} />

            <Route path="/actualites/actualités-liees" element={<ActualitesComp categories={categoriesActualites}/>} />
            <Route path="/actualites/investisseurs" element={<Investisseurs />} />


            <Route path="/actualites/presse" element={<Presse />} />
            <Route path="/actualites/documents" element={<Documents />} />
            <Route path="/actualites/questions" element={<Questions />} />


            <Route path="/carrieres/excellence" element={<Excellence />} />
            <Route path="/carrieres/culture" element={<Culture />} />
            <Route path="/carrieres/metiers" element={<Metiers />} />
            <Route path="/carrieres/metiers-details" element={<MetiersDetails />} />
            <Route path="/carrieres/offres" element={<AnnuaireOffres />} />

            <Route path="/innovations/projections" element={<Projection />} />
            <Route path="/innovations/ambitions" element={<Ambitions />} />

            <Route path="/innovations/recherches" element={<Recherches />} />
            <Route path="/innovations/partenariats" element={<Partenariats />} />



        </Routes>
        <Footer />
      </>
  )
}