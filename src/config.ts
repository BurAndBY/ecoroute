// Site-wide configuration
export interface SiteConfig {
  language: string;
  siteName: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "ru",
  siteName: "Войди в природу другом",
  siteDescription: "Интерактивная виртуальная экотропа для школьников и учителей",
};

// Navigation Buttons
export interface NavButton {
  label: string;
  href: string;
  icon?: string;
}

export interface NavigationConfig {
  buttons: NavButton[];
}

export const navigationConfig: NavigationConfig = {
  buttons: [
    { label: "Новости", href: "/news" },
    { label: "Чат-бот", href: "#chatbot" },
    { label: "Экскурсии и методические разработки", href: "#excursions" },
    { label: "Методичка", href: "#methodology" },
    { label: "Достижения", href: "#achievements" },
    { label: "Сотрудничество", href: "#cooperation" },
  ],
};

// Hero Section
export interface HeroConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  backgroundAlt: "Экотропа - природный образовательный маршрут",
  title: "Войди в природу другом",
  subtitle: "Интерактивная виртуальная экотропа для школьников и учителей",
};

// Narrative Text Section
export interface NarrativeTextConfig {
  line1: string;
  line2: string;
  line3: string;
}

export const narrativeTextConfig: NarrativeTextConfig = {
  line1: "Откройте для себя мир природы",
  line2: "10 уникальных станций ждут вас",
  line3: "Экотропа — это образовательный маршрут, где каждая станция рассказывает свою историю о природе, флоре и фауне. Пройдите этот путь вместе с нами.",
};

// Stations Grid Section
export interface Station {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface StationsGridConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  passportTitle: string;
  passportDescription: string;
  passportItems: { label: string; value: string }[];
  stations: Station[];
}

export const stationsGridConfig: StationsGridConfig = {
  sectionTitle: "Станции Экотропы",
  sectionSubtitle: "Выберите станцию для изучения",
  passportTitle: "Паспорт экологической тропы «Войди в природу другом»",
  passportDescription:
    "Маршрут объединяет учебные экскурсии, исследования и свободное посещение, сохраняя структуру полноценной полевой площадки прямо на территории гимназии.",
  passportItems: [
    { label: "Местонахождение", value: "Минская обл., Минский район, агр. Лесной" },
    { label: "Тип экологической тропы", value: "Учебная, пешеходная тропа" },
    { label: "Вид тропы", value: "Экологическая" },
    { label: "Время прохождения", value: "40 мин - 1 ч" },
    { label: "Количество станций", value: "10" },
    { label: "Режим пользования", value: "Учебные экскурсии, исследования, свободное посещение" },
    { label: "Дата создания", value: "2016 год" },
  ],
  stations: [
    {
      id: 1,
      image: "/station-1-hvoinaya.jpg",
      title: "Хвойная",
      description: "Густая хвойная роща с высокими елями и соснами. Узнайте о жизни хвойных деревьев и их роли в экосистеме.",
    },
    {
      id: 2,
      image: "/station-2-kaplya.jpg",
      title: 'Цветник "Капля"',
      description: "Красивый цветочный сад в форме капли. Яркие цветы разных оттенков создают уникальный ландшафтный дизайн.",
    },
    {
      id: 3,
      image: "/station-3-kuvshin.jpg",
      title: 'Искусственный пруд «Кувшинка»',
      description:
        "Следующая остановка — пруд «Кувшинка». Этот искусственный водоём, созданный нашей инициативной группой, вызывает неподдельный интерес у посетителей. Первыми обитателями пруда стали речные караси, а береговая зона декорирована хостами гибридными и ирисами.",
    },
    {
      id: 4,
      image: "/station-4-naydi-sebya.jpg",
      title: 'Исследовательская «Найди себя»',
      description:
        "Продвигаясь по экологической тропе, мы попадаем на исследовательскую станцию. Это равнинный участок, на котором проводятся уроки биологии, географии и изобразительного искусства на открытом воздухе. Здесь произрастает множество травянистых дикорастущих растений, а также встречаются единичные кустарниковые и древесные формы, такие как береза повислая и малина лесная.",
    },
    {
      id: 5,
      image: "/station-5-dubki.jpg",
      title: "Молодые дубки",
      description:
        "Станция «Молодые дубки» была заложена выпускниками гимназии в 2015 году и стала доброй традицией обновления территории новыми видами растений. Здесь сочетаются молодые дубы, ель голубая, дерен белый и почвопокровные многолетники.",
    },
    {
      id: 6,
      image: "/station-6-bereza.jpg",
      title: "Березовая аллея",
      description:
        "Березовая аллея расположена на автоморфных супесчаных почвах и формирует узнаваемый ландшафт маршрута. Основной вид — береза повислая, а сама станция помогает изучать особенности ветроопыления и сезонных изменений древесных растений.",
    },
    {
      id: 7,
      image: "/station-7-kormushka.jpg",
      title: "Кормушка для птиц",
      description:
        "Станция наблюдений за пернатыми жителями территории гимназии. Здесь изучают виды птиц, их поведение, особенности строения и роль в экосистеме, а также закрепляют практики бережного отношения к живой природе.",
    },
    {
      id: 8,
      image: "/station-8-dendrariy.jpg",
      title: "Дендрарий",
      description:
        "Дендрарий — «живой музей» древесных и кустарниковых форм, используемый для исследований и экологического просвещения. Станция демонстрирует разнообразие видов и их приспособленность к разным условиям среды.",
    },
    {
      id: 9,
      image: "/station-9-kashtan.jpg",
      title: "Каштановая аллея",
      description:
        "Каштановая аллея раскрывает декоративное, экологическое и практическое значение древесных пород в городской среде. На станции рассматривают биологические особенности каштанов и их применение в разных сферах.",
    },
    {
      id: 10,
      image: "/station-10-peyzazh.jpg",
      title: 'Цветник «Пейзаж»',
      description:
        "Клумба «Пейзаж» завершает маршрут и знакомит с декоративными травянистыми видами и их культурными образами. Станция объединяет ботанические знания, легенды о растениях и наблюдения за сезонным цветением.",
    },
  ],
};

