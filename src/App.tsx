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

        </Routes>
        <Footer />
      </>
  )
}