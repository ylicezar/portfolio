import React from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bot,
  BookOpen,
  Calendar,
  ShoppingCart,
  Smartphone,
  Target,
  Users,
} from "lucide-react";

const IMG = "/cases/interacoustics";

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
  { icon: Calendar, label: "Период", value: "2025 – сейчас" },
  { icon: Target, label: "Сайт", value: "interacoustics.audio" },
];

const GOALS = [
  {
    icon: Award,
    title: "Подтвердить статус официального дистрибьютора",
    desc: "Компания официально представляет Interacoustics в России — сайт должен был выглядеть и работать на уровне международного производителя, а не типовой B2B-визитки.",
  },
  {
    icon: BookOpen,
    title: "Стать экспертным источником для врачей",
    desc: "Аудиологи и сурдологи выбирают оборудование по методической грамотности поставщика, а не по рекламе — нужен был раздел с профессиональными материалами, а не просто каталог.",
  },
  {
    icon: ShoppingCart,
    title: "Провести посетителя к заявке",
    desc: "У каждой категории оборудования, расходников и карточки товара должен быть понятный следующий шаг — «Заказать КП» или «Купить», без блуждания по сайту.",
  },
];

const ACTIONS = [
  {
    step: "01",
    title: "Каталог по категориям оборудования",
    desc: "Разделили технику на аудиометры, импедансометры, системы отоакустической эмиссии и видеонистагмографии — с карточками, ценой по запросу и кнопками «Подробнее» и «Купить» на каждой позиции.",
  },
  {
    step: "02",
    title: "Карточка товара с прямым действием",
    desc: "Для каждого прибора (например, OtoRead) собрали единый шаблон: описание, преимущества, технические характеристики и кнопка «Заказать КП» — вместо скрытых цен без контекста.",
  },
  {
    step: "03",
    title: "Отдельный раздел расходных материалов",
    desc: "Вынесли кабели, вкладыши, телефоны и термобумагу в собственный каталог с фильтром по совместимой модели прибора: AC40, AT235h, Titan и другим.",
  },
  {
    step: "04",
    title: "Академия Interacoustics — экспертный контент",
    desc: "Запустили раздел со статьями для специалистов: сравнение методов диагностики (ОАЭ и автоматизированная КСВП, DPOAE и TEOAE), разбор терминов и оборудования — языком, понятным практикующему аудиологу.",
  },
  {
    step: "05",
    title: "Адаптивность на всех устройствах",
    desc: "Собрали интерфейс по единой сетке для десктопа, планшета и телефона — каталог, фильтры и формы заявки одинаково быстро работают на любом экране.",
  },
];

const RESULTS = [
  { icon: Bot, value: "2", label: "статьи «Академии» попали в ИИ-ответы Яндекса в первый месяц после публикации" },
  { icon: ShoppingCart, value: "100%", label: "страниц каталога и товаров с понятным призывом к действию" },
  { icon: Smartphone, value: "100%", label: "адаптивная вёрстка на десктопе, планшете и телефоне" },
];

function Gallery({ srcs, labels }: { srcs: string[]; labels: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {srcs.map((src, i) => (
        <div key={src}>
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-[#0EA5A4] px-2.5 py-1 rounded-full mb-3">
            {labels[i]}
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm">
            <img src={src} alt={labels[i]} className="w-full h-auto object-cover object-top" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CaseInteracoustics() {
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
            {["B2B дистрибьютор", "Каталог оборудования", "Экспертный контент", "SEO / GEO", "Конверсия"].map((t) => (
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
                Сайт interacoustics.audio: каталог, экспертный контент и заявки на КП
              </h1>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Официальный сайт дистрибьютора аудиологического оборудования Interacoustics в России —
                каталог с фильтрами по сериям приборов, карточки товаров с быстрым заказом КП и раздел
                «Академия» с профессиональными материалами для аудиологов и сурдологов.
              </p>
            </div>
            <div>
              <img
                src={`${IMG}/after-5-responsive.png`}
                alt="Адаптивная вёрстка сайта на десктопе, планшете и телефоне"
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

      {/* Challenge */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
            <div>
              <SectionLabel>Задача</SectionLabel>
              <SectionHeading className="mb-5">
                Совместить статус экспертного дистрибьютора и понятный путь к заявке
              </SectionHeading>
              <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
                Interacoustics — мировой производитель диагностического оборудования для слуха и
                равновесия, а компания-дистрибьютор официально представляет его в России. Сайту
                нужно было решать две задачи одновременно: говорить с аудиологами на профессиональном
                языке и при этом вести любого посетителя к понятному следующему шагу — заявке на КП
                или покупке.
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

      {/* Screenshots gallery */}
      <section className="pt-[18.5px] sm:pt-[22.5px] md:pt-[26.5px] pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Каталог и карточка товара</SectionLabel>
          <SectionHeading className="mb-8 sm:mb-10">
            Оборудование, расходники и товар — в едином визуальном языке
          </SectionHeading>
          <Gallery
            srcs={[`${IMG}/after-1-home.webp`, `${IMG}/after-2-catalog.webp`, `${IMG}/after-3-product.webp`]}
            labels={["Главная страница", "Каталог расходных материалов", "Карточка товара OtoRead"]}
          />
        </div>
      </section>

      {/* Academy */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Академия Interacoustics</SectionLabel>
          <SectionHeading className="mb-5 sm:mb-6">
            Раздел, который делает сайт экспертным, а не только витриной
          </SectionHeading>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Написали материалы о методах диагностики слуха — сравнение ОАЭ и автоматизированной КСВП,
            разбор понятий вроде широкополосной абсорбции — языком, понятным практикующему аудиологу,
            а не рекламным описанием прибора. Каждая статья опирается на источники и завершается
            карточками релевантного оборудования.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm">
            <img src={`${IMG}/after-4-academy.webp`} alt="Статья раздела «Академия Interacoustics»" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* AI mentions — highlighted block */}
      <section className="pt-[18.5px] sm:pt-[22.5px] md:pt-[26.5px] pb-16 sm:pb-20 md:pb-24 bg-[#0F2E2D]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5EEAD4] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
              <Bot size={13} /> Экспертный контент в действии
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Через месяц статьи «Академии» стали источником для ответов ИИ
            </h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Материалы писали не для галочки, а как ответ на реальные профессиональные вопросы —
              «DPOAE и TEOAE: какой метод выбрать» и «Что такое широкополосная абсорбция». Уже через
              месяц после публикации Алиса (Яндекс) начала цитировать статьи interacoustics.audio как
              источник в быстрых ИИ-ответах — раньше, чем сайт успел набрать позиции в обычной
              органической выдаче.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              { src: `${IMG}/ai-mention-1.webp`, caption: "Быстрый ответ Алисы AI · запрос «DPOAE и TEOAE: какой метод выбрать?»" },
              { src: `${IMG}/ai-mention-2.webp`, caption: "Быстрый ответ Алисы AI · запрос «Что такое широкополосная абсорбция»" },
            ].map(({ src, caption }) => (
              <div key={src}>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white shadow-lg">
                  <img src={src} alt={caption} className="w-full h-auto" />
                </div>
                <p className="text-xs text-white/50 mt-3 text-center leading-relaxed">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Что было сделано</SectionLabel>
          <SectionHeading className="mb-10 sm:mb-14">Пять шагов к экспертному сайту с понятной конверсией</SectionHeading>

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

      {/* Results */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#1F2937]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider text-[#0EA5A4] mb-3">Результат</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Сайт, который одновременно продаёт и учит
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
