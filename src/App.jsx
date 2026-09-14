import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import VisionMission from "./components/VisionMission";
import Industries from "./components/Industries";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import ScrollToHash from "./components/ScrollToHash";
import Seo from "./components/Seo";

function HomePage() {
  return (
    <main>
      <Seo
        title="Home"
        description="PearlVector is a technology company delivering innovative, reliable and affordable digital solutions — AI, software, mobile apps, cybersecurity, cloud and more — that solve real African challenges."
        path="/"
      />
      <Hero />
      <Services />
      <WhyUs />
      <VisionMission />
      <Industries />
      <Projects />
      <Team />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
