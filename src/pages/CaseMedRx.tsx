import React from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  Globe,
  LayoutGrid,
  ListTree,
  Package,
  Palette,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const IMG = "/cases/medrx";

// Apple HIG-esque system font stack, kept local to this page only.
const APPLE_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

const RED = "#FF3B30"; // Apple system red — also MedRX's brand red
const INK = "#1D1D1F"; // Apple near-black text
const SUB = "#6E6E73"; // Apple secondary gray text
const HAIRLINE = "rgba(0,0,0,0.08)";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-xs font-semibold uppercase tracking-[0.12em] mb-3"
      style={{ color: RED }}
    >
      {children}
    </div>
  );
}

function Heading({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-3xl md:text-[2.5rem] font-semibold tracking-tight leading-[1.1] mb-6 ${className}`}
      style={{ color: light ? "#FFFFFF" : INK }}
    >
      {children}
    </h2>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full backdrop-blur-xl"
      style={{
        background: "rgba(255,255,255,0.7)",
        border: `1px solid ${HAIRLINE}`,
        color: SUB,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </span>
  );
}

const TAGS = ["Каталог оборудования", "B2B", "MVP за 7 дней", "Локализация EN→RU", "Tilda"];

const META = [
  { icon: Users, label: "Роль", value: "Руководитель проекта" },
  { icon: Calendar, label: "Период", value: "2025 – сейчас" },
];

const GOALS = [
  {
    icon: Clock,
    title: "Минимум времени и ресурсов",
    desc: "Нужно было запустить каталог нового поставщика без затяжного проекта и без привлечения дополнительной команды.",
  },
  {
    icon: Palette,
    title: "Фирменный стиль партнёра",
    desc: "Американский бренд с чёткими red/black гайдлайнами — стиль требовалось перенести на сайт без искажений и компромиссов.",
  },
  {
    icon: Globe,
    title: "Контент только на английском",
    desc: "Все материалы по оборудованию существовали лишь на английском — предстояло перевести и адаптировать их под российский рынок.",
  },
];

const ACTIONS = [
  {
    step: "1",
    icon: ListTree,
    title: "Сбор данных по оборудованию",
    desc: "Собрали полный список моделей бренда — аудиометры, тимпанометры, REM/LSM системы, аксессуары — и сверили номенклатуру.",
  },
  {
    step: "2",
    icon: LayoutGrid,
    title: "Структура каталога",
    desc: "Спроектировали информационную архитектуру сайта: разделы, категории оборудования, карточка товара, наглядное меню.",
  },
  {
    step: "3",
    icon: Sparkles,
    title: "Запуск MVP на Tilda",
    desc: "Собрали и опубликовали рабочую версию сайта за считаные дни — в фирменном red/black стиле бренда, без задержек на разработку.",
  },
  {
    step: "4",
    icon: Globe,
    title: "Локализация контента",
    desc: "После запуска перевели описания приборов и характеристики с английского на русский язык, адаптировали формулировки под рынок.",
  },
  {
    step: "5",
    icon: Package,
    title: "Расходники и аксессуары",
    desc: "Дополнили каталог разделом расходных материалов — чехлы, кабели, гарнитуры и колонки — с фильтрами по типу и совместимости.",
  },
];

const RESULTS = [
  { value: "7 дней", label: "от брифа до запуска рабочего MVP" },
  { value: "99", label: "позиций в каталоге — приборы, аксессуары, расходники" },
  { value: "12", label: "аудиометров вынесены в наглядное визуальное меню" },
];

function ShotCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="rounded-[28px] overflow-hidden"
      style={{
        border: `1px solid ${HAIRLINE}`,
        boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
      }}
    >
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

export default function CaseMedRx() {
  return (
    <div style={{ fontFamily: APPLE_FONT }}>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16" style={{ background: "#F5F5F7" }}>
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <Link
            to="/cases"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mb-8"
            style={{ color: SUB }}
          >
            <ArrowLeft size={15} /> Все кейсы
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {TAGS.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center mb-10">
            <div>
              <h1
                className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] mb-5"
                style={{ color: INK }}
              >
                Сайт-каталог MedRX: запуск нового поставщика за одну неделю
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: SUB }}>
                Каталог оборудования для диагностики слуха американского бренда MedRX — сайт
                на Tilda, собранный с нуля в фирменном red/black стиле партнёра, с наглядным
                меню оборудования и переведённым контентом.
              </p>
            </div>
            <ShotCard src={`${IMG}/after-3-responsive.webp`} alt="Адаптивная вёрстка сайта MedRX на разных устройствах" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {META.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl px-4 sm:px-5 py-4 backdrop-blur-xl"
                style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${HAIRLINE}` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,59,48,0.1)" }}
                >
                  <Icon size={16} style={{ color: RED }} />
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: SUB }}>{label}</div>
                  <div className="text-sm font-semibold" style={{ color: INK }}>{value}</div>
                </div>
              </div>
            ))}

            <a
              href="https://medrx-med.ru"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl px-4 sm:px-5 py-4 backdrop-blur-xl transition-shadow hover:shadow-md"
              style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${HAIRLINE}` }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,59,48,0.1)" }}
              >
                <ExternalLink size={16} style={{ color: RED }} />
              </div>
              <div>
                <div className="text-xs font-medium" style={{ color: SUB }}>Сайт</div>
                <div className="text-sm font-semibold" style={{ color: INK }}>medrx-med.ru</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>Задача</Eyebrow>
              <Heading>Быстро выйти на рынок в стиле нового партнёра</Heading>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: SUB }}>
                Компания начала сотрудничество с американским производителем оборудования для
                диагностики слуха MedRX. Нужно было в кратчайшие сроки и с минимальными ресурсами
                запустить отдельный сайт-каталог, который сразу выглядел бы завершённым продуктом
                и полностью соответствовал фирменному red/black стилю бренда.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {GOALS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl p-4 sm:p-5"
                  style={{ background: "#F5F5F7", border: `1px solid ${HAIRLINE}` }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,59,48,0.1)" }}
                  >
                    <Icon size={17} style={{ color: RED }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: INK }}>{title}</div>
                    <div className="text-xs sm:text-sm" style={{ color: SUB }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Homepage screenshot */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24" style={{ background: "#F5F5F7" }}>
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <Eyebrow>Каталог</Eyebrow>
          <Heading className="mb-4">MVP, который сразу выглядел завершённым продуктом</Heading>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mb-8 sm:mb-10" style={{ color: SUB }}>
            Главная страница объединила все категории оборудования — аудиометры, тимпанометры,
            детскую аудиометрию, HIT+ и REM/LSM — в понятную структуру с крупными карточками
            товаров и прямыми переходами в каталог.
          </p>
          <ShotCard src={`${IMG}/after-1-home.webp`} alt="Главная страница сайта MedRX" />
        </div>
      </section>

      {/* Mega menu spotlight — dark section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4"
              style={{ color: "#FF6961", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              Навигация
            </div>
            <Heading light className="mb-4">
              Меню, по которому видно оборудование, а не только текст
            </Heading>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Для каждой категории — аудиометры, тимпанометры, REM/LSM — собрали визуальное
              меню: фото прибора, короткое описание и переход в карточку в один клик. Из 12
              аудиометров бренда самые ходовые вынесли в быстрый доступ прямо в шапке сайта.
            </p>
          </div>
          <div
            className="rounded-[28px] overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
          >
            <img src={`${IMG}/after-5-menu.png`} alt="Визуальное мега-меню каталога аудиометров MedRX" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* Consumables / filters */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <Eyebrow>Расходные материалы</Eyebrow>
          <Heading className="mb-4">От приборов — к аксессуарам и расходникам</Heading>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mb-8 sm:mb-10" style={{ color: SUB }}>
            После запуска MVP каталог дополнили разделом расходных материалов с фильтрами по
            принадлежности к прибору и по типу — гарнитуры, кабели, колонки, чехлы.
          </p>
          <ShotCard src={`${IMG}/after-2-catalog-filter.webp`} alt="Каталог расходных материалов с фильтрами на сайте MedRX" />
        </div>
      </section>

      {/* Product card */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24" style={{ background: "#F5F5F7" }}>
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <Eyebrow>Карточка товара</Eyebrow>
          <Heading className="mb-4">Понятная структура для каждой позиции каталога</Heading>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mb-8 sm:mb-10" style={{ color: SUB }}>
            Единый шаблон карточки: галерея, характеристики, описание, видеоинструкции и
            сопутствующие материалы — на примере аудиометра AVANT ARC.
          </p>
          <ShotCard src={`${IMG}/after-4-product.webp`} alt="Карточка товара AVANT ARC на сайте MedRX" />
        </div>
      </section>

      {/* Actions timeline */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <Eyebrow>Как прошёл проект</Eyebrow>
          <Heading className="mb-10 sm:mb-14">От брифа до готового MVP за неделю</Heading>

          <div className="space-y-4">
            {ACTIONS.map(({ step, icon: Icon, title, desc }) => (
              <div
                key={step}
                className="flex gap-4 sm:gap-5 items-start rounded-2xl p-4 sm:p-5"
                style={{ background: "#F5F5F7", border: `1px solid ${HAIRLINE}` }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: RED, color: "#FFFFFF" }}
                >
                  {step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={15} style={{ color: RED }} />
                    <h3 className="font-semibold text-sm sm:text-base" style={{ color: INK }}>{title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: SUB }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results — dark spec section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "#FF6961" }}>
              Результат
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-semibold tracking-tight text-white">
              Каталог, запущенный за неделю — и растущий дальше
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {RESULTS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-[28px] p-6 sm:p-7 text-center flex flex-col items-center backdrop-blur-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="text-4xl font-semibold text-white mb-2 tracking-tight">{value}</div>
                <div className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next case / back */}
      <section className="py-14 sm:py-16 bg-white" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link
            to="/cases"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
            style={{ color: SUB }}
          >
            <ArrowLeft size={15} /> Все кейсы
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-colors text-sm text-white"
            style={{ background: RED }}
          >
            Обсудить похожий проект <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
