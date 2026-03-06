import { ArrowLeft, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import { stationsGridConfig } from '../config';

interface StationPageProps {
  stationId: number;
}

interface StationTaskItem {
  id: number;
  question: string;
  text: string;
  images: string[];
}

const stationOnePlants = [
  {
    id: 1,
    name: 'Лиственница европейская (Larix)',
    image: '/pril/1.jpg',
    imageAlt: 'Лиственница европейская',
    figure: 'Рисунок Б.1 - Лиственница европейская',
    details: [
      'Семейство: Сосновые',
      'Тип растения: древесное',
      'Отношение к свету: светолюбивое',
      'Отношение к влаге: предпочитает умеренное увлажнение',
      'Зимовка: зимостойкое',
      'Почва: предпочитает садовые почвы',
      'Высота: высокое дерево (более 3 м), среднерослое дерево или кустарник (1-2 м)',
      'Ценность в культуре: хвойное',
    ],
    text: 'Larix, Лиственница. Однодомные хвойные деревья с опадающей на зиму хвоей. В молодости с четкой конусовидной кроной, в старости - широко распростертой. Ветвление редкое, сквозистое.',
  },
  {
    id: 2,
    name: 'Ель европейская (Picea)',
    image: '/pril/2.jpg',
    imageAlt: 'Ель европейская',
    figure: 'Рисунок Б.2 - Ель европейская',
    details: [
      'Семейство: Сосновые',
      'Тип растения: древесное',
      'Отношение к свету: теневыносливое',
      'Отношение к влаге: предпочитает умеренное увлажнение',
      'Зимовка: зимостойкое',
      'Почва: кальцефоб (плохо растет на почвах, богатых известью)',
      'Высота: высокое дерево (более 3 м), среднерослое дерево или кустарник (1-2 м), низкорослый кустарник (до 1 м)',
      'Ценность в культуре: хвойное',
    ],
    text: 'Picea, Ель, елка. Хвойное, вечнозеленое однодомное, ветроопыляемое растение. Шишки созревают в год образования и после вылета семян на некоторое время остаются на дереве. Опыление происходит одновременно с распусканием вегетативных почек. Латинское название происходит от слова pix - "смола" и обусловлено смолистостью древесины. Древесина широко используется в промышленности благодаря мягкости и отсутствию ядра.',
  },
  {
    id: 3,
    name: 'Туя западная (Thuja)',
    image: '/pril/3.jpg',
    imageAlt: 'Туя западная',
    figure: 'Рисунок Б.3 - Туя западная',
    details: [
      'Семейство: Кипарисовые',
      'Тип растения: древесное',
      'Отношение к свету: теневыносливое, светолюбивое',
      'Отношение к влаге: влаголюбивое, предпочитает умеренное увлажнение, засухоустойчивое',
      'Зимовка: зимостойкое, зимует с укрытием',
      'Почва: предпочитает садовые почвы',
      'Сроки цветения: весна-лето (май-июнь)',
      'Высота: среднерослое дерево или кустарник (1-2 м), низкорослый кустарник (до 1 м)',
      'Ценность в культуре: хвойное',
    ],
    text: 'Thuja, Туя. Однодомные небольшие деревья, реже кустарники. Ветви ветвятся в одной горизонтальной плоскости. Молодые побеги сильно сплюснутые. У молодых особей хвоинки игловидные, они постепенно опадают, заменяясь чешуевидной. Шишки 7-13 мм длиной, яйцевидно-продолговатые, расположены на концах побегов.',
    extra:
      'Туя западная (Thuja occidentalis) - вечнозеленое однодомное дерево, часто кустовидное, высотой до 12-20 м. Крона густая и компактная: в молодом возрасте обычно яйцевидная, затем пирамидальная, часто опускается до земли. Хвоя чешуевидная, темно-зеленая, ароматная при распускании, зимой приобретает буроватый оттенок. Шишки мелкие (1-1,5 см), из 3-6 пар тонких чешуй, созревают осенью в год цветения. В период плодоношения крона имеет неопрятный вид, поэтому в озеленении ценятся формы, дающие мало шишек или вовсе стерильные. Растение имеет множество сортов и декоративных форм, отличающихся формой кроны (коническая, плакучая, пирамидальная, шаровидная) и окраской хвои (зеленой, желтой, пестрой, серебристой).',
  },
];

const stationTwoPlants = [
  {
    id: 1,
    name: 'Цинерария (Cineraria)',
    image: '/pril/4.jpg',
    imageAlt: 'Цинерария',
    figure: 'Рисунок В.1 - Цинерария (4.jpg)',
    details: [
      'Семейство: Астровые или Сложноцветные',
      'Тип растения: двулетник или летник',
      'Отношение к свету: светолюбивое',
      'Отношение к влаге: засухоустойчивое',
      'Почва: предпочитает садовые почвы',
      'Высота: низкое (10-50 см)',
      'Ценность в культуре: декоративнолиственное',
    ],
    text: 'Цинерария, крестовник. Многолетнее декоративно-лиственное растение. Листья серебристо-белые, густо опушенные.',
    extra:
      'Распространены сорта: Cirrhus (Cirrus) — растения высотой 45 см, с неразрезными, овальными с зубчатыми краями листьями серебристо-зеленой окраски (с возрастом меняется на серебристо-белую), и Silver Dust — растения низенькие, до 25 см, компактные.',
  },
  {
    id: 2,
    name: 'Примула, первоцвет (Primula)',
    image: '/pril/5.jpg',
    imageAlt: 'Примула весенняя',
    figure: 'Рисунок В.2 - Примула весенняя (5.jpg)',
    details: [
      'Семейство: Первоцветные',
      'Тип растения: многолетник',
      'Отношение к свету: теневыносливое, светолюбивое',
      'Отношение к влаге: предпочитает умеренное увлажнение',
      'Зимовка: зимостойкое',
      'Почва: предпочитает садовые почвы',
      'Сроки цветения: весна (апрель-май)',
      'Высота: низкое (10-50 см)',
      'Ценность в культуре: красивоцветущее, съедобное, лекарственное',
    ],
    text: 'Примула, первоцвет. Многолетние корневищные травянистые растения, с розеткой прикорневых простых листьев, по краю зубчатых или лопастных. Цветки яркой окраски, как однотонной, так и двухцветной, часто с глазком, собраны в зонтичные, головчатые или реже мутовчатые соцветия. Цветочные стебли безлистные. Плод — коробочка. Семена мелкие, шаровидные или цилиндрические, темно-коричневые.',
    extra:
      'Соцветие примулы весенней по форме напоминает связку ключей. Поэтому одно из народных названий растения — «ключики». В Европе его также называют «ключи апостола Петра».',
  },
  {
    id: 3,
    name: 'Петуния (Petunia)',
    image: '/pril/6.jpg',
    imageAlt: 'Петуния мультифлора',
    figure: 'Рисунок В.3 - Петуния мультифлора (6.jpg)',
    details: [
      'Семейство: Пасленовые',
      'Тип растения: двулетник или летник',
      'Отношение к свету: теневыносливое, светолюбивое',
      'Отношение к влаге: засухоустойчивое',
      'Зимовка: в средней полосе не зимует',
      'Почва: предпочитает садовые почвы',
      'Сроки цветения: май-октябрь',
      'Высота: низкое (10-50 см)',
      'Ценность в культуре: красивоцветущее',
    ],
    text: 'Мультифлора или многоцветковые петунии (Multiflora) — группа компактных растений высотой 20-25 см, обильно покрытых цветами диаметром 4-5 см (простыми или махровыми).',
    extra:
      'Представители этой группы устойчивы к неблагоприятным погодным условиям, рано зацветают, отличаются обильным цветением и подходят как для цветников в открытом грунте, так и для контейнеров.',
  },
  {
    id: 4,
    name: 'Агератум (Ageratum)',
    image: '/pril/7.jpg',
    imageAlt: 'Агератум Голубая норка',
    figure: 'Рисунок В.4 - Агератум Голубая норка (7.jpg)',
    details: [
      'Тип растения: двулетник или летник',
      'Отношение к свету: светолюбивое',
      'Отношение к влаге: предпочитает умеренное увлажнение',
      'Зимовка: в средней полосе не зимует',
      'Почва: предпочитает садовые почвы',
      'Сроки цветения: май-октябрь',
      'Высота: низкое (10-50 см)',
      'Ценность в культуре: красивоцветущее',
    ],
    text: 'Агератум ценится за продолжительное и обильное цветение, образует плотные куртины и хорошо подходит для оформления бордюров и клумб.',
  },
  {
    id: 5,
    name: 'Тагетес прямостоячий, бархатцы прямостоячие (Tagetes erecta)',
    image: '/pril/8.jpg',
    imageAlt: 'Бархатцы прямостоячие',
    figure: 'Рисунок В.5 - Бархатцы прямостоячие (8.jpg)',
    details: [
      'Тип растения: однолетник',
      'Высота: 70-80 см',
      'Диаметр соцветий: 6-12 см',
      'Окраска: лимонная, желтая или оранжевая',
    ],
    text: 'Бархатцы, тагетес. Растение с прочными ветвистыми прямостоячими стеблями. Листья рассеченные, с пильчатым краем. Соцветия — одиночные корзинки разнообразной формы, диаметром от 2 до 12 см.',
    extra: 'Цветение продолжается с июня до заморозков.',
  },
];

const stationThreePhotos = [
  {
    id: 1,
    image: '/kuvshinka.jpg',
    imageAlt: 'Пруд Кувшинка',
    figure: 'Пруд «Кувшинка» (kuvshinka.jpg)',
  },
  {
    id: 2,
    image: '/kuvshinka2.jpg',
    imageAlt: 'Пруд Кувшинка, вид 2',
    figure: 'Пруд «Кувшинка», второй вид (kuvshinka2.jpg)',
  },
];

const stationFourPhotos = [
  {
    id: 1,
    image: '/pril/9.jpg',
    imageAlt: 'Станция 4 Исследовательская Найди себя',
  },
  {
    id: 2,
    image: '/pril/10.jpg',
    imageAlt: 'Станция 4 Исследовательская Найди себя, второй вид',
  },
];

const stationOneTasks = [
  {
    id: 1,
    question: 'Как изменится корневая система сосны, растущей на болоте?',
    text: 'У сосны на болоте корневая система становится более мочковатой: корни занимают большую площадь, но уходят неглубоко. Это помогает удерживаться на неплотной болотистой почве.',
    images: ['/hvoinaya/image1.jpeg'],
  },
  {
    id: 2,
    question: 'Почему при бронхите рекомендуют прогулки в хвойном лесу?',
    text: 'Хвойные растения выделяют фитонциды — вещества с бактерицидным действием, которые благоприятно влияют на дыхательную систему.',
    images: [],
  },
  {
    id: 3,
    question: 'Почему сосна обыкновенная относится к голосеменным и почему отдел называют хвойными?',
    text: 'К голосеменным сосна относится из-за особенностей строения и расположения семян. Название «хвойные» связано с особенностями строения листьев (хвои).',
    images: ['/hvoinaya/image2.jpeg', '/hvoinaya/image3.jpeg'],
  },
  {
    id: 4,
    question: 'В чем польза отваров из хвои, которые применяли в военное время?',
    text: 'Иглица хвои содержит витамин C. Отвар использовали для профилактики цинги и поддержания иммунитета.',
    images: ['/hvoinaya/image4.jpeg'],
  },
];

const stationTwoTasks = [
  {
    id: 1,
    question:
      'Порассуждайте, как взаимосвязана природная красота цветка и его основные функции.',
    text: 'Яркая окраска и аромат цветка служат для привлечения опылителей, что напрямую связано с функцией полового размножения.',
    images: ['/kaplya/image1.jpeg'],
  },
  {
    id: 2,
    question:
      'Почему дачники часто высаживают бархатцы рядом с белокочанной капустой?',
    text: 'Резкий запах бархатцев (фитонциды и тиофен) отпугивает вредителей капусты: белянку, минирующую моль, тлю и других насекомых.',
    images: ['/kaplya/image2.jpeg'],
  },
  {
    id: 3,
    question:
      'Какие растения чаще всего вызывают аллергию? Приведите примеры.',
    text: 'Чаще аллергию вызывают ветроопыляемые растения, так как их пыльца массово попадает в воздух: например, дуб, вяз, клен и другие.',
    images: ['/kaplya/image3.jpeg'],
  },
  {
    id: 4,
    question:
      'Запишите в таблицу недостающие фрагменты (по признакам покрытосеменных).',
    text: 'Ориентир для заполнения: однодольные обычно имеют мочковатую корневую систему и дуговое/параллельное жилкование; двудольные — стержневую корневую систему и сетчатое жилкование.',
    images: [],
  },
  {
    id: 5,
    question:
      'Вспомните, где в Беларуси производят минеральные удобрения (азотные, фосфорные, калийные), и внесите примеры в таблицу.',
    text: 'В качестве примеров можно указывать крупные предприятия химической промышленности Беларуси по выпуску соответствующих удобрений.',
    images: ['/kaplya/image4.jpeg'],
  },
  {
    id: 6,
    question:
      'Какое растение в XIX веке сначала считалось декоративным и ядовитым, а позже стало массовой пищевой культурой?',
    text: 'Картофель.',
    images: ['/kaplya/image5.jpeg'],
  },
];

const stationThreeTasks = [
  {
    id: 1,
    question:
      'Какими способами и посредством каких органов чувств рыбы ориентируются и находят пищу?',
    text: 'Рыбы используют зрение (глаза), боковую линию, внутреннее ухо, органы равновесия, обоняние, вкус, а также рецепторы давления и другие чувствительные рецепторы. Это позволяет воспринимать движение воды, положение тела, запахи и свойства среды.',
    images: ['/prud/image1.png'],
  },
  {
    id: 2,
    question: 'Какую роль в жизни рыб играет слизь, выделяемая кожными железами?',
    text: 'Слизь выполняет защитную функцию (в том числе бактерицидную) и уменьшает трение при плавании.',
    images: ['/prud/image2.png'],
  },
  {
    id: 3,
    question:
      'В каком органе находятся рецепторы, с помощью которых мальки воспринимают сигнал родителя?',
    text: 'Сигнал воспринимается рецепторами боковой линии (механорецепторами, включая рецепторы давления).',
    images: ['/prud/image3.png'],
  },
  {
    id: 4,
    question:
      'Как изменится объём плавательного пузыря при всплытии и что произойдёт с рыбой? Как всплывают/погружаются рыбы без плавательного пузыря?',
    text: 'При всплытии давление воды уменьшается, поэтому объём плавательного пузыря увеличивается. Рыбу сильнее выталкивает к поверхности, её удельный вес уменьшается. Рыбы без плавательного пузыря регулируют положение в воде за счёт мускульной работы и плавников.',
    images: ['/prud/image4.png'],
  },
  {
    id: 5,
    question:
      'Как лягушки компенсируют меньшее развитие лёгких и почему жабы могут дольше находиться вне воды?',
    text: 'Лягушки дополнительно дышат через влажную кожу. У жаб кожа суше и лучше защищает от высыхания, а лёгкие развиты сильнее. Низкий обмен веществ у амфибий связан с менее эффективным снабжением тканей кислородом.',
    images: ['/prud/image5.jpeg'],
  },
  {
    id: 6,
    question: 'Названия каких рыб совпадают с названиями русских городов?',
    text: 'Калуга, Елец, Судак.',
    images: ['/prud/image6.png', '/prud/image7.png', '/prud/image8.jpeg'],
  },
];

const stationFourExperiments = [
  {
    id: 1,
    title: 'Эксперимент 1. Состав почвы',
    goal: 'Изучить состав почвы.',
    result:
      'При нагревании почвы выявляются вода и органические вещества, после прокаливания остаются минеральные частицы (например, песок и глина). На месте костра почва становится бедной из-за выгорания питательных веществ.',
    image: '/issled/image1.jpeg',
  },
  {
    id: 2,
    title: 'Эксперимент 2. Какой газ выделяет растение на свету',
    goal: 'Установить, что при фотосинтезе растение выделяет кислород.',
    result:
      'При освещении растение выделяет кислород, что подтверждается классическим опытом с лучинкой/накоплением газа.',
    image: '',
  },
  {
    id: 3,
    title: 'Эксперимент 3. Функция корней',
    goal: 'Доказать, что корни всасывают воду.',
    result:
      'Через несколько дней уровень воды снижается: это подтверждает всасывание воды корнями.',
    image: '/issled/image3.png',
  },
  {
    id: 4,
    title: 'Эксперимент 4. Функция стебля',
    goal: 'Доказать, что вода в стебле продвигается по древесине.',
    result:
      'После подкрашивания воды окрашиваются жилки листьев и проводящие ткани: вода поднимается по древесине.',
    image: '/issled/image4.jpeg',
  },
  {
    id: 5,
    title: 'Эксперимент 5. Дышат ли прорастающие семена?',
    goal: 'Доказать, что прорастающие семена выделяют углекислый газ.',
    result:
      'Горящая спичка гаснет в сосуде с прорастающими семенами, что указывает на накопление CO2.',
    image: '/issled/image5.jpeg',
  },
];

const stationAdditionalTasks: Record<number, StationTaskItem[]> = {
  5: [
    {
      id: 1,
      question: 'Дуб: однодомное или двудомное растение? Способ опыления? Желуди — плод или семя?',
      text: 'Дуб — однодомное растение. Основной способ опыления — анемофилия (ветроопыление). Желудь — это плод.',
      images: ['/dubki/image1.jpeg', '/dubki/image2.jpeg'],
    },
    {
      id: 2,
      question: 'Найдите ошибки в тексте о камбии и годичных кольцах дуба.',
      text: 'Ключевые исправления: речь идет о камбии; к древесине обычно образуется больше клеток; ранняя древесина имеет более широкие просветы и тонкие стенки; к лубу формируются элементы флоэмы (ситовидные трубки и др.).',
      images: ['/dubki/image3.jpeg'],
    },
    {
      id: 3,
      question: 'Кто из органов растения важнее: корень, стебель, лист, цветок или плод?',
      text: 'Правильный вывод: растение — целостный организм. Все органы взаимосвязаны, и нарушение работы одного органа влияет на весь организм.',
      images: ['/dubki/image4.jpeg'],
    },
    {
      id: 4,
      question: 'О каком органе речь: «зачаточное растение», необходим для распространения по Земле»?',
      text: 'Семя.',
      images: ['/dubki/image5.jpeg'],
    },
    {
      id: 5,
      question: 'О каком овоще идет речь (лат. caput — «голова»)?',
      text: 'Капуста.',
      images: ['/dubki/image6.jpeg'],
    },
  ],
  6: [
    {
      id: 1,
      question: 'Почему у березы сережки и пыльца появляются раньше листьев?',
      text: 'Береза ветроопыляема: образуется много пыльцы, а отсутствие листьев уменьшает препятствия для переноса пыльцы ветром.',
      images: ['/berezovaya/image1.jpeg'],
    },
    {
      id: 2,
      question: 'Почему семена фасоли, полностью залитые водой, не проросли?',
      text: 'Из-за дефицита кислорода зародыши не могли нормально дышать. Неприятный запах вызван развитием гнилостных бактерий и их метаболитами.',
      images: ['/berezovaya/image2.jpeg'],
    },
    {
      id: 3,
      question: 'Что такое «тополиный пух» и зачем волоски на семенах?',
      text: '«Тополиный пух» — это семена тополя с волосками, которые помогают распространению. Семена формируются на женских растениях.',
      images: ['/berezovaya/image3.jpeg'],
    },
    {
      id: 4,
      question: 'Лещина: способ опыления, признаки и однодомность/двудомность.',
      text: 'Лещина опыляется ветром. Этому способствуют сережки и выступающие рыльца, а также отсутствие листьев в период опыления. Растение однодомное.',
      images: ['/berezovaya/image4.jpeg'],
    },
    {
      id: 5,
      question: 'Зачем в теплице у огурцов проводят ручное опыление?',
      text: 'В теплице ограничен доступ опылителей/ветра, поэтому опыление проводят вручную. Современные партенокарпические сорта могут плодоносить без опыления.',
      images: ['/berezovaya/image5.jpeg'],
    },
  ],
  7: [
    {
      id: 1,
      question: 'Определите птиц по описанию и назовите их отряды.',
      text: 'Голубь — Голубеобразные; воробей — Воробьинообразные; петух — Курообразные.',
      images: ['/kormushka/image1.jpeg', '/kormushka/image2.jpeg', '/kormushka/image3.jpeg'],
    },
    {
      id: 2,
      question: 'Сравнения с птицами: «щебечет как…», «воркует как…» и т.д.',
      text: 'Типичные ответы: воробей, голубь, гусь, ворона, дятел, индюк, лебедь.',
      images: [],
    },
    {
      id: 3,
      question: 'Почему куры плохо видят в сумерках, а совы хорошо?',
      text: 'У кур в сетчатке преобладают колбочки (дневное зрение), у сов — палочки (сумеречное/ночное зрение).',
      images: ['/kormushka/image4.jpeg', '/kormushka/image5.jpeg'],
    },
  ],
  8: [
    {
      id: 1,
      question: 'Почему дендропарк называют «живым музеем» и зачем он нужен?',
      text: 'Как музей, дендропарк сохраняет и систематизирует объекты, но здесь это живые растения. Цели: сохранение биоразнообразия, наука и экопросвещение.',
      images: ['/dendrariy_extra/image1.jpeg'],
    },
    {
      id: 2,
      question: 'Как образовано слово «arboretum»?',
      text: 'От латинского arbor (дерево) + суффикса, обозначающего место изобилия: буквально «место изобилия деревьев».',
      images: ['/dendrariy_extra/image2.jpeg'],
    },
    {
      id: 3,
      question: 'Почему редвуды могут достигать гигантской высоты?',
      text: 'Ключевые факторы: мягкий влажный климат, мощные корневые системы и рост в группах, уменьшающий влияние неблагоприятных условий.',
      images: ['/dendrariy_extra/image3.jpeg'],
    },
    {
      id: 4,
      question: 'Определите растения по фотографиям (наименьшая систематическая единица).',
      text: 'Примеры ответов: радужный эвкалипт, баобаб, «денежное дерево».',
      images: ['/dendrariy_extra/image4.jpeg', '/dendrariy_extra/image5.jpeg', '/dendrariy_extra/image6.jpeg'],
    },
    {
      id: 5,
      question: 'На какой высоте будет метка на осине через годы роста?',
      text: 'При апикальном росте ствол удлиняется верхушкой, поэтому старая метка на стволе остается примерно на прежней высоте.',
      images: ['/dendrariy_extra/image7.jpeg'],
    },
  ],
  9: [
    {
      id: 1,
      question: 'Для чего собирают плоды каштана и где их используют?',
      text: 'Использование: кулинария (съедобные виды), медицина, декоративно-прикладные цели и кормовые/хозяйственные задачи.',
      images: ['/aleya/image1.jpeg'],
    },
    {
      id: 2,
      question: 'Какую экологическую роль выполняет каштан?',
      text: 'Создает среду обитания, поддерживает биоразнообразие, участвует в формировании устойчивых городских и природных экосистем.',
      images: ['/aleya/image2.jpeg'],
    },
    {
      id: 3,
      question: 'Как отличить съедобный каштан от несъедобного?',
      text: 'Ориентируются по морфологическим признакам листьев и оболочки плода: у разных видов они заметно различаются.',
      images: ['/aleya/image3.jpeg', '/aleya/image4.jpeg'],
    },
    {
      id: 4,
      question: 'В чем лечебные свойства конского каштана?',
      text: 'Чаще отмечают венотонизирующее, противовоспалительное и сосудоукрепляющее действие препаратов на его основе.',
      images: ['/aleya/image5.jpeg'],
    },
    {
      id: 5,
      question: 'Как птицам помогает способность видеть ультрафиолет?',
      text: 'УФ-зрение помогает лучше распознавать партнера, искать пищу и ориентироваться в среде.',
      images: ['/aleya/image6.jpeg'],
    },
  ],
  10: [
    {
      id: 1,
      question: 'Легенда о цветке-зонтике у степных гномиков. О каком цветке речь?',
      text: 'Ромашка.',
      images: ['/peyzazh_extra/image1.jpeg'],
    },
    {
      id: 2,
      question: 'Цветок, имя которого связано с возвращением памяти.',
      text: 'Незабудка.',
      images: ['/peyzazh_extra/image2.jpeg'],
    },
    {
      id: 3,
      question: 'Из какого цветка был сделан яд в истории о Джульетте?',
      text: 'Лютик.',
      images: ['/peyzazh_extra/image3.jpeg'],
    },
    {
      id: 4,
      question: 'Когда по народным приметам расцветает цветок папоротника?',
      text: 'В ночь на Ивана Купалу (7 июля).',
      images: ['/peyzazh_extra/image4.jpeg'],
    },
    {
      id: 5,
      question: 'Название какого цветка переводится как «жемчуг» / «перламутр»?',
      text: 'Маргаритка.',
      images: ['/peyzazh_extra/image5.jpeg'],
    },
    {
      id: 6,
      question: 'Цветок-надежда из легенды про снежинки для Евы.',
      text: 'Подснежник.',
      images: ['/peyzazh_extra/image6.jpeg'],
    },
  ],
};

const stationFiveStatements = [
  'При отрицательных температурах клетки хвои ели сохраняют жизнеспособность.',
  'Хлоропласты в клетках хвои ели распределены равномерно при любой температуре.',
  'В тёплые дни количество клеток с неравномерным распределением хлоропластов не превышает 25%.',
  'С повышением температуры равномерность распределения хлоропластов в клетке возрастает.',
  'С понижением температуры хлоропласты во всех клетках хвои ели распределяются неравномерно.',
];

const StationPage = ({ stationId }: StationPageProps) => {
  const [selectedStatements, setSelectedStatements] = useState<number[]>([]);
  const [hasCheckedStatements, setHasCheckedStatements] = useState(false);
  const stations = stationsGridConfig.stations;
  const stationIndex = stations.findIndex((item) => item.id === stationId);
  const station = stationIndex >= 0 ? stations[stationIndex] : null;

  const toggleStatement = (value: number) => {
    setHasCheckedStatements(false);
    setSelectedStatements((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const expectedStatements = [3, 4];
  const hasExactMatch =
    selectedStatements.length === expectedStatements.length &&
    expectedStatements.every((value) => selectedStatements.includes(value));

  if (!station) {
    return (
      <main className="min-h-screen bg-kaleo-sand text-kaleo-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-kaleo-terracotta hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к маршруту
          </a>
          <div className="mt-10 rounded-2xl bg-kaleo-cream p-8 shadow-soft">
            <h1 className="font-display text-headline">Станция не найдена</h1>
            <p className="mt-4 font-body text-kaleo-earth/75">
              Проверьте адрес страницы или вернитесь к списку станций.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const previousStation = stationIndex > 0 ? stations[stationIndex - 1] : null;
  const nextStation = stationIndex < stations.length - 1 ? stations[stationIndex + 1] : null;

  return (
    <main className="min-h-screen bg-kaleo-sand text-kaleo-earth">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-kaleo-charcoal/70 via-kaleo-charcoal/25 to-kaleo-charcoal/10" />
        <img
          src={station.image}
          alt={station.title}
          className="h-[65vh] w-full object-cover md:h-[72vh]"
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
            <a
              href="/"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-kaleo-cream/90 px-4 py-2 font-body text-xs uppercase tracking-[0.18em] text-kaleo-earth backdrop-blur-sm transition hover:bg-kaleo-cream"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться на главную
            </a>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-kaleo-cream/90 px-4 py-2 text-kaleo-earth backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-kaleo-terracotta" />
                <span className="font-body text-xs uppercase tracking-[0.15em]">
                  Станция {station.id}
                </span>
              </div>
              <h1 className="font-display text-headline text-kaleo-cream">{station.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-10">
            <p className="font-body text-lg leading-relaxed text-kaleo-earth/85 md:text-xl">
              {station.description}
            </p>
          </article>

          {station.id === 1 ? (
            <>
              <section className="mt-8 space-y-6">
                {stationOnePlants.map((plant) => (
                  <article key={plant.id} className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                    <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                      {plant.id}. {plant.name}
                    </p>

                    <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-kaleo-earth/85">
                      {plant.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <p className="mt-4 font-body text-base leading-relaxed text-kaleo-earth/90">{plant.text}</p>

                    {plant.extra ? (
                      <p className="mt-4 font-body text-base leading-relaxed text-kaleo-earth/90">
                        {plant.extra}
                      </p>
                    ) : null}

                    <figure className="mt-6 overflow-hidden rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60">
                      <img
                        src={plant.image}
                        alt={plant.imageAlt}
                        className="h-64 w-full object-cover md:h-80"
                      />
                      <figcaption className="px-4 py-3 font-body text-sm text-kaleo-earth/70">
                        {plant.figure}
                      </figcaption>
                    </figure>
                  </article>
                ))}
              </section>

              <section className="mt-8 space-y-6">
                {stationOneTasks.map((task) => (
                  <article key={task.id} className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                    <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                      Задание {task.id}
                    </p>
                    <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                      {task.question}
                    </p>

                    {task.images.length > 0 ? (
                      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {task.images.map((image) => (
                          <img
                            key={image}
                            src={image}
                            alt={`Иллюстрация к заданию ${task.id}`}
                            className="h-64 w-full rounded-xl border border-kaleo-earth/10 object-cover"
                          />
                        ))}
                      </div>
                    ) : null}

                    <details className="mt-4 rounded-xl border border-kaleo-earth/15 bg-kaleo-sand/50 p-4">
                      <summary className="cursor-pointer font-body text-sm text-kaleo-earth/80">
                        Показать ответ
                      </summary>
                      <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                        {task.text}
                      </p>
                    </details>
                  </article>
                ))}

                <article className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                  <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                    Задание 5
                  </p>
                  <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                    Выберите утверждения, которые можно сформулировать по таблице о распределении
                    хлоропластов в клетках хвои ели.
                  </p>
                  <img
                    src="/hvoinaya/image5.jpeg"
                    alt="Таблица для задания 5"
                    className="mt-4 max-h-[34rem] w-full rounded-xl border border-kaleo-earth/10 bg-white object-contain p-2"
                  />

                  <div className="mt-4 space-y-2">
                    {stationFiveStatements.map((statement, index) => {
                      const item = index + 1;
                      const isSelected = selectedStatements.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleStatement(item)}
                          className={`w-full rounded-xl border px-4 py-3 text-left font-body text-sm transition ${
                            isSelected
                              ? 'border-kaleo-terracotta bg-kaleo-terracotta/15 text-kaleo-earth'
                              : 'border-kaleo-earth/25 bg-kaleo-sand/40 text-kaleo-earth/80 hover:border-kaleo-earth/40'
                          }`}
                        >
                          <span className="font-semibold">{item}) </span>
                          {statement}
                        </button>
                      );
                    })}
                  </div>

                  <p className="mt-4 font-body text-sm text-kaleo-earth/70">
                    Выбрано: {selectedStatements.length > 0 ? selectedStatements.join(', ') : 'ничего'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setHasCheckedStatements(true)}
                    disabled={selectedStatements.length === 0}
                    className="mt-3 rounded-full border border-kaleo-earth/25 bg-kaleo-sand/40 px-4 py-2 font-body text-sm text-kaleo-earth/90 transition hover:border-kaleo-earth/40 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Проверить
                  </button>
                  {hasCheckedStatements ? (
                    <p className="mt-2 font-body text-sm text-kaleo-earth/80">
                      {hasExactMatch
                        ? 'Верно. Правильный ответ: 3, 4.'
                        : 'Пока неверно. Попробуйте ещё раз.'}
                    </p>
                  ) : null}
                </article>
              </section>
            </>
          ) : null}

          {station.id === 2 ? (
            <>
              <section className="mt-8 space-y-6">
                {stationTwoPlants.map((plant) => (
                  <article key={plant.id} className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                    <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                      {plant.id}. {plant.name}
                    </p>

                    <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-kaleo-earth/85">
                      {plant.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <p className="mt-4 font-body text-base leading-relaxed text-kaleo-earth/90">{plant.text}</p>

                    {plant.extra ? (
                      <p className="mt-4 font-body text-base leading-relaxed text-kaleo-earth/90">
                        {plant.extra}
                      </p>
                    ) : null}

                    <figure className="mt-6 overflow-hidden rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60">
                      <img
                        src={plant.image}
                        alt={plant.imageAlt}
                        className="h-64 w-full object-cover md:h-80"
                      />
                      <figcaption className="px-4 py-3 font-body text-sm text-kaleo-earth/70">
                        {plant.figure}
                      </figcaption>
                    </figure>
                  </article>
                ))}
              </section>

              <section className="mt-8 space-y-6">
                {stationTwoTasks.map((task) => (
                  <article key={task.id} className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                    <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                      Задание {task.id}
                    </p>
                    <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                      {task.question}
                    </p>

                    {task.images.length > 0 ? (
                      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {task.images.map((image) => (
                          <img
                            key={image}
                            src={image}
                            alt={`Иллюстрация к заданию ${task.id}`}
                            className="h-64 w-full rounded-xl border border-kaleo-earth/10 object-contain bg-white p-2"
                          />
                        ))}
                      </div>
                    ) : null}

                    <details className="mt-4 rounded-xl border border-kaleo-earth/15 bg-kaleo-sand/50 p-4">
                      <summary className="cursor-pointer font-body text-sm text-kaleo-earth/80">
                        Показать ответ
                      </summary>
                      <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                        {task.text}
                      </p>
                    </details>
                  </article>
                ))}
              </section>
            </>
          ) : null}

          {station.id === 3 ? (
            <>
              <section className="mt-8 space-y-6">
                {stationThreePhotos.map((photo) => (
                  <article key={photo.id} className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                    <figure className="overflow-hidden rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60">
                      <img
                        src={photo.image}
                        alt={photo.imageAlt}
                        className="h-72 w-full object-cover md:h-96"
                      />
                      <figcaption className="px-4 py-3 font-body text-sm text-kaleo-earth/70">
                        {photo.figure}
                      </figcaption>
                    </figure>
                  </article>
                ))}
              </section>

              <section className="mt-8 space-y-6">
                {stationThreeTasks.map((task) => (
                  <article key={task.id} className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                    <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                      Задание {task.id}
                    </p>
                    <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                      {task.question}
                    </p>
                    {task.images.length > 0 ? (
                      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {task.images.map((image) => (
                          <img
                            key={image}
                            src={image}
                            alt={`Иллюстрация к заданию ${task.id}`}
                            className="h-64 w-full rounded-xl border border-kaleo-earth/10 object-contain bg-white p-2"
                          />
                        ))}
                      </div>
                    ) : null}

                    <details className="mt-4 rounded-xl border border-kaleo-earth/15 bg-kaleo-sand/50 p-4">
                      <summary className="cursor-pointer font-body text-sm text-kaleo-earth/80">
                        Показать ответ
                      </summary>
                      <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                        {task.text}
                      </p>
                    </details>
                  </article>
                ))}
              </section>
            </>
          ) : null}

          {station.id === 4 ? (
            <>
              <section className="mt-8 space-y-6">
                <article className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {stationFourPhotos.map((photo) => (
                      <figure
                        key={photo.id}
                        className="overflow-hidden rounded-xl border border-kaleo-earth/10 bg-kaleo-sand/60"
                      >
                        <img
                          src={photo.image}
                          alt={photo.imageAlt}
                          className="h-72 w-full object-cover md:h-80"
                        />
                      </figure>
                    ))}
                  </div>
                  <figcaption className="mt-4 font-body text-sm text-kaleo-earth/70">
                    Рисунок 3.5 - Станция 4. Исследовательская «Найди себя» (9.jpg, 10.jpg)
                  </figcaption>
                </article>
              </section>

              <section className="mt-8 space-y-6">
                {stationFourExperiments.map((experiment) => (
                  <article
                    key={experiment.id}
                    className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8"
                  >
                    <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                      {experiment.title}
                    </p>
                    <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                      <span className="font-semibold">Цель:</span> {experiment.goal}
                    </p>

                    {experiment.image ? (
                      <img
                        src={experiment.image}
                        alt={`Иллюстрация: ${experiment.title}`}
                        className="mt-4 h-64 w-full rounded-xl border border-kaleo-earth/10 object-contain bg-white p-2"
                      />
                    ) : null}

                    <details className="mt-4 rounded-xl border border-kaleo-earth/15 bg-kaleo-sand/50 p-4">
                      <summary className="cursor-pointer font-body text-sm text-kaleo-earth/80">
                        Показать вывод
                      </summary>
                      <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                        {experiment.result}
                      </p>
                    </details>
                  </article>
                ))}
              </section>
            </>
          ) : null}

          {stationAdditionalTasks[station.id] ? (
            <section className="mt-8 space-y-6">
              {stationAdditionalTasks[station.id].map((task) => (
                <article key={task.id} className="rounded-2xl bg-kaleo-cream p-6 shadow-soft md:p-8">
                  <p className="font-body text-sm uppercase tracking-[0.12em] text-kaleo-terracotta">
                    Задание {task.id}
                  </p>
                  <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                    {task.question}
                  </p>
                  {task.images.length > 0 ? (
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {task.images.map((image) => (
                        <img
                          key={image}
                          src={image}
                          alt={`Иллюстрация к заданию ${task.id}`}
                          className="h-64 w-full rounded-xl border border-kaleo-earth/10 object-contain bg-white p-2"
                        />
                      ))}
                    </div>
                  ) : null}
                  <details className="mt-4 rounded-xl border border-kaleo-earth/15 bg-kaleo-sand/50 p-4">
                    <summary className="cursor-pointer font-body text-sm text-kaleo-earth/80">
                      Показать ответ
                    </summary>
                    <p className="mt-3 font-body text-base leading-relaxed text-kaleo-earth/90">
                      {task.text}
                    </p>
                  </details>
                </article>
              ))}
            </section>
          ) : null}

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {previousStation ? (
              <a
                href={`/stations/${previousStation.id}`}
                className="group rounded-2xl bg-kaleo-cream p-5 shadow-soft transition hover:shadow-deep"
              >
                <span className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">
                  Предыдущая
                </span>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-body text-sm text-kaleo-earth/70">Станция {previousStation.id}</p>
                    <p className="font-display text-2xl">{previousStation.title}</p>
                  </div>
                  <ChevronLeft className="h-5 w-5 text-kaleo-terracotta transition group-hover:-translate-x-1" />
                </div>
              </a>
            ) : (
              <div className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream/60 p-5">
                <p className="font-body text-sm text-kaleo-earth/50">Это первая станция маршрута.</p>
              </div>
            )}

            {nextStation ? (
              <a
                href={`/stations/${nextStation.id}`}
                className="group rounded-2xl bg-kaleo-cream p-5 shadow-soft transition hover:shadow-deep"
              >
                <span className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">
                  Следующая
                </span>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-body text-sm text-kaleo-earth/70">Станция {nextStation.id}</p>
                    <p className="font-display text-2xl">{nextStation.title}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-kaleo-terracotta transition group-hover:translate-x-1" />
                </div>
              </a>
            ) : (
              <div className="rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream/60 p-5">
                <p className="font-body text-sm text-kaleo-earth/50">Это последняя станция маршрута.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StationPage;
