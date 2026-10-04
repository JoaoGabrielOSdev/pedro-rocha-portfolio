import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Header from './components/Header';
import PageTransition from './components/PageTransition';
import Preloader from './components/Preloader';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Services from './pages/Services';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let cancelled = false;
    let retryTimer;
    let attempts = 0;

    const scrollToDestination = () => {
      if (cancelled) return;

      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      const target = document.getElementById(hash.slice(1));
      if (!target) {
        attempts += 1;
        if (attempts < 24) retryTimer = window.setTimeout(scrollToDestination, 80);
        return;
      }

      const headerOffset = 92;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToDestination);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(firstFrame);
      window.clearTimeout(retryTimer);
    };
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Preloader />
      <CustomCursor />
      <Header />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/projeto/:slug" element={<PageTransition><Project /></PageTransition>} />
            <Route path="/sobre" element={<PageTransition><About /></PageTransition>} />
            <Route path="/servicos" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/contato" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
