import NavBar from "./components/NavBar";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
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
      <Contact />
    </>
  );
}

export default App;
