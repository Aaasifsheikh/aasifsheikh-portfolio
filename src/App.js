import About from "./Componants/About";
import "./App.css";
import Contact from "./Componants/Contact";
import Home from "./Componants/Home";
import Navigation from "./Componants/Navigation";
import Portfolio from "./Componants/Portfolio";
import Footer from "./Componants/Footer";
 
function App() {
  return (
    <div className="App">
      <Home />
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
