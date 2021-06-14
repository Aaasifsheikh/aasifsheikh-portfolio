import About from "./";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
 
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