// ZigZag Grid Section
export interface ZigZagGridItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  announcement?: string;
  detailLabel?: string;
  detailTitle?: string;
  bulletPoints?: string[];
  image: string;
  imageAlt: string;
  reverse: boolean;
  ctaLabel?: string;
  href?: string;
  links?: { label: string; href: string }[];
}

export interface ZigZagGridConfig {
  sectionLabel: string;
  sectionTitle: string;
  items: ZigZagGridItem[];
}

export const zigZagGridConfig: ZigZagGridConfig = {
  sectionLabel: "Образовательные материалы",
  sectionTitle: "Ресурсы для учителей и учащихся",
  items: [
    {
      id: "methodology",
      title: "Методичка",
      subtitle: "Методические материалы",
      description:
        "Методичка собрана как практический ориентир по созданию экологических троп: от первых идей и проектирования маршрута до оформления остановок, правил поведения и примеров внедрения в образовательный процесс.",
      announcement: "Презентация методички состоится 11 апреля!",
      detailLabel: "Издание",
      detailTitle:
        "«Сохраняя природу: Методические рекомендации по разработке экологических троп — от реальных маршрутов до виртуальных путешествий».",
      bulletPoints: [
        "Общие принципы создания экологической тропы",
        "Этапы создания и оформления маршрута",
        "Правила поведения на экологической тропе",
        "Практический пример экотропы на базе гимназии",
      ],
      image: "/station-4-naydi-sebya.jpg",
      imageAlt: "Методические материалы экологической тропы",
      reverse: true,
    },
    {
      id: "excursions",
      title: "Экскурсии и методические разработки",
      subtitle: "Для педагогов и учащихся",
      description:
        "В этом разделе собраны уроки-экскурсии для разных сезонов. Весенняя и зимняя программы помогают наблюдать природные изменения на маршруте, организовывать полевые задания и развивать практические навыки в живой образовательной среде.",
      detailLabel: "Экскурсионные программы",
      detailTitle:
        "Сезонные экскурсии по экотропе для наблюдений, исследований и учебной практики.",
      bulletPoints: [
        "Экскурсия «Живые организмы весной в различных экосистемах»",
        "Экскурсия «Живые организмы зимой»",
        "Маршрутные задания для учащихся",
        "Материалы для сезонных наблюдений",
      ],
      image: "/station-6-bereza.jpg",
      imageAlt: "Экскурсии и методические разработки",
      reverse: false,
      links: [
        { label: "Экскурсия весной", href: "/excursions/spring-organisms" },
        { label: "Экскурсия зимой", href: "/excursions/winter-organisms" },
        { label: "Биологическая лаборатория", href: "/excursions/biolab" },
        { label: "Деловая игра", href: "/excursions/business-game" },
      ],
    },
    {
      id: "chatbot",
      title: "Чат-бот по созданию экологических троп",
      subtitle: "Telegram-инструмент",
      description:
        "Чат-бот представляет собой современный информационный продукт на платформе Telegram. Он помогает пользователям на всех этапах проектирования и реализации экотроп, объединяя навигацию, консультации, методическую поддержку и обратную связь в одном канале.",
      detailLabel: "Возможности",
      detailTitle: "Наш чат-бот @ecotropbg_bot выполняет несколько ключевых функций:",
      bulletPoints: [
        "Консультации и рекомендации по выбору местоположения экотропы с учетом экологических особенностей региона, доступности и природных объектов.",
        "Образовательные материалы о флоре и фауне местности, экологические факты и данные для создания познавательных остановок.",
        "Идеи интерактивных заданий и мероприятий: викторины, наблюдения за природой и творческие активности для вовлечения учащихся.",
        "Поддержка в проектировании маршрута: помощь в выборе точек остановок, удобных путей и безопасной логистики.",
        "Сбор обратной связи и предложений по улучшению тропы для последующей доработки маршрута.",
        "Материалы и задания, соответствующие образовательным стандартам, что упрощает интеграцию экологии в учебный процесс.",
        "Поддержка сообществ: помощь в организации волонтерских мероприятий и взаимодействии с экологическими организациями.",
      ],
      image: "/telegram.jpg",
      imageAlt: "Чат-бот по созданию экологических троп",
      reverse: true,
      href: "https://t.me/ecotropbg_bot",
      ctaLabel: "Открыть чат-бот",
    },
  ],
};

