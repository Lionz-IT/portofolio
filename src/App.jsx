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

        <div className="bg-theme-bg text-theme-text font-sans transition-colors duration-500 overflow-hidden relative">
          
          {/* Subtle geometric dividers/floating elements in background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <span className="absolute top-[15%] left-[5%] text-primary/10 text-9xl font-display animate-surreal-float">◊</span>
            <span className="absolute top-[35%] right-[10%] text-accent/10 text-9xl font-display animate-surreal-rotate">◉</span>
            <span className="absolute top-[55%] left-[15%] text-rose-400/10 text-8xl font-display animate-surreal-drift">☽</span>
            <span className="absolute top-[85%] right-[5%] text-primary/10 text-9xl font-display animate-surreal-float">∞</span>
          </div>

          <Navbar />

          {/* ── Hero — video1 — full width ── */}
          <Hero video={V1} />

          {/* ── About — kosong — full bleed, content padded inside ── */}
          <SectionWrapper id="about" video={null}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto relative z-10">
              <About />
            </div>
          </SectionWrapper>

          {/* ── Projects — video2 — full bleed ── */}
          <SectionWrapper id="projects" video={V2}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto relative z-10">
              <Projects />
            </div>
          </SectionWrapper>

          {/* ── Skills — kosong — full bleed ── */}
          <SectionWrapper id="skills" video={null}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto relative z-10">
              <Skills />
            </div>
          </SectionWrapper>

          {/* ── Experience — video1 — full bleed ── */}
          <SectionWrapper id="experience" video={V1}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto relative z-10">
              <Experience />
            </div>
          </SectionWrapper>

          {/* ── Contact / Footer — kosong — full bleed ── */}
          <SectionWrapper id="contact" video={null}>
            <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto relative z-10">
              <Contact />
            </div>
          </SectionWrapper>

        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
