import { ArrowLeft, Leaf } from 'lucide-react';
import { withBase } from '../lib/paths';

const safetyRules = [
  'Не отклоняйтесь от намеченного маршрута без разрешения учителя.',
  'Не отставайте от группы. В случае отставания срочно свяжитесь с учителем по дежурному телефону.',
  'Не предпринимайте действий, которые могут причинить ущерб вашему здоровью и здоровью одноклассников.',
  'Не берите с собой острые, колющие и взрывоопасные предметы.',
  'Вовремя предупреждайте учителя и его помощников о плохом самочувствии.',
  'В случае обнаружения угрозы вашей безопасности и безопасности других участников экскурсии сразу сообщите об этом учителю.',
  'Выполняйте требования и рекомендации учителя и его помощников в обязательном порядке.',
];

const tasks = [
  'Отметьте погодные условия (облачность, направление и силу ветра, температуру воздуха) и запишите 3 приметы весны. При необходимости используйте прогноз погоды.',
  'Определите тип леса и основные лесообразующие породы. По каким признакам отличают деревья, кустарники и травы?',
  'Запишите по 3 представителя растений: деревья и кустарники.',
  'Укажите названия 5 травянистых растений, которые обитают на территории школы.',
  'Определите жизненные формы, доминирующие в сообществе. Сколько ярусов в лесу? Какие растения относятся к каждому ярусу?',
  'Обратите внимание на цветение растений и заполните таблицу для 4-6 растений: название, цветки, однодомное/двудомное растение, способ опыления.',
  'Какие приспособления к опылению есть у наблюдаемых растений?',
  'Чем первоцветы отличаются от других растений? Благодаря чему возможно их раннее цветение?',
  'Какую окраску имеют цветки первоцветов и о чем это говорит?',
  'Одинаковые ли виды растений обитают на опушке леса и в глубине?',
  'Каких животных вы встретили? Укажите название, группу, поведение и ярус наблюдения.',
];

const additionalQuestions = [
  {
    question:
      'Эти вещества открыты в 1928 году советским учёным Токиным. Их много выделяют хвойные, однако чемпионом является можжевельник.',
    answer: 'Фитонциды.',
  },
  {
    question:
      'Эти растения называют «артиллеристами». Назовите их и объясните, почему они так называются. Приведите три примера.',
    answer:
      'Растения, семена которых распространяются саморазбрасыванием: кислица, фиалка, недотрога, бешеный огурец.',
  },
  {
    question:
      'Почему дрова, заготовленные зимой, ценятся больше, чем заготовленные летом?',
    answer: 'Зимой деревья не впитывают влагу, поэтому древесина суше.',
  },
  {
    question:
      'Плод этого растения называют «ягодой пяти вкусов»: оболочка сладкая, мякоть кислая, семена горькие и терпкие, а лекарство становится солёным.',
    answer: 'Лимонник китайский.',
  },
  {
    question: 'Сделайте фото или рисунок понравившегося участка природы.',
    answer: 'Творческое задание.',
  },
];

const ExcursionSpringPage = () => {
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
            <Leaf className="h-5 w-5 text-kaleo-terracotta" />
            <span className="font-body text-xs uppercase tracking-[0.18em] text-kaleo-terracotta">
              Экскурсия
            </span>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl text-kaleo-earth md:text-5xl">
            Живые организмы весной в различных экосистемах
          </h1>
          <p className="mt-5 max-w-4xl font-body text-base leading-relaxed text-kaleo-earth/80">
            Цель урока: познакомиться с многообразием цветковых растений, особенностями строения и
            местообитания, с весенними явлениями в растительном мире.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:grid-cols-4">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Место</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Экологическая тропа</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Время</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Март</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Длительность</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">45 минут</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">Оборудование</p>
            <p className="mt-2 font-body text-sm text-kaleo-earth">Блокноты, карандаши, градусник, лупы</p>
          </div>
        </div>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">I. Правила безопасного поведения</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {safetyRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ol>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">II. Ход экскурсии</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ol>

          <div className="mt-6 rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
            <h3 className="font-display text-2xl text-kaleo-earth">Таблица наблюдений по ярусам</h3>
            <table className="mt-4 w-full border-collapse overflow-hidden rounded-lg text-left font-body text-sm">
              <thead>
                <tr className="bg-kaleo-earth/10">
                  <th className="px-3 py-2">Ярус</th>
                  <th className="px-3 py-2">Растения</th>
                </tr>
              </thead>
              <tbody>
                {['I', 'II', 'III', 'IV', 'V'].map((tier) => (
                  <tr key={tier} className="border-t border-kaleo-earth/10">
                    <td className="px-3 py-2 align-top">{tier}.</td>
                    <td className="px-3 py-2">______________________________</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">III. Вывод</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">
            Какие изменения происходят с растениями весной? Каковы основные местообитания растений?
            Случайно ли в одном сообществе живут разные растения? Какую роль в жизни растений играют
            животные, обитающие рядом?
          </p>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Дополнительные вопросы</h2>
          <div className="mt-5 space-y-4">
            {additionalQuestions.map((item, index) => (
              <details key={index} className="rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
                <summary className="cursor-pointer font-body text-sm leading-relaxed text-kaleo-earth">
                  {index + 1}. {item.question}
                </summary>
                <p className="mt-3 font-body text-sm text-kaleo-earth/80">
                  <span className="font-semibold">Ответ:</span> {item.answer}
                </p>
              </details>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default ExcursionSpringPage;
