import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionWrapper from './components/SectionWrapper';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

const SECTION_CONTENT_CLASS = 'px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto relative z-10';

function SectionContent({ children }) {
  return <div className={SECTION_CONTENT_CLASS}>{children}</div>;
}

const V1 = null;
const V2 = null;

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <CustomCursor />

        <div className="bg-theme-bg text-theme-text font-sans transition-colors duration-500 overflow-hidden relative">

          <Navbar />

          {/* ── Hero — video1 — full width ── */}
          <Hero video={V1} />

          <Suspense fallback={null}>
            {/* ── About — kosong — full bleed, content padded inside ── */}
            <SectionWrapper id="about" video={null}>
              <SectionContent>
                <About />
              </SectionContent>
            </SectionWrapper>

            {/* ── Projects — video2 — full bleed ── */}
            <SectionWrapper id="projects" video={V2} backdropTone="accent">
              <SectionContent>
                <Projects />
              </SectionContent>
            </SectionWrapper>

            {/* ── Skills — kosong — full bleed ── */}
            <SectionWrapper id="skills" video={null}>
              <SectionContent>
                <Skills />
              </SectionContent>
            </SectionWrapper>

            {/* ── Experience — video1 — full bleed ── */}
            <SectionWrapper id="experience" video={V1} backdropTone="gold">
              <SectionContent>
                <Experience />
              </SectionContent>
            </SectionWrapper>

            {/* ── Contact / Footer — kosong — full bleed ── */}
            <SectionWrapper id="contact" video={null}>
              <SectionContent>
                <Contact />
              </SectionContent>
            </SectionWrapper>
          </Suspense>

        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
