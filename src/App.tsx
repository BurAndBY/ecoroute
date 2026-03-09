import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLenis from './hooks/useLenis';
import { siteConfig } from './config';
import { stripBaseFromPathname } from './lib/paths';

// Sections
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import NarrativeText from './sections/NarrativeText';
import StationsGrid from './sections/StationsGrid';
import BreathSection from './sections/BreathSection';
import ZigZagGrid from './sections/ZigZagGrid';
import Achievements from './sections/Achievements';
import Cooperation from './sections/Cooperation';
import Footer from './sections/Footer';
import StationPage from './pages/StationPage';
import ExcursionSpringPage from './pages/ExcursionSpringPage';
import ExcursionWinterPage from './pages/ExcursionWinterPage';
import NewsPage from './pages/NewsPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    // Set document language if configured
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }

    // Refresh ScrollTrigger after all content is loaded
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Also refresh after a short delay to ensure images are loaded
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(refreshTimeout);
    };
  }, []);

  const relativePathname = stripBaseFromPathname(window.location.pathname);
  const stationPathMatch = relativePathname.match(/^\/stations\/(\d+)\/?$/);
  const isExcursionSpringPage = /^\/excursions\/spring-organisms\/?$/.test(relativePathname);
  const isExcursionWinterPage = /^\/excursions\/winter-organisms\/?$/.test(relativePathname);
  const isNewsPage = /^\/news\/?$/.test(relativePathname);
  const stationId = stationPathMatch ? Number(stationPathMatch[1]) : null;

  if (stationId !== null) {
    return <StationPage stationId={stationId} />;
  }

  if (isExcursionSpringPage) {
    return <ExcursionSpringPage />;
  }

  if (isExcursionWinterPage) {
    return <ExcursionWinterPage />;
  }

  if (isNewsPage) {
    return <NewsPage />;
  }

  return (
    <div className="relative bg-kaleo-sand">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Narrative Text Section */}
      <NarrativeText />

      {/* Stations Grid - All 10 Stations */}
      <StationsGrid />

      {/* BREATH Video Mask Section */}
      <BreathSection />

      {/* Zig-Zag Grid Section - Methodology, Developments, Excursions */}
      <ZigZagGrid />

      {/* Achievements Section */}
      <Achievements />

      {/* Cooperation Section */}
      <Cooperation />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
