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
    { label: "Методичка", href: "#methodology" },
    { label: "Разработки", href: "#developments" },
    { label: "Экскурсии", href: "#excursions" },
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
  line3: "Экотропа — это образовательный маршрут, где каждая станция рассказывает свою историю о природе, флоре и фауне. Пройдите путь от хвойного леса до цветочных пейзажей.",
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
  stations: Station[];
}

export const stationsGridConfig: StationsGridConfig = {
  sectionTitle: "Станции Экотропы",
  sectionSubtitle: "Выберите станцию для изучения",
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
        "Продвигаясь по экологической тропе, мы попадаем на исследовательскую станцию (рис. 3.5). Это равнинный участок, на котором проводятся уроки биологии, географии и изобразительного искусства на открытом воздухе. Здесь произрастает множество травянистых дикорастущих растений, а также встречаются единичные кустарниковые и древесные формы, такие как береза повислая и малина лесная.",
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
  image: string;
  imageAlt: string;
  reverse: boolean;
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
      title: "Методические материалы",
      subtitle: "Для педагогов",
      description: "Подробные методические рекомендации по проведению экологических занятий на каждой станции экотропы. Включают планы уроков, задания для учащихся и критерии оценки.",
      image: "/station-1-hvoinaya.jpg",
      imageAlt: "Методические материалы",
      reverse: false,
    },
    {
      id: "developments",
      title: "Разработки уроков",
      subtitle: "Готовые материалы",
      description: "Коллекция разработанных уроков и практических занятий по биологии, экологии и природоведению для разных возрастных групп.",
      image: "/station-4-naydi-sebya.jpg",
      imageAlt: "Разработки уроков",
      reverse: true,
    },
    {
      id: "excursions",
      title: "Экскурсии",
      subtitle: "Организация посещений",
      description: "Информация о проведении экскурсий по экотропе для школьных групп, студентов и организованных туристических групп.",
      image: "/station-6-bereza.jpg",
      imageAlt: "Экскурсии",
      reverse: false,
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
      label: "ecotropa@school.ru",
      value: "ecotropa@school.ru",
      href: "mailto:ecotropa@school.ru",
    },
    {
      type: "phone",
      label: "+7 (XXX) XXX-XX-XX",
      value: "+7XXXXXXXXXX",
      href: "tel:+7XXXXXXXXXX",
    },
  ],
  locationLabel: "Адрес",
  address: ["ул. Мирная 10А", "д. Боровляны, Беларусь"],
  socialLabel: "Мы в соцсетях",
  socials: [
    { platform: "instagram", href: "#" },
    { platform: "facebook", href: "#" },
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
}

export const achievementsConfig: AchievementsConfig = {
  sectionTitle: "Наши достижения",
  sectionSubtitle: "В цифрах",
  achievements: [
    { number: "10", label: "Станций маршрута" },
    { number: "500+", label: "Учащихся в год" },
    { number: "50+", label: "Разработанных уроков" },
    { number: "5", label: "Лет работы" },
  ],
};

// Cooperation Section
export interface CooperationConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  benefits: string[];
}

export const cooperationConfig: CooperationConfig = {
  sectionTitle: "Сотрудничество",
  sectionSubtitle: "Приглашаем к партнёрству",
  description: "Мы открыты для сотрудничества с образовательными учреждениями, экологическими организациями и волонтёрскими движениями.",
  benefits: [
    "Обмен методическими материалами",
    "Совместные экологические проекты",
    "Организация выездных занятий",
    "Консультации по созданию экотроп",
  ],
};
