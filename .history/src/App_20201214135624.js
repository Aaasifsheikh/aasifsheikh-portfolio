import About from "./About";
import "./App.css";
// import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <div className="new"
      <Home />
      <Navigation />
      <About />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
