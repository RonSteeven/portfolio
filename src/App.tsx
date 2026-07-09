import type React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import { Navbar, Footer } from './components';
import { Hero, About, Experience, Skills, Projects, Contact } from './sections';
import { useActiveSection } from './hooks';
import { SECTION_IDS } from './constants';

function App(): React.JSX.Element {
  const activeSection = useActiveSection();
  const showFooter = activeSection === SECTION_IDS.CONTACT;

  return (
    <div className="min-h-screen">
      <Navbar brandName="RM" />

      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <motion.div
        animate={{ opacity: showFooter ? 1 : 0, y: showFooter ? 0 : 16 }}
        transition={{ duration: 0.3 }}
        aria-hidden={!showFooter}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
