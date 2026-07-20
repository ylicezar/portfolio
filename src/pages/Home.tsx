import React from 'react';
import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  Layout,
  Linkedin,
  Mail,
  MessageSquare,
  Quote,
  Send,
  Target,
} from "lucide-react";

const STATS = [
  { value: "15+", label: "Опыт работы", icon: Briefcase },
  { value: "50+", label: "Завершённых проектов", icon: Target },
  { value: "6+", label: "Опыта управления", icon: CheckCircle },
  { value: "50+", label: "Доменов под контролем", icon: MessageSquare },
];

const PROJECTS = [
  {
    id: 1,
    image: "/public/audiometr.webp",
    title: "Редизайн сайта audiometr.ru",
    role: "Digital Project Lead",
    tags: ["Редизайн", "UX", "B2B каталог"],
    challenge: "Устаревший фирменный стиль 2013 года и отсутствие адаптива.",
    actions: "Обновили визуальный стиль, каталог с фильтрами, карточку товара, адаптив.",
    results: "Современный сайт, отражающий статус официального дистрибьютора.",
    link: "/cases/audiometr",
  },
  {
    id: 2,
    image: "/public/detyrzd.png",
    title: "Создание сайта для Детской клиники РЖД-Медицина",
    role: "Digital Project Lead",
    tags: ["Создание сайта", "UI", "UX", "1C-Битрикс"],
    challenge: "Сильно устаревшие CMS и дизайн.",
    actions: "Создание с нуля и под ключ сайта для детской клиники.",
    results: "Современный адаптивный сайт на CMS 1C-Битрикс.",
    link: "/cases/deti-klinika",
  },
  {
    id: 3,
    image: "/public/audio.webp",
    title: "Создание сайта interacoustics.audio",
    role: "Digital Project Lead",
    tags: ["Стратегия", "Дизайн", "Tilda"],
    challenge: "Сайт с нуля и под ключ",
    actions: "Создание с нуля сайта-каталога для официального представителя компании Interacoustics .",
    results: "Современный проиндексированный сайт, цитируемый ИИ и приносящий заявки.",
    link: "/cases/interacoustics",
  },
];

const EXPERIENCE = [
  {
    period: "Сентябрь 2019 – сейчас",
    title: "Руководитель отдела контента и веб-разработки",
    company: "Медафарм",
    isCurrent: true,
    Обязанности: [
      "Руковожу командой из 4 человек (контент-менеджеры, дизайнер, frontend-разработчик), а также координирую работу внешних подрядчиков.",
      "Планирую задачи отдела, расставляю приоритеты, контролирую сроки и качество выполнения работ.",
      "Подготавливаю технические задания для разработчиков, дизайнеров и копирайтеров, определяю критерии приёмки.",
      "Разрабатываю контент-планы для развития сайтов, обновления новостных разделов и публикации экспертных материалов.",
      "Анализирую показатели посещаемости и конверсий в Яндекс.Метрике и GA4, готовлю отчёты для руководства и предлагаю изменения, основанные на данных.",
      "Координирую техническое сопровождение корпоративных сайтов: взаимодействие с подрядчиками, контроль доменной инфраструктуры и стабильной работы веб-ресурсов.",
    ],
    Достижения: [
      "За время работы руководителем отдела реализовано 21 сайт с нуля, перенесено на новые CMS 17 сайтов, проведено 26 редизайнов.",
      "Организовала двухэтапную проверку медицинских материалов с участием практикующих врачей, что позволило повысить качество и достоверность контента.",
      "Обучила четырёх новых сотрудников работе с CMS, корпоративным стандартам оформления материалов и базовым навыкам HTML.",
    ],
    skills: ["Лидерство", "Стратегия", "Управление проектами"],
  },
  {
    period: "Август 2015 – Сентябрь 2019",
    title: "Web-дизайнер",
    company: "Медафарм",
    isCurrent: true,
    Обязанности: [
      "Проектировала структуру страниц, продумывала пользовательские сценарии и навигацию, чтобы сделать работу с сайтами более понятной и удобной.",
      "Создавала UX/UI-дизайн новых проектов и проводила редизайн существующих сайтов, отдельных разделов, карточек товаров, фильтров и форм.",
      "Разрабатывала интерактивные прототипы в Figma и Photoshop, согласовывала решения с маркетологами и разработчиками, сопровождала проекты до запуска.",
      "Адаптировала интерфейсы для мобильных устройств и контролировала корректность реализации дизайна на этапе вёрстки.",
      "Разрабатывала рекламные баннеры и графические материалы для digital-проектов, при необходимости самостоятельно писала короткие рекламные тексты.",
    ],
    Достижения: [
      "Разработала дизайн и пользовательские интерфейсы для 30+ сайтов и лендингов: корпоративных сайтов производителей медицинского оборудования, клиник, персональных сайтов врачей и медицинских порталов.",
      "Самостоятельно создала 7 сайтов на Tilda — от структуры и дизайна до публикации.",
    ],
    skills: ["Photoshop", "Figma", "UX/UI", "Tilda"],
  },
    {
    period: "Август 2012 – Август 2015",
    title: "Контент-менеджер",
    company: "Медафарм",
    isCurrent: true,
    Обязанности: [
      "Поддерживала и развивала контент более чем на 5 корпоративных сайтах на CMS Drupal, 1С-Битрикс, WordPress и других системах управления.",
      "Размещала и обновляла новости, статьи, карточки товаров и информационные разделы, следила за актуальностью и качеством контента.",
      "Форматировала и верстала материалы с использованием HTML и CSS, при необходимости вносила правки в код для корректного отображения страниц.",
      "Работала с файловой структурой сайтов через FTP, выполняла загрузку и обновление контента.",
      "Подбирала, обрабатывала и ретушировала изображения для карточек товаров, статей и новостей.",
      "Выполняла небольшие правки в базе данных MySQL и помогала решать технические задачи, связанные с поддержкой сайтов.",
    ],
    skills: ["HTML", "CSS", "CMS", "FTP"],
  },
];

