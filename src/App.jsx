import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SectionWrapper from './components/SectionWrapper';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

// Alternating video backgrounds for each section
const V1 = '/videos/video1.mp4';
const V2 = '/videos/video2.mp4';

export default function App() {
  return (
    <ThemeProvider>

      <SmoothScroll>
        {/* Noise grain texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Minimal dot cursor */}
        <CustomCursor />

        <div className="bg-theme-bg text-theme-text font-sans transition-colors duration-500">
          <Navbar />

          {/* ── Hero — video1 — full width ── */}
          <Hero video={V1} />

          {/* ── About — kosong — full bleed, content padded inside ── */}
          <SectionWrapper id="about" video={null}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
              <About />
            </div>
          </SectionWrapper>

          {/* ── Projects — video2 — full bleed ── */}
          <SectionWrapper id="projects" video={V2}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
              <Projects />
            </div>
          </SectionWrapper>

          {/* ── Skills — kosong — full bleed ── */}
          <SectionWrapper id="skills" video={null}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
              <Skills />
            </div>
          </SectionWrapper>

          {/* ── Experience — video1 — full bleed ── */}
          <SectionWrapper id="experience" video={V1}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
              <Experience />
            </div>
          </SectionWrapper>

          {/* ── Contact / Footer — kosong — full bleed ── */}
          <SectionWrapper id="contact" video={null}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
              <Contact />
            </div>
          </SectionWrapper>

        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}