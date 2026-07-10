import './index.css';

import { motion } from 'framer-motion';
import type React from 'react';

import { Footer, Navbar } from './components';
import { SECTION_IDS } from './constants';
import { useActiveSection } from './hooks';
import { About, Contact, Experience, Hero, Projects, Skills } from './sections';

function App(): React.JSX.Element {
  const activeSection = useActiveSection();
  const showFooter = activeSection === SECTION_IDS.CONTACT;

  return (
    <div className="min-h-screen">
      <Navbar brandName="RM" />

      <main>
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
