import React from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Filter,
  Layout,
  Palette,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

/**
 * ─── Как подключить ────────────────────────────────────────────────────────
 * 1. Положите этот файл в src/pages/CaseAudiometr.tsx
 * 2. Картинки (before-*.png / after-*.png) — в public/cases/audiometr/
 * 3. Добавьте маршрут в src/app/router.tsx, например:
 *      { path: "/cases/audiometr", element: <CaseAudiometr /> }
 * 4. На карточку проекта на Home/Projects повесьте ссылку на "/cases/audiometr"
 * ────────────────────────────────────────────────────────────────────────────
 */

const IMG = "/cases/audiometr"; // поменяйте на свой путь, если положите иначе

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-[#0EA5A4] mb-3">
      {children}
    </div>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-6 ${className}`}>
      {children}
    </h2>
  );
}

const META = [
  { icon: Users, label: "Роль", value: "Digital Project Lead" },
  { icon: Calendar, label: "Период", value: "2025 — 2026" },
  { icon: Target, label: "Клиент", value: "audiometr.ru" },
];

const GOALS = [
  {
    icon: Palette,
    title: "Устаревший фирменный стиль",
    desc: "Дизайн 2013 года: градиентный баннер, узкий каталог-список, отсутствие визуальной иерархии и доверия к бренду.",
  },
  {
    icon: Smartphone,
    title: "Нет адаптива",
    desc: "Сайт не работал на мобильных устройствах и планшетах — а именно оттуда шла всё большая доля трафика.",
  },
  {
    icon: Filter,
    title: "Сложная навигация по каталогу",
    desc: "Более 50 моделей аудиометров и импедансометров были свалены в один список без фильтров по бренду и функционалу.",
  },
];

const ACTIONS = [
  {
    step: "01",
    title: "Ребрендинг и визуальный язык",
    desc: "Обновили логотип и цветовую палитру: тёплый красный акцент вместо устаревшего бирюзово-оранжевого градиента, больше воздуха, чёткая типографика.",
  },
  {
    step: "02",
    title: "Каталог с фильтрацией",
    desc: "Перепроектировали структуру каталога: фильтры по производителю (Interacoustics, Inventis, Sibelmed, Maico и др.) и по функционалу устройства — клинические, скрининговые, импедансометры.",
  },
  {
    step: "03",
    title: "Карточка товара",
    desc: "Ввели единый шаблон карточки: характеристики, комплектация, похожие товары, чёткий призыв к действию «Запросить КП» вместо скрытых цен без контекста.",
  },
  {
    step: "04",
    title: "Экспертный контент",
    desc: "Добавили раздел «Статьи для специалистов» и «Новости аудиологии» — это укрепило позиционирование компании как экспертного игрока рынка, а не просто витрины.",
  },
  {
    step: "05",
    title: "Полная адаптивность",
    desc: "Собрали интерфейс по единой сетке для десктопа, планшета и мобильного — каталог, фильтры и карточки товара одинаково удобны на любом экране.",
  },
];

const RESULTS = [
  { icon: TrendingUp, value: "100%", label: "адаптивный интерфейс на всех устройствах" },
  { icon: Layout, value: "50+", label: "моделей аккуратно структурированы по фильтрам" },
  { icon: CheckCircle, value: "3", label: "новых раздела: статьи, новости, доверие клиентов" },
];

function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "До",
  afterLabel = "После",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
      <div>
        <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#9CA3AF] bg-[#F3F4F6] px-2.5 py-1 rounded-full mb-3">
          {beforeLabel}
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white">
          <img src={beforeSrc} alt={beforeLabel} className="w-full h-auto object-cover object-top" />
        </div>
      </div>
      <div>
        <div className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-[#0EA5A4] px-2.5 py-1 rounded-full mb-3">
          {afterLabel}
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#0EA5A4]/40 bg-white shadow-sm">
          <img src={afterSrc} alt={afterLabel} className="w-full h-auto object-cover object-top" />
        </div>
      </div>
    </div>
  );
}

export default function CaseAudiometr() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <Link
            to="/cases"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B7280] hover:text-[#0EA5A4] transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Все кейсы
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {["Редизайн", "UX", "B2B каталог", "Медицинское оборудование"].map((t) => (
              <span
                key={t}
                className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-full text-[#6B7280]"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] leading-[1.1] tracking-tight mb-5 max-w-3xl">
            Редизайн сайта audiometr.ru: обновление фирменного стиля и улучшение UX
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed max-w-2xl mb-10">
            Официальный дистрибьютор аудиометрического оборудования в России нуждался в сайте,
            который выглядит и работает так же профессионально, как и его продукция.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-2">
            {META.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 bg-white rounded-2xl border border-[#E5E7EB] px-4 sm:px-5 py-4">
                <div className="w-9 h-9 rounded-xl bg-[#E0F2F2] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#0EA5A4]" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] font-medium">{label}</div>
                  <div className="text-sm font-bold text-[#1F2937]">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero visual: before/after homepage */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <BeforeAfter
            beforeSrc={`${IMG}/before-1-old-2013.png`}
            afterSrc={`${IMG}/after-1-home.png`}
            beforeLabel="До · 2013"
            afterLabel="После · 2026"
          />
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
            <div>
              <SectionLabel>Задача</SectionLabel>
              <SectionHeading className="mb-5">
                Сайту больше десяти лет — и это было видно с первого экрана
              </SectionHeading>
              <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
                Компания официально представляет в России несколько крупных производителей
                аудиометрического оборудования, но сайт не отражал этот статус. Устаревшая графика,
                отсутствие мобильной версии и запутанный каталог мешали как новым клиентам, так и
                отделу продаж, который ежедневно отправлял ссылки на карточки товаров.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {GOALS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 sm:gap-4 bg-[#F7F8FA] rounded-2xl p-4 sm:p-5 border border-[#E5E7EB]"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E0F2F2] flex items-center justify-center">
                    <Icon size={17} className="text-[#0EA5A4]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1F2937] text-sm mb-0.5 sm:mb-1">{title}</div>
                    <div className="text-xs sm:text-sm text-[#6B7280]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Что было сделано</SectionLabel>
          <SectionHeading className="mb-10 sm:mb-14">Пять шагов от старого сайта к новому</SectionHeading>

          <div className="relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-[#E5E7EB]" />
            <div className="space-y-6 sm:space-y-8">
              {ACTIONS.map(({ step, title, desc }) => (
                <div key={step} className="relative pl-12 sm:pl-14">
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-white border-2 border-[#0EA5A4] flex items-center justify-center text-xs font-black text-[#0EA5A4] z-10">
                    {step}
                  </div>
                  <div className="bg-white rounded-2xl border border-[#E5E7EB] p-4 sm:p-5">
                    <h3 className="font-extrabold text-[#1F2937] text-sm sm:text-base mb-1.5">{title}</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog before/after */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Каталог</SectionLabel>
          <SectionHeading className="mb-8 sm:mb-10">
            От сплошного списка — к каталогу с фильтрами
          </SectionHeading>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Более 50 моделей теперь можно отфильтровать по производителю и по функциональному
            назначению — клиент находит нужный аудиометр за пару кликов, а не листает список сверху вниз.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
            <img src={`${IMG}/after-2-catalog.png`} alt="Каталог после редизайна" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Product page */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Карточка товара</SectionLabel>
          <SectionHeading className="mb-8 sm:mb-10">
            Единый шаблон: характеристики, комплектация, похожие товары
          </SectionHeading>
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white">
            <img src={`${IMG}/after-3-product.png`} alt="Карточка товара после редизайна" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Responsive */}
      <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 lg:gap-4 items-center">
            <div className="relative z-10 lg:pr-6">
              <SectionLabel>Адаптивность</SectionLabel>
              <SectionHeading className="mb-4">Один интерфейс — любой экран</SectionHeading>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-md">
                Каталог, фильтры и карточки товара выстроены по единой сетке и одинаково удобны
                на десктопе, планшете и мобильном — интерфейс адаптируется под любой экран без потери
                в удобстве.
              </p>
            </div>
            <div className="relative lg:-ml-10 xl:-ml-16">
              <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#F7F8FA]">
                <img
                  src={`${IMG}/after-4-responsive.png`}
                  alt="Адаптивная вёрстка на разных устройствах"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#1F2937]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider text-[#0EA5A4] mb-3">Результат</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Сайт, который соответствует статусу компании
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {RESULTS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 text-center flex flex-col items-center"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0EA5A4]/20 border border-[#0EA5A4]/30 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#0EA5A4]" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                <div className="text-sm text-white/60 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next case / back */}
      <section className="py-14 sm:py-16 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link
            to="/cases"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B7280] hover:text-[#0EA5A4] transition-colors"
          >
            <ArrowLeft size={15} /> Все кейсы
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0EA5A4] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0d9190] transition-colors text-sm"
          >
            Обсудить похожий проект <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