const TOOLS = [
  { name: "Figma", category: "Дизайн" },
  { name: "Potoshope", category: "Дизайн" },
  { name: "Illustrator", category: "Дизайн" },
  { name: "Drupal", category: "CMS" },
  { name: "Tilda", category: "CMS" },
  { name: "Битрикс", category: "CMS" },
  { name: "WordPress", category: "CMS" },
  { name: "Мегаплан", category: "Управление" },
  { name: "Битрикс24", category: "Управление" },
  { name: "HTML", category: "Разработка" },
  { name: "CSS", category: "Разработка" },
  { name: "Яндекс.Метрика", category: "Маркетинг" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Дизайн: "#0EA5A4",
  CMS: "#2563EB",
  Управление: "#F59E0B",
  Разработка: "#8B5CF6",
  Маркетинг: "#0EA5A4",
};

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Исследование",
    desc: "Понимание целей и требований.",
    icon: Target,
  },
  {
    step: "2",
    title: "Планирование",
    desc: "Разработка плана действий и определение приоритетов.",
    icon: Briefcase,
  },
  {
    step: "3",
    title: "Реализация",
    desc: "Координация проектных команд на всех этапах выполнения задач.",
    icon: CheckCircle,
  },
  {
    step: "4",
    title: "Оптимизация",
    desc: "Измерение и улучшение результатов.",
    icon: Layout,
  },
  {
    step: "5",
    title: "Развитие",
    desc: "Тиражирование удачных механик.",
    icon: ArrowRight,
  },
];