// Breath Section
export interface BreathSectionConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

export const breathSectionConfig: BreathSectionConfig = {
  backgroundImage: "/breath-bg.jpg",
  backgroundAlt: "Панорама экотропы с высоты",
  title: "Сохраним природу вместе",
  subtitle: "Экологическое образование",
  description: "Наша миссия — привить любовь к природе и экологическое мышление с детства. Присоединяйтесь к нам в этом важном деле!",
};

// Card Stack Section - Featured Stations
export interface CardStackItem {
  id: number;
  image: string;
  title: string;
  description: string;
  rotation: number;
}

export interface CardStackConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: CardStackItem[];
}

export const cardStackConfig: CardStackConfig = {
  sectionTitle: "Избранные станции",
  sectionSubtitle: "Особо интересные места маршрута",
  cards: [
    {
      id: 1,
      image: "/station-3-kuvshin.jpg",
      title: "Пруд «Кувшинка»",
      description: "Уникальная водная экосистема с богатым разнообразием растений и животных.",
      rotation: -2,
    },
    {
      id: 2,
      image: "/station-8-dendrariy.jpg",
      title: "Дендрарий",
      description: "Коллекция редких и экзотических деревьев со всех уголков мира.",
      rotation: 1,
    },
    {
      id: 3,
      image: "/station-10-peyzazh.jpg",
      title: "Цветник «Пейзаж»",
      description: "Живописный сад с панорамным видом на окрестности.",
      rotation: -1,
    },
  ],
};

