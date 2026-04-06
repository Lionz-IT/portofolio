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

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <CustomCursor />

        <div className="bg-theme-bg text-theme-text font-sans transition-colors duration-500 overflow-hidden relative">

          <Navbar />

          <Hero />

          <Suspense fallback={null}>
            <SectionWrapper id="about">
              <SectionContent>
                <About />
              </SectionContent>
            </SectionWrapper>

            <SectionWrapper id="projects">
              <SectionContent>
                <Projects />
              </SectionContent>
            </SectionWrapper>

            <SectionWrapper id="skills">
              <SectionContent>
                <Skills />
              </SectionContent>
            </SectionWrapper>

            <SectionWrapper id="experience">
              <SectionContent>
                <Experience />
              </SectionContent>
            </SectionWrapper>

            <SectionWrapper id="contact">
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
