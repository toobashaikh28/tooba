import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import useReveal from './hooks/useReveal.js';
import useTheme from './hooks/useTheme.js';
import { navItems } from './data/content.js';

const ids = navItems.map((n) => n.id);

export default function App() {
  const [active, select] = useActiveSection(ids);
  const [theme, toggleTheme] = useTheme();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav active={active} onSelect={select} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
