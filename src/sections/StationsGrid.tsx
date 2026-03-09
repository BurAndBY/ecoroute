import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stationsGridConfig } from '../config';
import { MapPin } from 'lucide-react';
import { withBase } from '../lib/paths';

gsap.registerPlugin(ScrollTrigger);

const StationsGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  const stations = stationsGridConfig.stations;
  const passportItems = stationsGridConfig.passportItems;

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];

    if (!section || !title || !grid || cards.length === 0) return;

    const triggers: ScrollTrigger[] = [];

    // Title animation
    const titleTrigger = ScrollTrigger.create({
      trigger: title,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          title.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
      },
      once: true,
    });
    triggers.push(titleTrigger);

    // Cards stagger animation
    cards.forEach((card, index) => {
      const cardTrigger = ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0, scale: 0.95 },
            { 
              y: 0, 
              opacity: 1, 
              scale: 1, 
              duration: 0.6, 
              delay: (index % 3) * 0.1,
              ease: 'power3.out' 
            }
          );
        },
        once: true,
      });
      triggers.push(cardTrigger);
    });

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  if (!stationsGridConfig.sectionTitle && stations.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-kaleo-sand py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-headline text-kaleo-earth">
            {stationsGridConfig.sectionTitle}
          </h2>
          <p className="font-body text-sm text-kaleo-terracotta uppercase tracking-[0.2em] mt-4">
            {stationsGridConfig.sectionSubtitle}
          </p>
        </div>

        <article className="relative mb-12 overflow-hidden rounded-[2rem] border border-kaleo-earth/10 bg-kaleo-cream shadow-soft md:mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(186,113,63,0.14),transparent_30%),linear-gradient(135deg,rgba(240,230,210,0.45),transparent_55%)]" />
          <div className="relative grid gap-8 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[1.2fr,0.9fr] lg:items-start lg:gap-10">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-kaleo-terracotta">
                Паспорт маршрута
              </p>
              <h3 className="mt-3 max-w-lg font-display text-3xl text-kaleo-earth md:text-4xl">
                {stationsGridConfig.passportTitle}
              </h3>
              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-kaleo-earth/75 md:text-base">
                {stationsGridConfig.passportDescription}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {passportItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-sand/70 p-4 backdrop-blur-sm"
                  >
                    <p className="font-body text-[11px] uppercase tracking-[0.14em] text-kaleo-terracotta/90">
                      {item.label}
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-kaleo-earth md:text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <figure className="overflow-hidden rounded-[1.75rem] border border-kaleo-earth/10 bg-kaleo-sand/70 shadow-soft">
              <img
                src={withBase('/photo_2026-03-09_17-48-04.jpg')}
                alt="Стенд экологической тропы"
                className="h-full w-full object-cover"
              />
              <figcaption className="px-4 py-3 font-body text-sm text-kaleo-earth/70">
                Схема маршрута экологической тропы
              </figcaption>
            </figure>
          </div>
        </article>

        {/* Stations Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {stations.map((station, index) => (
            <a
              key={station.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              href={withBase(`/stations/${station.id}`)}
              className="group relative overflow-hidden rounded-2xl bg-kaleo-cream shadow-soft hover:shadow-deep transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={withBase(station.image)}
                  alt={station.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-kaleo-charcoal/70 via-kaleo-charcoal/20 to-transparent" />
                
                {/* Station Number Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-kaleo-cream/90 backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-kaleo-terracotta" />
                  <span className="font-body text-xs font-medium text-kaleo-earth">
                    Станция {station.id}
                  </span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-xl text-kaleo-cream mb-1">
                    {station.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-4">
                <p className="font-body text-sm text-kaleo-earth/70 line-clamp-3">
                  {station.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-kaleo-terracotta">
                  <span className="font-body text-xs uppercase tracking-wider group-hover:underline">
                    Подробнее
                  </span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StationsGrid;
