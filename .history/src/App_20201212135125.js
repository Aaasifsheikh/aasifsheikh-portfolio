import About from "./About";
import "./App.css";
// import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
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
