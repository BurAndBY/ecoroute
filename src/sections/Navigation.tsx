import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navigationConfig } from '../config';
import { Menu, X, Leaf } from 'lucide-react';
import { withBase } from '../lib/paths';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const buttons = navigationConfig.buttons;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Show/hide navigation based on scroll
    const showNav = ScrollTrigger.create({
      trigger: document.body,
      start: '100vh top',
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });

    return () => {
      showNav.kill();
    };
  }, []);

  const navigate = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== withBase('/')) {
        window.location.href = withBase(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.location.href = withBase(href);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-kaleo-cream/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href={withBase('/')}
              className={`flex items-center gap-2 transition-colors duration-300 ${
                isScrolled ? 'text-kaleo-earth' : 'text-kaleo-cream'
              }`}
            >
              <Leaf className="w-6 h-6" />
              <span className="font-display text-xl">Экотропа</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => navigate(button.href)}
                  className={`px-4 py-2 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                    isScrolled
                      ? 'text-kaleo-earth hover:bg-kaleo-sand'
                      : 'text-kaleo-cream hover:bg-kaleo-cream/20'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? 'text-kaleo-earth hover:bg-kaleo-sand'
                  : 'text-kaleo-cream hover:bg-kaleo-cream/20'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-kaleo-charcoal/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-16 left-4 right-4 bg-kaleo-cream rounded-2xl shadow-deep p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => navigate(button.href)}
                className="w-full px-4 py-3 text-left font-body text-base text-kaleo-earth hover:bg-kaleo-sand rounded-xl transition-colors duration-300"
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Navigation;
