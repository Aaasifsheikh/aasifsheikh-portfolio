import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
