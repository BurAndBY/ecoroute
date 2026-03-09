import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { achievementsConfig } from '../config';
import { BookOpenText, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<'publications' | 'master'>('publications');
  const [showAllPublications, setShowAllPublications] = useState(false);

  const achievements = achievementsConfig.achievements;
  const publications = achievementsConfig.publications;
  const masterClasses = achievementsConfig.masterClasses;
  const displayedPublications = showAllPublications ? publications : publications.slice(0, 6);

  const publicationCards = useMemo(
    () =>
      displayedPublications.map((publication, index) => {
        const year = publication.match(/(19|20)\d{2}/)?.[0] ?? 'Год';
        const globalIndex = showAllPublications ? index + 1 : index + 1;
        return { id: globalIndex, year, text: publication };
      }),
    [displayedPublications, showAllPublications]
  );

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

        <div className="mt-14 rounded-3xl border border-kaleo-cream/15 bg-kaleo-charcoal/25 p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => setActiveTab('publications')}
              className={`rounded-2xl border px-4 py-3 text-left transition ${
                activeTab === 'publications'
                  ? 'border-kaleo-terracotta bg-kaleo-terracotta/20'
                  : 'border-kaleo-cream/10 bg-kaleo-charcoal/20 hover:border-kaleo-cream/25'
              }`}
            >
              <div className="flex items-center gap-2 text-kaleo-cream">
                <BookOpenText className="h-4 w-4 text-kaleo-terracotta" />
                <p className="font-display text-xl">{achievementsConfig.publicationsTitle}</p>
              </div>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.14em] text-kaleo-sand/70">
                {publications.length} материалов
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('master')}
              className={`rounded-2xl border px-4 py-3 text-left transition ${
                activeTab === 'master'
                  ? 'border-kaleo-terracotta bg-kaleo-terracotta/20'
                  : 'border-kaleo-cream/10 bg-kaleo-charcoal/20 hover:border-kaleo-cream/25'
              }`}
            >
              <div className="flex items-center gap-2 text-kaleo-cream">
                <GraduationCap className="h-4 w-4 text-kaleo-terracotta" />
                <p className="font-display text-xl">{achievementsConfig.masterClassesTitle}</p>
              </div>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.14em] text-kaleo-sand/70">
                {masterClasses.length} тем
              </p>
            </button>
          </div>

          {activeTab === 'publications' ? (
            <article className="mt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {publicationCards.map((publication) => (
                  <div
                    key={publication.id}
                    className="rounded-2xl border border-kaleo-cream/10 bg-kaleo-earth/35 p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-kaleo-terracotta/20 font-body text-xs text-kaleo-cream">
                        {publication.id}
                      </span>
                      <span className="rounded-full border border-kaleo-cream/15 px-3 py-1 font-body text-xs text-kaleo-sand/75">
                        {publication.year}
                      </span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-kaleo-sand/90">
                      {publication.text}
                    </p>
                  </div>
                ))}
              </div>

              {publications.length > 6 ? (
                <div className="mt-5 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAllPublications((prev) => !prev)}
                    className="rounded-full border border-kaleo-cream/25 px-5 py-2 font-body text-xs uppercase tracking-[0.12em] text-kaleo-cream transition hover:border-kaleo-terracotta hover:bg-kaleo-terracotta/20"
                  >
                    {showAllPublications ? 'Свернуть список' : 'Показать все публикации'}
                  </button>
                </div>
              ) : null}
            </article>
          ) : (
            <article className="mt-6 rounded-2xl border border-kaleo-cream/10 bg-kaleo-earth/35 p-4 md:p-6">
              <ol className="grid gap-3">
                {masterClasses.map((masterClass, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-xl border border-kaleo-cream/10 bg-kaleo-charcoal/30 p-4"
                  >
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-kaleo-terracotta/20 px-2 font-body text-xs text-kaleo-cream">
                      {index + 1}
                    </span>
                    <p className="font-body text-sm leading-relaxed text-kaleo-sand/90">{masterClass}</p>
                  </li>
                ))}
              </ol>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
