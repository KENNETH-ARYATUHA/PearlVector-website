import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="pv-app">
      <header className="pv-nav">
        <div className="pv-nav-inner">
          <span className="pv-logo">PearlVector</span>
          <nav className="pv-nav-links">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <footer className="pv-footer">
        <span>PearlVector &mdash; built in Africa, for Africa.</span>
        <span className="pv-footer-year">&copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