{/* const TESTIMONIALS = [
  {
    text: "Excellent project leader with strong business understanding.",
    name: "Anna Petrova",
    role: "Product Owner",
    initial: "A",
  },
  {
    text: "Brings structure to complex initiatives.",
    name: "Ivan Smirnov",
    role: "Development Manager",
    initial: "I",
  },
  {
    text: "Consistently delivers results.",
    name: "Maria Volkova",
    role: "Marketing Director",
    initial: "M",
  },
];
*/}
function SectionLabel({
  children,
  centered = false,
  className = "",
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`text-sm font-semibold uppercase tracking-wider text-[#0EA5A4] mb-3 ${
        centered ? "text-center" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  children,
  centered = false,
  className = "",
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-8 ${
        centered ? "text-center" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}
// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" className="pt-20 sm:pt-24 md:pt-28 pb-14 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0EA5A4] animate-pulse" />
              <span className="text-sm font-medium text-[#0EA5A4]">Управляю веб-проектами</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F2937] leading-[1.05] tracking-tight mb-5">
              Юлия<br />Перевощикова
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Web Project Manager", "Digital Project Lead", "Content Operations Manager"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-full text-[#6B7280]"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-lg sm:text-xl font-bold text-[#1F2937] leading-snug mb-3">
             15 лет в digital: руководство командами, контент-стратегия, UX/UI и техническая экспертиза – чтобы ваш продукт приносил пользу и достигал целей.
            </p>
            {/* <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8">
              I bridge business goals, content strategy, design, and development to deliver effective digital products that create measurable, lasting value.
            </p>*/}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#0EA5A4] text-white font-semibold px-5 sm:px-6 py-3 rounded-xl hover:bg-[#0d9190] transition-colors text-sm"
              >
                Смотреть кейсы <ArrowRight size={15} />
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#1F2937] font-semibold px-5 sm:px-6 py-3 rounded-xl hover:border-[#0EA5A4] hover:text-[#0EA5A4] transition-colors text-sm"
              >
                Скачать резюме <Download size={15} />
              </a>
            </div>
          </div>

          {/* Portrait — desktop only */}
<div className="hidden md:flex justify-end">
  <div className="relative">
    {/* Сам портрет — фото на всю карточку */}
    <div className="w-64 lg:w-72 h-80 lg:h-[22rem] rounded-3xl overflow-hidden border border-[#E5E7EB]">
      <img
        src="/Perevoshchikova.webp"
        alt="Юлия Перевощикова"
        className="w-full h-full object-cover"
      />
    </div>


    {/* Плашка «Завершённых проектов» 
    <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-md px-4 py-3 border border-[#E5E7EB]">
      <div className="text-xs text-[#6B7280] font-medium mb-0.5">Законченных<br /> проектов</div>
      <div className="text-2xl font-extrabold text-[#1F2937]">50+</div>
    </div>*/}

    {/* Плашка «Опыт работы» 
    <div className="absolute -top-5 -right-8 bg-white rounded-2xl shadow-md px-4 py-3 border border-[#E5E7EB]">
      <div className="text-xs text-[#6B7280] font-medium mb-0.5">Лет опыта<br /> в web</div>
      <div className="text-2xl font-extrabold text-[#0EA5A4]">15+</div>
    </div>*/}

    {/* Декоративные квадратики */}
    <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/10 -z-10" />
    <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-xl bg-[#0EA5A4]/8 -z-10" />
  </div>
</div>

          {/* Mobile-only mini stat row */}
          <div className="flex md:hidden gap-4">
            <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] px-4 py-3 text-center">
              <div className="text-2xl font-extrabold text-[#0EA5A4]">50+</div>
              <div className="text-xs text-[#6B7280] font-medium mt-0.5">Проектов</div>
            </div>
            <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] px-4 py-3 text-center">
              <div className="text-2xl font-extrabold text-[#1F2937]">15+</div>
              <div className="text-xs text-[#6B7280] font-medium mt-0.5">Лет опыта в web</div>
            </div>
            <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] px-4 py-3 text-center">
              <div className="text-2xl font-extrabold text-[#1F2937]">6+</div>
              <div className="text-xs text-[#6B7280] font-medium mt-0.5">Лет управления командой</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="py-10 sm:py-12 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map(({ value, label, icon: Icon }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center px-2 sm:px-4 ${
                i > 0 ? "border-l border-[#E5E7EB]" : ""
              } ${i >= 2 ? "lg:border-l" : ""} ${i === 2 ? "border-l-0 lg:border-l" : ""}`}
            >
              <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E0F2F2] mb-2 sm:mb-3">
                <Icon size={17} className="text-[#0EA5A4]" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mb-0.5 sm:mb-1">{value}</div>
              <div className="text-xs sm:text-sm text-[#6B7280] font-medium leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#F7F8FA]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <div>
            <SectionLabel>Обо мне</SectionLabel>
            <SectionHeading className="mb-5 sm:mb-6">
              От добавления контента<br />до управления проектами
            </SectionHeading>
            <div className="space-y-4 text-[#6B7280] leading-relaxed text-sm sm:text-base">
              <p>
                Более 15 лет работаю в web‑сфере: начинала как контент‑менеджер, выросла до руководителя отдела. За это время прошла весь цикл создания сайтов — от идеи и технического задания до запуска и анализа результатов.
              </p>
              <p>
                Журналистское образование и опыт научили меня важности фактчекинга. Каждая цифра, факт или формулировка проходят проверку – привычка перепроверять источники и не полагаться на допущения помогает выпускать достоверный контент и принимать взвешенные решения. Умею вычленять суть, «переводить» сложную медицинскую информацию на понятный язык.
              </p>
             <p> Не боюсь отстаивать свою точку зрения и аргументированно защищать решения, если вижу, что они работают на качество продукта.</p>
              <p>
               Команда со мной не тратит время на догадки: технические задания пишу подробно, с учётом ограничений CMS и вёрстки. Люблю, когда всё разложено по полочкам, но без лишней бюрократии.
              </p>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[
              { label: "Управление проектами", icon: Briefcase, desc: "Полный цикл веб-проектов, координация распределённых команд и внешних подрядчиков, постановка задач, внедрение чек-листов и контроль сроков" },
              { label: "Контент-стратегия", icon: FileText, desc: "Разработка стратегий под бизнес-цели, построение редакционных процессов и фактчекинга, создание рубрикаторов и контент-планов" },
              { label: "UX/UI", icon: Layout, desc: "Проектирование интерфейсов и прототипирование в Figma, проведение редизайнов с фокусом на конверсию, анализ пользовательского поведения и юзабилити-тестирование" },
              { label: "Стратегия", icon: Target, desc: "Разработка дорожных карт развития сайтов, формирование KPI-систем и отчётности на основе данных Яндекс.Метрики и Google Analytics, защита решений перед стейкхолдерами" },
            ].map(({ label, icon: Icon, desc }) => (
              <div
                key={label}
                className="flex gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E7EB] hover:border-[#0EA5A4]/40 hover:shadow-sm transition-all"
              >
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E0F2F2] flex items-center justify-center">
                  <Icon size={17} className="text-[#0EA5A4]" />
                </div>
                <div>
                  <div className="font-bold text-[#1F2937] text-sm mb-0.5 sm:mb-1">{label}</div>
                  <div className="text-xs sm:text-sm text-[#6B7280]">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-all flex flex-col">
      <div className="h-40 sm:h-44 bg-[#E0F2F2] overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-0.5 bg-[#F7F8FA] border border-[#E5E7EB] rounded-full text-[#6B7280]">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-extrabold text-[#1F2937] text-sm sm:text-base leading-snug mb-1">{project.title}</h3>
        <p className="text-xs font-semibold text-[#0EA5A4] mb-4">{project.role}</p>
        {expanded && (
          <div className="space-y-4 mb-5 pt-4 border-t border-[#E5E7EB]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">Challenge</div>
              <p className="text-sm text-[#6B7280] leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">Actions Taken</div>
              <p className="text-sm text-[#6B7280] leading-relaxed">{project.actions}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0EA5A4] mb-1.5">Results</div>
              <p className="text-sm text-[#1F2937] font-semibold leading-relaxed">{project.results}</p>
            </div>
          </div>
        )}
        <div className="mt-auto">
          {project.link ? (
            <Link
              to={project.link}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0EA5A4] hover:text-[#0d9190] transition-colors"
            >
              Смотреть кейс
              <ArrowRight size={14} />
            </Link>
          ) : (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0EA5A4] hover:text-[#0d9190] transition-colors"
            >
              {expanded ? "Hide details" : "View case study"}
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-[#F7F8FA]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <SectionLabel>Рекомендуемые проекты</SectionLabel>
            <SectionHeading>Примеры успешных проектов</SectionHeading>
          </div>
          <p className="text-sm text-[#6B7280] max-w-xs leading-relaxed">
            Подборка проектов, реализованных в сфере здравоохранения и медицинского оборудования.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience Timeline ──────────────────────────────────────────────────────

function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16 items-start">
          <div>
            <SectionLabel>Опыт работы</SectionLabel>
            <SectionHeading>15 лет последовательного профессионального роста</SectionHeading>
            <p className="mt-4 sm:mt-5 text-sm text-[#6B7280] leading-relaxed">
              От контент-менеджера до руководителя отдела – путь, построенный на расширении ответственности и освоении новых направлений.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-px bg-[#E5E7EB]" />
              <div className="space-y-4 sm:space-y-5">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 sm:pl-12">
                    <div
                      className={`absolute left-[19px] top-6 w-2.5 h-2.5 rounded-full border-2 -translate-x-1/2 transition-colors z-10 ${
                        exp.isCurrent
                          ? "bg-[#0EA5A4] border-[#0EA5A4]"
                          : openIdx === idx
                          ? "bg-white border-[#0EA5A4]"
                          : "bg-white border-[#D1D5DB]"
                      }`}
                    />
                    <div
                      className={`bg-white border rounded-xl sm:rounded-2xl overflow-hidden transition-all cursor-pointer ${
                        openIdx === idx
                          ? "border-[#0EA5A4]/40 shadow-sm"
                          : "border-[#E5E7EB] hover:border-[#0EA5A4]/25"
                      }`}
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                      <div className="p-4 sm:p-5 flex items-start justify-between gap-3 sm:gap-4">
                        <div>
                          <div className="text-xs font-medium text-[#6B7280] mb-0.5 sm:mb-1 flex items-center flex-wrap gap-2">
                            {exp.period}
                            {exp.isCurrent && (
                              <span className="inline-block text-[10px] font-semibold bg-[#E0F2F2] text-[#0EA5A4] px-2 py-0.5 rounded-full uppercase tracking-wide">
                                Сейчас
                              </span>
                            )}
                          </div>
                          <h3 className="font-extrabold text-[#1F2937] text-sm leading-snug">{exp.title}</h3>
                          <div className="text-xs font-medium text-[#0EA5A4] mt-0.5">{exp.company}</div>
                        </div>
                        <div className={`flex-shrink-0 transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""}`}>
                          <ChevronDown size={15} className="text-[#9CA3AF]" />
                        </div>
                      </div>

                      {openIdx === idx && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-[#F3F4F6] pt-4 space-y-4">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Responsibilities</div>
                            <ul className="space-y-1.5">
                              {exp.Обязанности.map((r, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#6B7280]">
                                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#9CA3AF] flex-shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-[#0EA5A4] mb-2">Key Achievements</div>
                            <ul className="space-y-1.5">
                              {exp.Достижения.map((a, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#1F2937] font-medium">
                                  <CheckCircle size={13} className="text-[#0EA5A4] mt-0.5 flex-shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {exp.skills.map((s) => (
                              <span key={s} className="text-xs px-2 py-0.5 bg-[#F7F8FA] border border-[#E5E7EB] rounded-full text-[#6B7280]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Tools ────────────────────────────────────────────────────────────────────

function Tools() {
  const categories = [...new Set(TOOLS.map((t) => t.category))];

  return (
    <section id="tools" className="py-16 sm:py-20 md:py-24 bg-[#F7F8FA]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <SectionLabel centered>Инструменты и технологии</SectionLabel>
          <SectionHeading>Профессиональный набор инструментов</SectionHeading>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {TOOLS.map(({ name, category }) => (
            <div
              key={name}
              className="flex items-center gap-2 sm:gap-2.5 bg-white border border-[#E5E7EB] rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 hover:border-[#0EA5A4]/40 hover:shadow-sm transition-all"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: CATEGORY_COLORS[category] || "#6B7280" }}
              />
              <span className="font-bold text-xs sm:text-sm text-[#1F2937]">{name}</span>
              <span className="text-xs text-[#9CA3AF] hidden sm:inline">{category}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: CATEGORY_COLORS[cat] || "#6B7280" }}
              />
              <span className="text-xs text-[#9CA3AF] font-medium">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <SectionLabel centered>Подход к работе</SectionLabel>
          <SectionHeading>Как я управляю проектами</SectionHeading>
        </div>
        <div className="relative">
          {/* Connector line — only when all 5 fit in one row */}
          <div className="hidden xl:block absolute top-8 left-[9%] right-[9%] h-px bg-[#E5E7EB] z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="flex sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center sm:mb-5 relative flex-shrink-0">
                  <Icon size={20} className="text-[#0EA5A4]" />
                  <span className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-[#0EA5A4] text-white text-[10px] font-black flex items-center justify-center">
                    {parseInt(step)}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1F2937] text-sm mb-1.5 sm:mb-2 leading-snug">{title}</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

{/*
 ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#1F2937]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#0EA5A4]" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0EA5A4]">Testimonials</span>
            <div className="w-6 h-px bg-[#0EA5A4]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            What colleagues say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map(({ text, name, role, initial }) => (
            <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/[0.07] transition-colors flex flex-col">
              <Quote size={20} className="text-[#0EA5A4] mb-3 sm:mb-4 opacity-70 flex-shrink-0" />
              <p className="text-sm text-white/75 leading-relaxed mb-5 sm:mb-6 flex-1 italic">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-[#0EA5A4]/20 border border-[#0EA5A4]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-[#0EA5A4]">{initial}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{name}</div>
                  <div className="text-xs text-white/45">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/}

// ─── Resume Download ──────────────────────────────────────────────────────────

function Resume() {
  return (
    <section id="resume" className="py-16 sm:py-20 md:py-24 bg-[#F7F8FA]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E5E7EB] p-7 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="max-w-lg w-full md:w-auto">
            <SectionLabel>Резюме</SectionLabel>
            <SectionHeading className="mb-3 sm:mb-4">Скачать резюме</SectionHeading>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
              Моё резюме в формате PDF. <br />Полный обзор моего профессионального опыта и навыков.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-5 flex-shrink-0">
            <div className="w-36 sm:w-44 h-48 sm:h-60 bg-[#F7F8FA] rounded-xl sm:rounded-2xl border border-[#E5E7EB] flex flex-col p-4 sm:p-5 gap-2 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#E0F2F2] flex items-center justify-center mb-1">
                <span className="text-sm font-black text-[#0EA5A4]">YP</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#E5E7EB]" />
              <div className="w-2/3 h-1.5 rounded-full bg-[#E5E7EB]" />
              <div className="mt-2 space-y-1.5">
                <div className="w-full h-1.5 rounded-full bg-[#E5E7EB]" />
                <div className="w-full h-1.5 rounded-full bg-[#E5E7EB]" />
                <div className="w-3/4 h-1.5 rounded-full bg-[#E5E7EB]" />
              </div>
              <div className="mt-2 w-full h-px bg-[#0EA5A4]/25" />
              <div className="space-y-1.5">
                <div className="w-full h-1.5 rounded-full bg-[#E5E7EB]" />
                <div className="w-full h-1.5 rounded-full bg-[#E5E7EB]" />
                <div className="w-1/2 h-1.5 rounded-full bg-[#E5E7EB]" />
              </div>
              <div className="mt-auto text-center">
                <span className="text-[10px] font-black text-[#0EA5A4] tracking-wide">CV 2026</span>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 bg-[#0EA5A4] text-white font-semibold px-6 sm:px-7 py-3 rounded-xl hover:bg-[#0d9190] transition-colors text-sm shadow-sm">
              <Download size={15} /> Скачать (.PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <SectionLabel>Контакты</SectionLabel>
            <SectionHeading className="mb-3 sm:mb-4">
              Давайте обсудим<br />ваш проект
            </SectionHeading>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Если вам нужен менеджер web-проекта, руководитель цифрового направления или эксперт по контент-менеджменту – я открыта для новых возможностей и сотрудничества.
            </p>
            <div className="space-y-4 sm:space-y-5">
              <a href="mailto:79260655851@ya.ru" className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E0F2F2] flex items-center justify-center group-hover:bg-[#0EA5A4] transition-colors flex-shrink-0">
                  <Mail size={17} className="text-[#0EA5A4] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] font-medium mb-0.5">Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#1F2937] group-hover:text-[#0EA5A4] transition-colors break-all">
                    79260655851@ya.ru
                  </div>
                </div>
              </a>
              <a href="https://t.me/Yeah_Tavi" className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E0F2F2] flex items-center justify-center group-hover:bg-[#0EA5A4] transition-colors flex-shrink-0">
                  <MessageSquare size={17} className="text-[#0EA5A4] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] font-medium mb-0.5">Telegram</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#1F2937] group-hover:text-[#0EA5A4] transition-colors">
                    @Yeah_Tavi
                  </div>
                </div>
              </a>
            
            </div>
          </div>

          <div>
            {sent ? (
              <div className="bg-[#F0FDF4] border border-green-200 rounded-2xl p-8 sm:p-12 text-center">
                <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-extrabold text-[#1F2937] text-lg sm:text-xl mb-2">Сообщение отправлено!</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Спасибо! Я свяжусь с вами в течение 1-2 рабочих дней.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 text-sm font-semibold text-[#0EA5A4] hover:underline"
                >
                  Отправить новое сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] p-5 sm:p-8 space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#1F2937] mb-1.5 sm:mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Анна Иванова"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0EA5A4] focus:ring-2 focus:ring-[#0EA5A4]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1F2937] mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="anna@company.ru"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0EA5A4] focus:ring-2 focus:ring-[#0EA5A4]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1F2937] mb-1.5 sm:mb-2">Сообщение</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите мне о проекте или компании..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0EA5A4] focus:ring-2 focus:ring-[#0EA5A4]/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0EA5A4] text-white font-bold py-3 sm:py-3.5 rounded-xl hover:bg-[#0d9190] transition-colors text-sm"
                >
                  Отправить <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />

      <Projects />
      <Experience />
      <Tools />
      <Process />
 {/*  <Testimonials /> */}
      <Resume />
      <Contact />
    </>
  );
}

export default Home;
