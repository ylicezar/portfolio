import React from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Code2,
  Filter,
  Layout,
  Palette,
  Rocket,
  Search,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";


const IMG = "/cases/audiometr"; 

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
  { icon: Users, label: "Роль", value: "Руководитель проекта" },
  { icon: Calendar, label: "Период", value: "2021" },
  { icon: Target, label: "Сайт", value: "audiometr.ru" },
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
    desc: "Сайт не работал на мобильных устройствах и планшетах — а оттуда шла весомая доля трафика.",
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
    desc: "Перепроектировали структуру каталога: фильтры по производителю (Interacoustics, Inventis, Sibelmed, Maico и др.) и по функционалу устройства – клинические, скрининговые, диагностические.",
  },
  {
    step: "03",
    title: "Карточка товара",
    desc: "Ввели единый шаблон карточки: характеристики, тесты, комплектация, похожие товары, чёткий призыв к действию «Запросить КП» вместо скрытых цен без контекста.",
  },
  {
    step: "04",
    title: "Экспертный контент",
    desc: "Добавили раздел «Статьи для специалистов» и «Новости аудиологии» – это укрепило позиционирование компании как экспертного игрока рынка, а не просто витрины.",
  },
  {
    step: "05",
    title: "Полная адаптивность",
    desc: "Собрали интерфейс по единой сетке для десктопа, планшета и мобильного – каталог, фильтры и карточки товара одинаково удобны на любом экране.",
  },
];

const RESULTS = [
  { icon: TrendingUp, value: "100%", label: "адаптивный интерфейс на всех устройствах" },
  { icon: Layout, value: "50+", label: "моделей аккуратно структурированы по фильтрам" },
  { icon: CheckCircle, value: "3", label: "новых раздела: статьи, новости, доверие клиентов" },
];

const PHASE_STYLES: Record<string, { band: string; tagBg: string; tagText: string; border: string; dot: string }> = {
  gray: { band: "bg-[#6B7280]", tagBg: "bg-[#F3F4F6]", tagText: "text-[#4B5563]", border: "border-l-[#9CA3AF]", dot: "bg-[#9CA3AF]" },
  teal: { band: "bg-[#0EA5A4]", tagBg: "bg-[#E0F2F2]", tagText: "text-[#0EA5A4]", border: "border-l-[#0EA5A4]", dot: "bg-[#0EA5A4]" },
  amber: { band: "bg-[#F59E0B]", tagBg: "bg-[#FEF3E2]", tagText: "text-[#B45309]", border: "border-l-[#F59E0B]", dot: "bg-[#F59E0B]" },
  blue: { band: "bg-[#2563EB]", tagBg: "bg-[#EFF4FE]", tagText: "text-[#1D4ED8]", border: "border-l-[#2563EB]", dot: "bg-[#2563EB]" },
};

const ROADMAP = [
  {
    sprint: "Спринт 1",
    dates: "1–12 марта",
    weeks: "Недели 1–2",
    phase: "Аудит",
    color: "gray",
    icon: Search,
    tasks: [
      { title: "Технический аудит Drupal 6", desc: "Модули, производительность, уязвимости ядра" },
      { title: "SEO-аудит и карта URL", desc: "Позиции в Яндекс/Google, сбор метаданных" },
      { title: "UX/UI-аудит для B2B", desc: "Поведение пользователей, интервью с продажами" },
    ],
  },
  {
    sprint: "Спринт 2",
    dates: "15–26 марта",
    weeks: "Недели 3–4",
    phase: "Проектирование",
    color: "teal",
    icon: Palette,
    tasks: [
      { title: "Информационная архитектура", desc: "Каталог оборудования, навигация, фильтры" },
      { title: "Дизайн-система и UI Kit", desc: "Палитра, типографика, адаптивная версия" },
      { title: "Прототипы ключевых экранов", desc: "Главная, каталог, карточка товара" },
    ],
  },
  {
    sprint: "Спринт 3",
    dates: "29 марта – 9 апреля",
    weeks: "Недели 5–6",
    phase: "Реализация",
    color: "amber",
    icon: Code2,
    tasks: [
      { title: "Миграция ядра Drupal 6 → 7", desc: "Бэкапы, update.php, новая структура БД" },
      { title: "Перенос функционала и вёрстка", desc: "Аналоги модулей, интеграция шаблона" },
      { title: "Миграция контента и SEO", desc: "Модуль Migrate, 301-редиректы, sitemap" },
    ],
  },
  {
    sprint: "Спринт 4",
    dates: "12–23 апреля",
    weeks: "Недели 7–8",
    phase: "Запуск",
    color: "blue",
    icon: Rocket,
    tasks: [
      { title: "Лидогенерация и контент", desc: "Формы заявок, интеграция с CRM" },
      { title: "Тестирование и релиз", desc: "Юзабилити-тесты, перенос на хостинг" },
      { title: "Пострелизный мониторинг", desc: "Контроль позиций и редиректов" },
    ],
  },
];

