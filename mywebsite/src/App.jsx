import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProfilePhoto from "./components/ProfilePhoto";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <ProfilePhoto />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;