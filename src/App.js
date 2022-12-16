import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Project from "./components/Project";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Project/>
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
