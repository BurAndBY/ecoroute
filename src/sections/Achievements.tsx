import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { achievementsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const achievements = achievementsConfig.achievements;

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const stats = statsRef.current;
    const numbers = numbersRef.current.filter(Boolean) as HTMLSpanElement[];

    if (!section || !title || !stats || numbers.length === 0) return;

    const triggers: ScrollTrigger[] = [];

    // Title animation
    const titleTrigger = ScrollTrigger.create({
      trigger: title,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          title.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
        );
      },
      once: true,
    });
    triggers.push(titleTrigger);

    // Stats container animation
    const statsTrigger = ScrollTrigger.create({
      trigger: stats,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          stats.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
        );
      },
      once: true,
    });
    triggers.push(statsTrigger);

    // Number counter animation
    numbers.forEach((numEl, index) => {
      const targetValue = achievements[index].number;
      const numericPart = parseInt(targetValue.replace(/\D/g, ''));
      const hasPlus = targetValue.includes('+');
      
      const counter = { value: 0 };
      
      const numTrigger = ScrollTrigger.create({
        trigger: numEl,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(counter, {
            value: numericPart,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (numEl) {
                numEl.textContent = Math.round(counter.value) + (hasPlus ? '+' : '');
              }
            }
          });
        },
        once: true,
      });
      triggers.push(numTrigger);
    });

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, [achievements]);

  if (!achievementsConfig.sectionTitle && achievements.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative w-full bg-kaleo-earth py-20 md:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-headline text-kaleo-cream">
            {achievementsConfig.sectionTitle}
          </h2>
          <p className="font-body text-sm text-kaleo-sand/70 uppercase tracking-[0.2em] mt-4">
            {achievementsConfig.sectionSubtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="mb-3">
                <span
                  ref={(el) => { numbersRef.current[index] = el; }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl text-kaleo-cream"
                >
                  0
                </span>
              </div>
              <p className="font-body text-sm text-kaleo-sand/70 uppercase tracking-wider">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
