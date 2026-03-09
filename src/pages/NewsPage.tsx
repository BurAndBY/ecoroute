import { ArrowLeft, CalendarDays, Newspaper } from 'lucide-react';
import { withBase } from '../lib/paths';

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
  {
    date: '28 января 2026',
    title: 'Нам исполняется 10 лет!',
    lead:
      'Экологической тропе «Войди в природу другом» исполняется 10 лет. Юбилейный год станет поводом для новых встреч, публикаций и совместных акций.',
    content: [
      'Присоединяйтесь к нам в социальных сетях, чтобы не пропустить ни одного момента нашего юбилея.',
      'Мы будем делиться интересными фактами, фото и видео с мероприятий, а также проводить онлайн-акции и конкурсы.',
      'Следите за нашим Instagram, чтобы быть в курсе всех новостей и участвовать в обсуждениях.',
      'Ваша активность и участие помогут сделать это событие еще более значимым. Давайте вместе отпразднуем 10 лет нашей тропы и сделаем шаг к более устойчивому будущему.',
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
            Раздел новостей собран как хроника событий экотропы: анонсы, юбилейные публикации,
            мастер-классы и образовательные активности для педагогов и учащихся.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
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
