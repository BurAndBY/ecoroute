import { ArrowLeft, Snowflake } from 'lucide-react';
import { withBase } from '../lib/paths';

const prepText =
  'Учитель определяет место проведения экскурсии и маршрут так, чтобы его можно было использовать и для других сезонных наблюдений. Это позволяет отслеживать сезонные изменения на одних и тех же объектах. Педагог готовит маршрутные листы для групповых и индивидуальных наблюдений, продумывает деление на группы и правила безопасного поведения. Одежда и обувь учащихся должны соответствовать погодным условиям.';

const tasks = [
  'Знакомство с правилами поведения на экскурсии, инструктаж по технике безопасности (беседа).',
  'Назовите ассоциации со словом «зима». Учащиеся с одинаковыми ассоциациями формируют группы.',
  'В начале экскурсии зафиксируйте дату, время, погодные условия и особые явления природы.',
  'Наблюдение за зимним состоянием растений: безлистность, покой, распространение семян, зимующие плоды, определение деревьев по почкам, коре и силуэту.',
  'Группы получают одинаковые задания на разных участках территории. На выполнение — 25 минут. Маршрутный лист заполняет каждый учащийся.',
  'Группы представляют результаты (5 минут).',
  'Подведение итогов: подсчёт всех наблюдавшихся объектов живой природы, обсуждение общих находок и объяснение народных изречений о феврале.',
];

const routeSheetTasks = [
  'Заполните таблицу наблюдений: дата, время, температура, ветер, облачность, осадки/особые явления.',
  'Понаблюдайте за участком: какие изменения произошли зимой, как выглядят растения.',
  'Рассмотрите отдельно растущие деревья и кустарники: зарисуйте силуэты, определите виды и подпишите.',
  'Рассмотрите ветки каштана или тополя: расположение почек и их признаки.',
  'Есть ли на участке животные? Какие это животные, чем заняты, к какой группе относятся (позвоночные/беспозвоночные, теплокровные/холоднокровные).',
  'Каких птиц вы встретили на экскурсии? Чем они заняты?',
  'Рассмотрите рисунки/фото и определите птиц, подпишите названия.',
  'Часто ли встречаются эти птицы, чем питаются и как им помочь зимой?',
  'Измерьте глубину снега у забора, на открытом месте и под деревьями. Сравните данные и объясните различия.',
  'Выберите участок, не затоптанный людьми. Что видно на снегу?',
  'Зарисуйте найденные следы, сравните с фото в интернете и определите животных.',
  'Сделайте вывод, как живые организмы приспособлены к перенесению неблагоприятных зимних условий.',
];

const proverbs = [
  'Февраль - месяц лютый, спрашивает, как обутый.',
  'Февраль и теплом приласкает, и морозом отдубасит.',
  'Февральская оттепель ничего не стоит.',
];

const ExcursionWinterPage = () => {
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
            <Snowflake className="h-5 w-5 text-kaleo-terracotta" />
            <span className="font-body text-xs uppercase tracking-[0.18em] text-kaleo-terracotta">
              Экскурсия
            </span>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl text-kaleo-earth md:text-5xl">
            Живые организмы зимой
          </h1>
          <p className="mt-5 max-w-4xl font-body text-base leading-relaxed text-kaleo-earth/80">
            Создать условия для формирования умений наблюдать взаимосвязи организмов в живой
            природе, находить доказательства влияния условий среды на живой организм; способствовать
            развитию наблюдательности, воспитанию бережного отношения к природе, любви к природе
            родного края; содействовать проявлению заботы о растениях и животных зимой.
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
            <p className="mt-2 font-body text-sm text-kaleo-earth">Конец января — начало февраля</p>
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
          <h2 className="font-display text-3xl text-kaleo-earth">Цель и задачи</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            <li>Познакомить с особенностями жизнедеятельности растений и животных в зимний период.</li>
            <li>Актуализировать знания о видовом составе растений.</li>
            <li>Создать условия для развития памяти, внимания и воображения.</li>
            <li>Содействовать формированию самостоятельной познавательной деятельности.</li>
          </ul>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Подготовка к экскурсии</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-kaleo-earth/85">{prepText}</p>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Ход работы</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ol>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Маршрутный лист</h2>
          <p className="mt-3 font-body text-sm text-kaleo-earth/80">ФИ: ________________________</p>

          <div className="mt-4 rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60 p-4">
            <table className="w-full border-collapse overflow-hidden rounded-lg text-left font-body text-sm">
              <thead>
                <tr className="bg-kaleo-earth/10">
                  <th className="px-3 py-2">Дата</th>
                  <th className="px-3 py-2">Время</th>
                  <th className="px-3 py-2">Температура</th>
                  <th className="px-3 py-2">Ветер</th>
                  <th className="px-3 py-2">Облачность</th>
                  <th className="px-3 py-2">Осадки/явления</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-kaleo-earth/10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <td key={i} className="px-3 py-3">__________</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <ol className="mt-5 list-decimal space-y-3 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {routeSheetTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ol>
        </article>

        <article className="mt-8 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream p-6 md:p-8">
          <h2 className="font-display text-3xl text-kaleo-earth">Народные изречения о феврале</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm leading-relaxed text-kaleo-earth/85">
            {proverbs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default ExcursionWinterPage;
