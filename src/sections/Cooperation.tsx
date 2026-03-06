import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cooperationConfig } from '../config';
import { Check, Handshake, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Cooperation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const { sectionTitle, sectionSubtitle, description, benefits } = cooperationConfig;

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const benefitsEl = benefitsRef.current;

    if (!section || !content || !benefitsEl) return;

    const triggers: ScrollTrigger[] = [];

    // Content animation
    const contentTrigger = ScrollTrigger.create({
      trigger: content,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          content.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
        );
      },
      once: true,
    });
    triggers.push(contentTrigger);

    // Benefits animation
    const benefitsTrigger = ScrollTrigger.create({
      trigger: benefitsEl,
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo(
          benefitsEl.children,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
        );
      },
      once: true,
    });
    triggers.push(benefitsTrigger);

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  if (!sectionTitle && benefits.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="cooperation"
      className="relative w-full bg-kaleo-cream py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="w-6 h-6 text-kaleo-terracotta" />
              <span className="font-body text-sm text-kaleo-terracotta uppercase tracking-[0.2em]">
                {sectionSubtitle}
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-kaleo-earth mb-6">
              {sectionTitle}
            </h2>
            
            <p className="font-body text-base text-kaleo-earth/70 leading-relaxed mb-8">
              {description}
            </p>

            <button className="group inline-flex items-center gap-3 px-6 py-3 bg-kaleo-terracotta text-kaleo-cream rounded-full font-body text-sm uppercase tracking-wider hover:bg-kaleo-earth transition-colors duration-300">
              <Mail className="w-4 h-4" />
              Связаться с нами
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Benefits */}
          <div ref={benefitsRef} className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-kaleo-sand rounded-xl hover:shadow-soft transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-kaleo-terracotta/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-kaleo-terracotta" />
                </div>
                <p className="font-body text-base text-kaleo-earth">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
