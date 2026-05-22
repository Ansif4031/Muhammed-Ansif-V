import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Education from './components/Education';
import Projects from './components/Projects';
import OpenToWork from './components/OpenToWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#030303] text-gray-100 flex flex-col antialiased">
      {/* Sticky top-level Glass Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow w-full">
        {/* Hero Banner Landing */}
        <Hero />

        {/* Professional About narrative & architectural pillars */}
        <About />

        {/* Interactive Skills Cards Category Layout */}
        <Skills />

        {/* Professional vertical timeline Experience */}
        <Experience />

        {/* Formal academic and certification cards - Commented out for now */}
        {/* <Education /> */}

        {/* Showcase of 6 modern projects */}
        <Projects />

        {/* High-Impact conversion callout banner */}
        <OpenToWork />

        {/* Interactive validation form & details */}
        <Contact />
      </main>

      {/* Minimal Footer with social links & back-to-top scroll */}
      <Footer />
    </div>
  );
}
