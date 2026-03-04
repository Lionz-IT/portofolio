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

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        {/* Noise grain texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Custom cursor (hidden on touch devices via CSS) */}
        <CustomCursor />

        <div className="bg-theme-bg text-theme-text font-sans transition-colors duration-500">
          <Navbar />

          <main className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
            <Hero />

            <SectionWrapper id="about">
              <About />
            </SectionWrapper>

            <SectionWrapper id="projects">
              <Projects />
            </SectionWrapper>

            <SectionWrapper id="skills">
              <Skills />
            </SectionWrapper>

            <SectionWrapper id="experience">
              <Experience />
            </SectionWrapper>
          </main>

          {/* Polished Contact + Footer (has its own padding/layout) */}
          <div className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
            <Contact />
          </div>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}