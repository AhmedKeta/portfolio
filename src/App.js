import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import PortfolioNav from "./components/shared/Nav/Nav";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Footer from "./components/shared/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <>
      <PortfolioNav />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
