import { Routes, Route, } from 'react-router-dom'
import Hero from "./components/Hero.tsx";
import Manifeste from "./pages/Manifeste.tsx";
import TempsForts from "./pages/TempsForts.tsx";
import Perspectives from "./pages/Perspectives.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/Header.tsx";

export default function App() {
  return (
      <>
        <Header />
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/accueil/manifeste" element={<Manifeste />} />
            <Route path="/accueil/temps-forts" element={<TempsForts />} />
            <Route path="/accueil/perspectives" element={<Perspectives />} />
        </Routes>
        <Footer />
      </>
  )
}