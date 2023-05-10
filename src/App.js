import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Certificates from "./sections/Certificates";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
}

export default App;
