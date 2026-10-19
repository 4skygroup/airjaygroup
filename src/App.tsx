import { Routes, Route, } from 'react-router-dom'
import Hero from "./components/Hero.tsx";
import Manifeste from "./pages/accueil/Manifeste.tsx";
import TempsForts from "./pages/accueil/TempsForts.tsx";
import Perspectives from "./pages/accueil/Perspectives.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/Header.tsx";
import Ecosysteme from "./pages/accueil/Ecosysteme.tsx";
import Engagements from "./pages/accueil/Engagements.tsx";
import Marques from "./pages/accueil/Marques.tsx";
import Actualites from "./components/Actualites.tsx";
import Vision from "./pages/groupe/Vision.tsx";
import Valeurs from "./pages/groupe/Valeurs.tsx";
import Engagement from "./components/Engagement.tsx";
import Histoire from "./pages/groupe/Histoire.tsx";
import Modele from "./pages/groupe/Modele.tsx";
import Prevision from "./pages/groupe/Prevision.tsx";

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
            <Route path="/accueil/engagements" element={<Engagements />} />
            <Route path="/accueil/marques" element={<Marques />} />
            <Route path="/accueil/actualites" element={<Actualites />} />

            <Route path="/groupe/vision" element={<Vision />} />

            <Route path="/groupe/valeurs" element={<Valeurs />} />
            <Route path="/groupe/engagement" element={<Engagement />} />
            <Route path="/groupe/prevision" element={<Prevision />} />
            <Route path="/groupe/histoire" element={<Histoire />} />
            <Route path="/groupe/modele" element={<Modele />} />

        </Routes>
        <Footer />
      </>
  )
}