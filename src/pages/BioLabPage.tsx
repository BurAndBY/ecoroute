import { ArrowDownToLine, ArrowLeft, FlaskConical } from 'lucide-react';
import { withBase } from '../lib/paths';

const material = {
  label: 'Скачать материал занятия',
  href: '/БИОЛАБ.docx',
};

const warmupQuestions = {
  teamOne: [
    'Где у человека находится самый маленький сустав?',
    'Назовите самый большой внутренний орган человека.',
    'Назовите самую длинную кость в теле человека.',
    'Назовите самую редкую группу крови человека.',
    'Назовите самую большую артерию.',
  ],
  teamTwo: [
    'Что такое пульс?',
    'Чем заканчивается трахея?',
    'Какие питательные вещества расщепляются уже в ротовой полости?',
    'В каком человеческом органе есть стекловидное тело?',
    'Какие кровяные клетки существуют?',
  ],
};

const microscopyAnswers = [
  'Соединительная костная ткань',
  'Нервная ткань',
  'Соединительная ткань: кровь',
  'Мышечная гладкая ткань',
  'Многослойный эпителий',
];

const gameStages = [
  {
    title: 'Конкурс 1. «Разминка»',
    description:
      'Две команды получают вопросы по анатомии и физиологии человека. На выполнение задания отводится 5 минут.',
  },
  {
    title: 'Конкурс 2. «Гистология»',
    description:
      'Участники рассматривают 5 микропрепаратов тканей человека и определяют их названия по номерам.',
  },
  {
    title: 'Конкурс 3. «Забавная анатомия»',
    description:
      'Командам по очереди задаются вопросы в игровой форме. Каждый правильный ответ приносит 1 балл.',
  },
  {
    title: 'Конкурс 4. «Угадай орган»',
    description:
      'По описанию нужно определить орган, биологический объект или понятие. Задание сопровождается системой баллов по подсказкам.',
  },
  {
    title: 'Конкурс 5. «Определи пословицу и поговорку»',
    description:
      'Участники расшифровывают пословицы и поговорки, записанные почти научным языком.',
  },
  {
    title: 'Конкурс 6. «Экспериментальный»',
    description:
      'Команды собирают модель кровообращения и модель легких, после чего подводятся общие итоги.',
  },
];

const funnyAnatomyPrompts = [
  'Кто целый век в клетке сидит?',
  'В какую сеть нельзя поймать рыбу?',
  'Какое дерево растёт в легких?',
  'Сколько костей входит в состав человека?',
  'Какой узел нельзя развязать?',
];

const organRound = [
  'Желудок',
  'Трахея',
  'Желчный пузырь',
  'Продолговатый мозг',
  'Эритроцит',
  'Витамины',
];

const proverbRound = [
  'Заблудился в трех соснах',
  'Сердцу не прикажешь',
  'Собака лает, ветер носит',
  'Сколько волка ни корми, он все равно в лес смотрит',
  'Комар носа не подточит',
  'Работа не волк, в лес не убежит',
];

const BioLabPage = () => {
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
            <FlaskConical className="h-5 w-5 text-kaleo-terracotta" />
            <span className="font-body text-xs uppercase tracking-[0.18em] text-kaleo-terracotta">
              Экскурсия
            </span>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl text-kaleo-earth md:text-5xl">
            Биологическая лаборатория
          </h1>
          <p className="mt-5 max-w-4xl font-body text-base leading-relaxed text-kaleo-earth/80">
            Практико-ориентированное занятие для развития устойчивого познавательного интереса к
            биологии, закрепления теоретических знаний и вовлечения учащихся в командную работу.
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
                Документ с полным сценарием занятия доступен для скачивания в формате Word.
              </p>
            </div>
            <a
              href={withBase(material.href)}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-kaleo-terracotta/40 bg-kaleo-sand px-5 py-3 font-body text-xs uppercase tracking-[0.14em] text-kaleo-earth transition-colors hover:border-kaleo-terracotta hover:bg-kaleo-terracotta/10"
            >
              <ArrowDownToLine className="h-4 w-4 text-kaleo-terracotta" />
              {material.label}
            </a>
          </div>
        </article>

        <div className="mt-8 grid gap-4 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:grid-cols-4">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Формат</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Командная биологическая игра</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Цель</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Развитие интереса к биологии</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Оборудование</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Презентация, задания, пропуски</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Команды</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">2 группы учащихся</p>
          </div>
        </div>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Цель и задачи</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">
            Цель занятия: развитие устойчивого познавательного интереса к предмету биологии.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            <li>Закрепление теоретических знаний в практической деятельности.</li>
            <li>Расширение словарного запаса биологических терминов и выражений.</li>
            <li>Развитие коммуникативных и творческих способностей учащихся.</li>
            <li>Формирование уважения к изучаемым естественнонаучным дисциплинам.</li>
          </ul>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Структура занятия</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {gameStages.map((stage) => (
              <div key={stage.title} className="rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
                <h3 className="font-display text-2xl text-kaleo-earth">{stage.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-kaleo-earth/80">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Разминка для команд</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
              <h3 className="font-display text-2xl text-kaleo-earth">Команда I</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
                {warmupQuestions.teamOne.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
              <h3 className="font-display text-2xl text-kaleo-earth">Команда II</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
                {warmupQuestions.teamTwo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Гистология</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">
            Команды рассматривают 5 микропрепаратов тканей человека и записывают названия в
            соответствии с номерами препаратов.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {microscopyAnswers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
            <h2 className="font-display text-3xl text-kaleo-earth">Забавная анатомия</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
              {funnyAnatomyPrompts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
            <h2 className="font-display text-3xl text-kaleo-earth">Угадай орган</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
              {organRound.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Пословицы и поговорки</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">
            Финальный блок предлагает участникам расшифровать привычные выражения, записанные
            научным языком.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {proverbRound.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default BioLabPage;
