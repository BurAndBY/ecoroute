import { ArrowDownToLine, ArrowLeft, BriefcaseBusiness } from 'lucide-react';
import { withBase } from '../lib/paths';

const materials = [
  {
    label: 'Скачать сценарий игры',
    href: '/деловая игра.docx',
  },
  {
    label: 'Скачать презентацию',
    href: '/Деловая игра.pptx',
  },
];

const tasks = [
  {
    title: 'Эпиграф и настрой на работу',
    description:
      'Команды начинают с эпиграфа «Интеллект – это способность адаптироваться к изменениям» и настраиваются на совместную работу.',
  },
  {
    title: '«Заморочки не из бочки»',
    description:
      'Участники расшифровывают пословицы и поговорки, изложенные почти научным языком.',
  },
  {
    title: 'Игра «Интуиция»',
    description:
      'По изображениям команды определяют биологические и химические термины: клетка, вирус, фотосинтез и другие.',
  },
  {
    title: 'Физминутка «Угадай мелодию»',
    description:
      'Небольшой игровой блок, где по картинке нужно узнать песню.',
  },
  {
    title: '«Реши задачу»',
    description:
      'Команды анализируют историю о Луи Пастере и объясняют, почему дуэль не состоялась.',
  },
  {
    title: '«Составь задачу по картинке»',
    description:
      'Участники придумывают практико-ориентированные задания на основе предложенных изображений.',
  },
];

const idioms = {
  one: [
    '«Заблудился в трех соснах»',
    '«Знает кошка, чье мясо съела»',
    '«Отольются кошке мышкины слезы»',
    '«Комар носа не подточит»',
  ],
  two: [
    '«В ногах правды нет»',
    '«Любовь зла, полюбишь и козла»',
    '«Голь на выдумку хитра»',
    '«Кто зло помянет, тому глаз вон»',
  ],
};

const intuitionAnswers = ['Цитоплазма', 'Клетка', 'Фотосинтез', 'Царства', 'Вирус'];

const BusinessGamePage = () => {
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
            <BriefcaseBusiness className="h-5 w-5 text-kaleo-terracotta" />
            <span className="font-body text-xs uppercase tracking-[0.18em] text-kaleo-terracotta">
              Экскурсия
            </span>
          </div>

          <h1 className="mt-3 max-w-5xl font-display text-4xl text-kaleo-earth md:text-5xl">
            Деловая игра «Функциональная грамотность учителя»
          </h1>
          <p className="mt-5 max-w-4xl font-body text-base leading-relaxed text-kaleo-earth/80">
            Методическая игра для педагогов, направленная на развитие профессиональной
            компетентности и поиск практических способов формирования функциональной грамотности у
            учащихся.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">
                Материалы
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-kaleo-earth/80">
                Для проведения игры доступны сценарий и презентация.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {materials.map((material) => (
                <a
                  key={material.href}
                  href={withBase(material.href)}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-kaleo-terracotta/40 bg-kaleo-sand px-5 py-3 font-body text-xs uppercase tracking-[0.14em] text-kaleo-earth transition-colors hover:border-kaleo-terracotta hover:bg-kaleo-terracotta/10"
                >
                  <ArrowDownToLine className="h-4 w-4 text-kaleo-terracotta" />
                  {material.label}
                </a>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-4 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:grid-cols-4">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Формат</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Деловая игра для педагогов</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Цель</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Развитие профкомпетентности</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Оборудование</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Презентация, рабочие листы</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Режим</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Командная работа</p>
          </div>
        </div>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Цель и задачи</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">
            Цель: создать условия для развития профессиональной компетентности педагогов по
            формированию функциональной грамотности у учащихся.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            <li>Рассмотреть пути формирования и развития функциональной грамотности обучающихся.</li>
            <li>Повысить интерес к использованию новых образовательных технологий.</li>
            <li>Выработать рекомендации для коррекции деятельности учителя-предметника.</li>
          </ul>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Ход игры</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {tasks.map((task) => (
              <div key={task.title} className="rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
                <h3 className="font-display text-2xl text-kaleo-earth">{task.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-kaleo-earth/80">
                  {task.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
            <h2 className="font-display text-3xl text-kaleo-earth">Пословицы. Вариант I</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
              {idioms.one.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
            <h2 className="font-display text-3xl text-kaleo-earth">Пословицы. Вариант II</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
              {idioms.two.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Игра «Интуиция»</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">
            Участники определяют биологические и химические термины по картинкам, а затем переходят
            к практико-ориентированным задачам.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {intuitionAnswers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Практическая задача</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">
            Один из ключевых блоков игры связан с задачей о Луи Пастере. Участники должны объяснить,
            почему дуэль не состоялась, и определить тип предложенного «оружия».
          </p>
          <div className="mt-4 rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
            <p className="font-body text-sm leading-relaxed text-kaleo-earth/85">
              Ответ: дуэль не состоялась, а предложенное оружие можно назвать бактериологическим.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default BusinessGamePage;
