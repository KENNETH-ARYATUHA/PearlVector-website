
// App.jsx
// --------
// Top-level layout: stacks every section of the one-page site in order.
// Each section is its own component under src/components/, and the nav
// bar's in-page links (see src/data/content.js -> NAV_LINKS) point at the
// matching section's id.

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import VisionMission from "./components/VisionMission";
import Industries from "./components/Industries";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AfricaClipDef from "./components/AfricaClipDef";
// ...other imports

function App() {
  return (
    <div className="min-h-screen">
      <AfricaClipDef />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <VisionMission />
        <Industries />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
    
  );
}


export default App;