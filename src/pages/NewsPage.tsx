import { ArrowLeft, CalendarDays, Newspaper, Sparkles } from 'lucide-react';
import { withBase } from '../lib/paths';

const featuredNews = {
  date: '28 января 2026',
  title: 'Нам исполняется 10 лет!',
  lead:
    'Экологической тропе «Войди в природу другом» исполняется 10 лет. Юбилейный год станет поводом для новых встреч, публикаций, праздничных событий и совместных акций.',
  content: [
    'В юбилейный сезон мы будем делиться яркими моментами из истории экотропы, архивными кадрами и новыми достижениями.',
    'Впереди тематические публикации, специальные встречи и праздничные активности для учащихся, педагогов и друзей проекта.',
    'Следите за новостями экотропы, чтобы не пропустить анонсы, поздравления и новые материалы.',
  ],
};

const newsItems = [
  {
    date: '24 февраля 2026',
    title: 'Мастер-классы для учащихся',
    lead:
      'Для школьников подготовлена серия практико-ориентированных мастер-классов, направленных на развитие наблюдательности, экологического мышления и интереса к исследованию природы.',
    content: [
      '«Зеленые друзья: Узнаем растения и их роли в экосистеме».',
      '«Следы природы: Как распознавать животных по их следам».',
      '«Эко-ремесло: Создание поделок из природных материалов».',
      '«Вода — источник жизни: Эксперименты с очисткой воды».',
      '«Секреты компостирования: Как перерабатывать органические отходы».',
    ],
  },
  {
    date: '11 февраля 2026',
    title: 'Мастер-классы для учителей',
    lead:
      'Педагогам предложен цикл методических мастер-классов, посвященных проектированию экотроп, цифровым образовательным решениям и практикам взаимодействия с местным сообществом.',
    content: [
      '«Создание эко-троп: от идеи до реализации».',
      '«Виртуальные эко-тропы: технологии для современного обучения».',
      '«Экологическое воспитание через проектное обучение».',
      '«Интерактивные элементы на эко-тропах: привлекаем внимание учеников».',
      '«Сотрудничество с местным сообществом: создание эко-троп вместе».',
    ],
  },
];

const NewsPage = () => {
  return (
    <main className="min-h-screen bg-kaleo-sand text-kaleo-earth">
      <section className="border-b border-kaleo-earth/10 bg-kaleo-cream/80">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <a
            href={withBase('/')}
            className="inline-flex items-center gap-2 rounded-full border border-kaleo-earth/20 bg-kaleo-sand/70 px-4 py-2 font-body text-xs uppercase tracking-[0.14em] text-kaleo-earth transition hover:border-kaleo-earth/35"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </a>

          <div className="mt-6 flex items-center gap-3">
            <Newspaper className="h-5 w-5 text-kaleo-terracotta" />
            <span className="font-body text-xs uppercase tracking-[0.18em] text-kaleo-terracotta">
              Новости
            </span>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl text-kaleo-earth md:text-5xl">
            Новости экологической тропы
          </h1>
          <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-kaleo-earth/80">
            Здесь собраны юбилейные объявления, мастер-классы и важные события экотропы.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="relative overflow-hidden rounded-[2rem] border border-kaleo-terracotta/20 bg-[linear-gradient(135deg,rgba(186,113,63,0.92),rgba(98,66,44,0.94))] px-6 py-8 text-kaleo-cream shadow-deep md:px-8 md:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_22%),radial-gradient(circle_at_18%_20%,rgba(255,222,173,0.18),transparent_18%),radial-gradient(circle_at_80%_70%,rgba(255,240,210,0.16),transparent_20%)]" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-kaleo-cream/30 bg-kaleo-cream/10 px-4 py-2 font-body text-xs uppercase tracking-[0.16em]">
                <Sparkles className="h-4 w-4" />
                Юбилейный год
              </span>
              <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.16em] text-kaleo-cream/80">
                <CalendarDays className="h-4 w-4" />
                {featuredNews.date}
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
              <div>
                <h2 className="max-w-3xl font-display text-4xl md:text-5xl">
                  {featuredNews.title}
                </h2>
                <p className="mt-5 max-w-3xl border-l-2 border-kaleo-cream/40 pl-4 font-body text-base leading-relaxed text-kaleo-cream/90">
                  {featuredNews.lead}
                </p>
                <div className="mt-6 space-y-3">
                  {featuredNews.content.map((line) => (
                    <p key={line} className="font-body text-base leading-relaxed text-kaleo-cream/85">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-[1.75rem] border border-kaleo-cream/20 bg-kaleo-cream/10 p-6 backdrop-blur-sm">
                <div className="absolute -top-10 right-8 h-24 w-24 rounded-full bg-kaleo-cream/15 blur-2xl" />
                <div className="absolute bottom-6 left-8 h-20 w-20 rounded-full bg-[#ffd59a]/20 blur-2xl" />
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-kaleo-cream/25 bg-kaleo-cream/10">
                    <Sparkles className="h-10 w-10" />
                  </div>
                  <p className="mt-5 font-display text-6xl">10</p>
                  <p className="mt-2 font-body text-sm uppercase tracking-[0.28em] text-kaleo-cream/80">
                    лет вместе с природой
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-kaleo-earth/10 bg-kaleo-cream p-6 shadow-soft md:p-8"
            >
              <div className="flex items-center gap-2 text-kaleo-terracotta">
                <CalendarDays className="h-5 w-5" />
                <p className="font-body text-xs uppercase tracking-[0.16em]">{item.date}</p>
              </div>
              <h2 className="mt-4 font-display text-3xl text-kaleo-earth md:text-4xl">{item.title}</h2>
              <p className="mt-4 border-l-2 border-kaleo-terracotta/40 pl-4 font-body text-base leading-relaxed text-kaleo-earth/85">
                {item.lead}
              </p>
              <div className="mt-6 space-y-3">
                {item.content.map((line) => (
                  <p
                    key={line}
                    className="font-body text-base leading-relaxed text-kaleo-earth/82"
                  >
                    {line}
                  </p>
                ))}
              </div>
              {index < newsItems.length - 1 ? (
                <div className="mt-8 h-px w-full bg-kaleo-earth/10" />
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
