import About from "./About";
import "./App.css";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Experiences />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
