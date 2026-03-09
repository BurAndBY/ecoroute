import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cooperationConfig } from '../config';
import { Check, FileText, Handshake } from 'lucide-react';
import { withBase } from '../lib/paths';

gsap.registerPlugin(ScrollTrigger);

const Cooperation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const { sectionTitle, sectionSubtitle, description, actsTitle, actsDescription, acts, benefits } = cooperationConfig;

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

            <div className="mb-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand/70 p-5">
              <h3 className="font-display text-2xl text-kaleo-earth">
                {actsTitle}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-kaleo-earth/75">
                {actsDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {acts.map((act) => (
                  <a
                    key={act.href}
                    href={withBase(act.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-kaleo-terracotta/40 bg-kaleo-cream px-4 py-2 font-body text-xs uppercase tracking-[0.12em] text-kaleo-earth transition-colors hover:border-kaleo-terracotta hover:bg-kaleo-terracotta/10"
                  >
                    <FileText className="h-4 w-4 text-kaleo-terracotta" />
                    {act.label}
                  </a>
                ))}
              </div>
            </div>

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
