import React, { useState, Component } from 'react';
import { Link, NavLink } from "react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  Layout,
  Mail,
  MessageSquare,
  Target,
} from "lucide-react";

// --- Simple Error Boundary ---
class ErrorBoundary extends Component<{ fallback: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const STATS = [
  { value: "15+", label: "Опыт работы", icon: Briefcase },
  { value: "50+", label: "Завершённых проектов", icon: Target },
  { value: "6+", label: "Опыта управления", icon: CheckCircle },
  { value: "50+", label: "Доменов под контролем", icon: MessageSquare },
];

const PROJECTS = [
  {
    id: 1,
    image: "/audiometr.webp",
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
    image: "/detyrzd.webp", // Исправлено расширение файла
    title: "Сайт детской клиники «РЖД-Медицина»",
    role: "Digital Project Lead",
    tags: ["Создание сайта", "UI", "UX", "1C-Битрикс"],
    challenge: "Сильно устаревшие CMS и дизайн.",
    actions: "Создание с нуля и под ключ сайта для детской клиники.",
    results: "Современный адаптивный сайт на CMS 1C-Битрикс.",
    link: "/cases/deti-klinika",
  },
  {
    id: 3,
    image: "/audio.webp",
    title: "Сайт interacoustics.audio",
    role: "Digital Project Lead",
    tags: ["Стратегия", "Дизайн", "Tilda"],
    challenge: "Сайт с нуля и под ключ",
    actions: "Создание с нуля сайта-каталога для официального представителя компании Interacoustics.",
    results: "Современный проиндексированный сайт, цитируемый ИИ и приносящий заявки.",
    link: "/cases/interacoustics",
  },
];

// Ключи переведены на английский
const EXPERIENCE = [
  {
    period: "Сентябрь 2019 – сейчас",
    title: "Руководитель отдела контента и веб-разработки",
    company: "Медафарм",
    isCurrent: true,
    responsibilities: [
      "Руковожу командой из 4 человек (контент-менеджеры, дизайнер, frontend-разработчик), а также координирую работу внешних подрядчиков.",
      "Планирую задачи отдела, расставляю приоритеты, контролирую сроки и качество выполнения работ.",
      "Подготавливаю технические задания для разработчиков, дизайнеров и копирайтеров, определяю критерии приёмки.",
      "Разрабатываю контент-планы для развития сайтов, обновления новостных разделов и публикации экспертных материалов.",
      "Анализирую показатели посещаемости и конверсий в Яндекс.Метрике и GA4, готовлю отчёты для руководства.",
      "Координирую техническое сопровождение корпоративных сайтов.",
    ],
    achievements: [
      "За время работы руководителем отдела реализовано 21 сайт с нуля, перенесено на новые CMS 17 сайтов, проведено 26 редизайнов.",
      "Организовала двухэтапную проверку медицинских материалов с участием практикующих врачей.",
      "Обучила четырёх новых сотрудников работе с CMS и базовым навыкам HTML.",
    ],
    skills: ["Лидерство", "Стратегия", "Управление проектами"],
  },
  {
    period: "Август 2015 – Сентябрь 2019",
    title: "Web-дизайнер",
    company: "Медафарм",
    isCurrent: true,
    responsibilities: [
      "Проектировала структуру страниц, продумывала пользовательские сценарии и навигацию.",
      "Создавала UX/UI-дизайн новых проектов и проводила редизайн существующих сайтов.",
      "Разрабатывала интерактивные прототипы в Figma и Photoshop.",
      "Адаптировала интерфейсы для мобильных устройств.",
      "Разрабатывала рекламные баннеры и графические материалы.",
    ],
    achievements: [
      "Разработала дизайн и пользовательские интерфейсы для 30+ сайтов и лендингов.",
      "Самостоятельно создала 7 сайтов на Tilda — от структуры до публикации.",
    ],
    skills: ["Photoshop", "Figma", "UX/UI", "Tilda"],
  },
  {
    period: "Август 2012 – Август 2015",
    title: "Контент-менеджер",
    company: "Медафарм",
    isCurrent: true,
    responsibilities: [
      "Поддерживала и развивала контент более чем на 5 корпоративных сайтах.",
      "Размещала и обновляла новости, статьи, карточки товаров.",
      "Форматировала и верстала материалы с использованием HTML и CSS.",
      "Работала с файловой структурой сайтов через FTP.",
      "Подбирала, обрабатывала и ретушировала изображения.",
    ],
    achievements: [
      "Выстроила процессы регулярного выпуска новостей и экспертных статей.",
      "Повысила скорость подготовки материалов за счет шаблонизации в CMS.",
    ],
    skills: ["HTML", "CSS", "CMS", "FTP", "Работа с графикой"],
  },
];

const TOOLS = [
  { name: "Figma", category: "Дизайн" },
  { name: "Photoshop", category: "Дизайн" },
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
]; // <--- Здесь была проблема: убедитесь, что стоит ; после закрытия массива функций

function SectionLabel({ children, centered = false, className = "" }: { children: React.ReactNode; centered?: boolean; className?: string }) {
  return (
    <div className={`text-sm font-semibold uppercase tracking-wider text-[#0EA5A4] mb-3 ${centered ? "text-center" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({ children, centered = false, className = "" }: { children: React.ReactNode; centered?: boolean; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-8 ${centered ? "text-center" : ""} ${className}`}>
      {children}
    </h2>
  );
}

// --- Hero ---
function Hero() {
  return (
    <section id="hero" className="pt-20 sm:pt-24 md:pt-28 pb-14 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
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
                <span key={t} className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-full text-[#6B7280]">{t}</span>
              ))}
            </div>
            <p className="text-lg sm:text-xl font-bold text-[#1F2937] leading-snug mb-3">
             15 лет в digital: руководство командами, контент-стратегия, UX/UI и техническая экспертиза.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-[#0EA5A4] text-white font-semibold px-5 sm:px-6 py-3 rounded-xl hover:bg-[#0d9190] transition-colors text-sm">
                Смотреть кейсы <ArrowRight size={15} />
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#1F2937] font-semibold px-5 sm:px-6 py-3 rounded-xl hover:border-[#0EA5A4] hover:text-[#0EA5A4] transition-colors text-sm">
                Скачать резюме <Download size={15} />
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="relative">
              <div className="w-64 lg:w-72 h-80 lg:h-[22rem] rounded-3xl overflow-hidden border border-[#E5E7EB]">
                <img src="/Perevoshchikova.webp" alt="Юлия Перевощикова" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/10 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-xl bg-[#0EA5A4]/8 -z-10" />
            </div>
          </div>
          <div className="flex md:hidden gap-4">
            <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] px-4 py-3 text-center"><div className="text-2xl font-extrabold text-[#0EA5A4]">50+</div><div className="text-xs text-[#6B7280] font-medium mt-0.5">Проектов</div></div>
            <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] px-4 py-3 text-center"><div className="text-2xl font-extrabold text-[#1F2937]">15+</div><div className="text-xs text-[#6B7280] font-medium mt-0.5">Лет опыта в web</div></div>
            <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] px-4 py-3 text-center"><div className="text-2xl font-extrabold text-[#1F2937]">6+</div><div className="text-xs text-[#6B7280] font-medium mt-0.5">Лет управления</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Остальные компоненты (Stats, About, Projects, Experience, Tools, Process, ResumeContact) остаются без изменений 
// (вы можете взять их из предыдущего сообщения, они синтаксически верны).

// Для чистоты эксперимента оставим только сигнатуру экспорта главной функции:
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Tools />
      <Process />
      {/* <Testimonials /> */}
      <ResumeContact />
    </>
  );
}