function BeforeAfter({
  beforeSrcs,
  afterSrc,
  beforeLabel = "До",
  afterLabel = "Сейчас",
}: {
  beforeSrcs: string[];
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
        <div className="space-y-4 sm:space-y-6">
          {beforeSrcs.map((src, i) => (
            <div key={src} className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white">
              <img src={src} alt={`${beforeLabel} ${i + 1}`} className="w-full h-auto object-cover object-top" />
            </div>
          ))}
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
            {["Редизайн", "UX", "UI", "B2B каталог", "Медицинское оборудование"].map((t) => (
              <span
                key={t}
                className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-full text-[#6B7280]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center mb-10">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-[#1F2937] leading-[1.1] tracking-tight mb-5">
                Редизайн сайта audiometr.ru: обновление фирменного стиля и улучшение UX
              </h1>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Сайт официального дистрибьютора аудиометрического оборудования от крупных международных брендом в России.
              </p>
            </div>
            <div>
              <img
                src={`${IMG}/after-4-responsive.png`}
                alt="Адаптивная вёрстка на разных устройствах"
                className="w-full h-auto"
              />
            </div>
          </div>

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
            beforeSrcs={[`${IMG}/before-1-old-2013.png`, `${IMG}/before-2-old-2015.png`, `${IMG}/before-3-old-2015.png`]}
            afterSrc={`${IMG}/after-1-home.png`}
            beforeLabel="До · 2021"
            afterLabel="После · 2022-2026"
          />
        </div>
      </section>

      {/* Challenge */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
            <div>
              <SectionLabel>Задача</SectionLabel>
              <SectionHeading className="mb-5">
                Увеличить продажи и сформировать фирменный стиль достойный статуса компании
              </SectionHeading>
              <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
                "Медафарм" официально представляет в России несколько крупных производителей
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

      {/* Roadmap */}
      <section className="pt-[18.5px] sm:pt-[22.5px] md:pt-[26.5px] pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Дорожная карта</SectionLabel>
          <SectionHeading className="mb-2">Как прошёл проект: 2 месяца, 4 спринта</SectionHeading>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mb-10 sm:mb-14">
            Agile-план редизайна и миграции с Drupal 6 на Drupal 7 — от аудита до запуска и
            пострелизного мониторинга. Март – апрель 2021.
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {ROADMAP.map(({ sprint, dates, weeks, phase, color, icon: Icon, tasks }) => {
                const style = PHASE_STYLES[color];
                return (
                  <div key={sprint}>
                    <div className={`${style.band} text-white text-xs font-bold text-center py-2 rounded-lg mb-4`}>
                      {sprint}
                    </div>
                    <div className="hidden lg:flex justify-center mb-2">
                      <span className={`w-3 h-3 rounded-full ${style.dot} ring-4 ring-white`} />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-xs font-bold text-[#1F2937]">{dates}</div>
                      <div className="text-[10px] uppercase tracking-wide text-[#9CA3AF] mt-0.5">{weeks}</div>
                    </div>
                    <div className="space-y-3">
                      {tasks.map((t) => (
                        <div
                          key={t.title}
                          className={`bg-[#F7F8FA] rounded-xl border border-[#E5E7EB] border-l-4 ${style.border} p-4`}
                        >
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2 ${style.tagBg} ${style.tagText}`}
                          >
                            <Icon size={11} /> {phase}
                          </span>
                          <div className="font-bold text-[#1F2937] text-sm mb-1">{t.title}</div>
                          <div className="text-xs text-[#6B7280] leading-relaxed">{t.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-10 sm:mt-12 pt-6 border-t border-[#E5E7EB]">
            {[
              { label: "Аудит и анализ", color: "gray" },
              { label: "Проектирование", color: "teal" },
              { label: "Реализация", color: "amber" },
              { label: "Запуск и поддержка", color: "blue" },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-[#6B7280]">
                <span className={`w-2.5 h-2.5 rounded-full ${PHASE_STYLES[color].dot}`} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
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
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-white">
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
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
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

      {/* Results */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#1F2937]">
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