// Footer Section
export interface FooterContactItem {
  type: "email" | "phone";
  label: string;
  value: string;
  href: string;
}

export interface FooterSocialItem {
  platform: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  description: string;
  ctaText: string;
  contact: FooterContactItem[];
  locationLabel: string;
  address: string[];
  socialLabel: string;
  socials: FooterSocialItem[];
  logoText: string;
  copyright: string;
  links: { label: string; href: string }[];
}

export const footerConfig: FooterConfig = {
  heading: "Свяжитесь с нами",
  description: "Есть вопросы о посещении экотропы или сотрудничестве? Мы всегда рады помочь!",
  ctaText: "Написать нам",
  contact: [
    {
      type: "email",
      label: "www.arishe4ka@mail.ru",
      value: "www.arishe4ka@mail.ru",
      href: "mailto:www.arishe4ka@mail.ru",
    },
    {
      type: "phone",
      label: "+375 44 765-27-26",
      value: "+375447652726",
      href: "tel:+375447652726",
    },
  ],
  locationLabel: "Адрес",
  address: ["ул. Мирная 10А", "а/г Лесной, Беларусь"],
  socialLabel: "Мы в соцсетях",
  socials: [
    { platform: "instagram", href: "https://instagram.com/arina_gavrilenko" },
    { platform: "telegram", href: "https://t.me/chimiaAV" },
  ],
  logoText: "ЭКОТРОПА",
  copyright: "2026 Боровлянская гимназия. Все права защищены.",
  links: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Условия использования", href: "#" },
  ],
};

// Achievements Section
export interface Achievement {
  number: string;
  label: string;
}

export interface AchievementsConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  achievements: Achievement[];
  featuredDocumentsTitle: string;
  featuredDocuments: { label: string; href: string }[];
  publicationsTitle: string;
  publications: string[];
  masterClassesTitle: string;
  masterClasses: string[];
}

