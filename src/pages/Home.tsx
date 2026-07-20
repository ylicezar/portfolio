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

// --- Simple Error Boundary to prevent one card from crashing the whole section ---
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
    image: "/detyrzd.webp", // Исправлено с .png на .webp
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

// Ключи переведены на английский, чтобы избежать проблем с бандлом и типизацией
const EXPERIENCE = [
  {
    period: "Сентябрь 2019 – сейчас",
    title: "Руководитель отдела контента и веб-разработки",
    company: "Медафарм",
    isCurrent: true,
    responsibilities: [ // Было: Обязанности
      "Руковожу командой из 4 человек (контент-менеджеры, дизайнер, frontend-разработчик), а также координирую работу внешних подрядчиков.",
      "Планирую задачи отдела, расставляю приоритеты, контролирую сроки и качество выполнения работ.",
      "Подготавливаю технические задания для разработчиков, дизайнеров и копирайтеров, определяю критерии приёмки.",
      "Разрабатываю контент-планы для развития сайтов, обновления новостных разделов и публикации экспертных материалов.",
      "Анализирую показатели посещаемости и конверсий в Яндекс.Метрике и GA4, готовлю отчёты для руководства и предлагаю изменения, основанные на данных.",
      "Координирую техническое сопровождение корпоративных сайтов: взаимодействие с подрядчиками, контроль доменной инфраструктуры и стабильной работы веб-ресурсов.",
    ],
    achievements: [ // Было: Достижения
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
    responsibilities: [
      "Проектировала структуру страниц, продумывала пользовательские сценарии и навигацию.",
      "Создавала UX/UI-дизайн новых проектов и проводила редизайн существующих сайтов.",
      "Разрабатывала интерактивные прототипы в Figma и Photoshop.",
      "Адаптировала интерфейсы для мобильных устройств и контролировала реализацию дизайна.",
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
    skills: ["HTML", "CSS", "CMS", "FTP", "Работа с графикой"], // Навыки на русском
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
  { step: "1", title: "Исследование", desc: "Понимание целей и требований.", icon: Target },
  { step: "2", title: "Планирование", desc: "Разработка плана действий.", icon: Briefcase },
  { step: "3", title: "Реализация", desc: "Координация проектных команд.", icon: CheckCircle },
  { step: "4", title: "Оптимизация", desc: "Измерение и улучшение результатов.", icon: Layout },
  { step: "5", title: "Развитие", desc: "Тиражирование удачных механик.", icon: ArrowRight },
};

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