export const achievementsConfig: AchievementsConfig = {
  sectionTitle: "Наши достижения",
  sectionSubtitle: "В цифрах",
  achievements: [
    { number: "10", label: "Станций маршрута" },
    { number: "500+", label: "Учащихся в год" },
    { number: "50+", label: "Разработанных уроков" },
    { number: "10", label: "Лет работы" },
  ],
  featuredDocumentsTitle: "Награды и подтверждения",
  featuredDocuments: [
    { label: "Диплом", href: "/CamScanner 10.03.2026 13.49.pdf" },
  ],
  publicationsTitle: "Публикации",
  publications: [
    "Маврищев В.В., Гавриленко А.В. Формирование экологоцентрического мышления студентов посредством экологической тропы // Республиканская научно-практическая экологическая конференция «Проблемы оценки, мониторинга и сохранения биоразнообразия». Брест, 23 ноября 2017 г. С. 269-274.",
    "Гавриленко А.В., Макарова Ж.П., Кашкан А., Скалозуб П. Учебная экологическая тропа «Войди в природу другом» // Международный конкурс исследовательских работ «Игры разума» (сборник материалов). Могилев, 21-23 февраля 2018 г. С. 71-73.",
    "Гавриленко А.В. Войди в природу другом: о создании учебной экологической тропы // Образование Минщины, 3-4 сентября 2018 г. С. 55-56.",
    "Гавриленко А.В. Трансплантация лишайников как один из методов лихеноиндикации // Международная конференция молодых ученых «Актуальные проблемы ботаники и экологии». Украина, 3-4 сентября 2018 г. С. 13.",
    "Гавриленко А.В. Экологическая тропа — перспективная учебная территория // Сборник статей Международного научно-методического конкурса «Преподаватель года 2018», 28 декабря 2018 г. С. 134-151.",
    "Гавриленко А.В. Учебная экологическая тропа «Войди в природу другом» // Международный научный журнал «Молодой ученый», № 4, 28 декабря 2018 г. С. 192-196.",
    "Гавриленко А.В. Шалфей мускатный и шалфей лекарственный // Международный научный журнал «Молодой ученый», № 6, февраль 2019 г. С. 35-40.",
    "Гавриленко А.В. Экологическая тропа и творческая деятельность учащихся // Международный научный журнал «Молодой ученый», № 6, февраль 2019 г. С. 209-212.",
    "Гавриленко А.В. Планирование и организация учебной экологической тропы на примере агробиостанции «Зеленое» и ГУО «Боровлянская гимназия» // Сборник статей Международного научно-методического конкурса «Педагогическое призвание 2019», 10 февраля 2019 г. С. 24-33.",
    "Гавриленко А.В. Экологическая тропа и творческая деятельность учащихся // Сборник статей Международной научно-исследовательской конференции «Научные достижения в высшей школе 2019», 28 апреля 2019 г. С. 128-136.",
    "Гавриленко А.В., Макарова Ж.П. Оценка экологического состояния пришкольных участков агр. Лесной при помощи флуктуирующей асимметрии листовой пластинки березы повислой (Betula pendula Roth) // Сборник статей Международного научно-исследовательского конкурса «Исследователь года 2019», 12 мая 2019 г. С. 131-141.",
    "Гавриленко А.В. Организация учебной экологической тропы ГУО «Боровлянская гимназия» // Сборник статей Международного научно-интеллектуального конкурса «Youth for science 2019», 26 мая 2019 г. С. 343-352.",
    "Гавриленко А.В. Влияние ЭМИ на рост и развитие шалфея мускатного и шалфея лекарственного // Сборник статей Международного научно-методического конкурса «Преподаватель года 2019», 15 октября 2019 г. С. 168-175.",
    "Гавриленко А.В. Оценка экологического состояния пришкольных участков агр. Лесной при помощи флуктуирующей асимметрии листовой пластинки березы повислой // Международный научный журнал «Молодой ученый», № 22, ноябрь 2019 г. С. 63-67.",
  ],
  masterClassesTitle: "Мастер-классы для учителей",
  masterClasses: [
    "Экологическое проектирование троп: принципы и методы.",
    "Устойчивое развитие рекреационных маршрутов: биологические и экологические аспекты.",
    "Интеграция экосистемных услуг в проектирование экологических троп.",
    "Системный подход к созданию устойчивых природных маршрутов.",
    "Экологические коридоры: проектирование и управление для сохранения биоразнообразия.",
    "Экосистемный подход к проектированию туристических маршрутов.",
    "Анализ воздействия на окружающую среду при создании экологических троп.",
    "Планирование и реализация устойчивых пешеходных маршрутов: от концепции до практики.",
    "Взаимодействие человека и природы: создание гармоничных экотроп.",
    "Инновационные технологии в проектировании и управлении экологическими маршрутами.",
  ],
};

// Cooperation Section
export interface CooperationConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  actsTitle: string;
  actsDescription: string;
  acts: { label: string; href: string }[];
  benefits: string[];
}

export const cooperationConfig: CooperationConfig = {
  sectionTitle: "Сотрудничество",
  sectionSubtitle: "Приглашаем к партнёрству",
  description: "Мы открыты для сотрудничества с образовательными учреждениями, экологическими организациями и волонтёрскими движениями.",
  actsTitle: "Акты о практическом использовании результатов исследования",
  actsDescription:
    "Результаты исследовательской работы внедрены в образовательный процесс и подтверждены официальными актами. Документы фиксируют практическое использование материалов экотропы в учебной и воспитательной деятельности.",
  acts: [
    { label: "Акт 1", href: "/akts/Акт 1.pdf" },
    { label: "Акт 2", href: "/akts/Акт 2.pdf" },
  ],
  benefits: [
    "Обмен методическими материалами",
    "Совместные экологические проекты",
    "Организация выездных занятий",
    "Консультации по созданию экотроп",
  ],
};
