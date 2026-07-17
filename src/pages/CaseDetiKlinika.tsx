import React from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Filter,
  Layout,
  ListChecks,
  MapPin,
  MessageSquare,
  Search,
  Smartphone,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";

const IMG = "/cases/deti-klinika";

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
  { icon: Users, label: "Роль", value: "Руководитель отдела контента и веб-разработки" },
  { icon: Calendar, label: "Период", value: "2023 – сейчас" },
  { icon: Target, label: "Сайт", value: "deti.rzd-medicine.ru" },
];

const GOALS = [
  {
    icon: Layout,
    title: "Разветвлённая структура услуг",
    desc: "Более 30 детских специальностей, диагностика, реабилитация, вакцинация и check-up программы нужно было собрать в понятную навигацию, а не в список ссылок.",
  },
  {
    icon: Smartphone,
    title: "Неудобный мобильный сценарий",
    desc: "Большая часть родителей ищет врача и записывается на приём с телефона — меню, каталог врачей и формы записи должны были работать быстро и без лишних кликов.",
  },
  {
    icon: Search,
    title: "Поиск нужного врача и услуги",
    desc: "Каталог из 50+ докторов и десятков услуг требовал фильтров по специальности, ФИО и категории — иначе родитель терялся среди карточек.",
  },
];

const ACTIONS = [
  {
    step: "01",
    title: "Информационная архитектура сайта",
    desc: "Выстроили меню в две колонки по смыслу: диагностика, реабилитация и специалисты — с быстрыми ссылками на вакцинацию, личного врача, услуги на дому и справки для спорта.",
  },
  {
    step: "02",
    title: "Каталог врачей с фильтрами",
    desc: "Сделали страницу «Врачи» с фильтром по специальности и поиском по ФИО, чтобы родитель находил нужного специалиста за несколько секунд, а не листал десятки карточек.",
  },
  {
    step: "03",
    title: "Единый шаблон страницы услуги",
    desc: "Для каждой услуги (например, «Педиатр») собрали одинаковую структуру: цены, карточки врачей, блок онлайн-записи, ответы на частые вопросы и график профилактических осмотров.",
  },
  {
    step: "04",
    title: "Комплексные программы и check-up",
    desc: "Оформили каталог годовых и лимитированных программ по возрастным группам (0–1, 1–3, 3 года, 0–17 лет) с прозрачным сравнением цен и составом услуг.",
  },
  {
    step: "05",
    title: "Доверие и обратная связь",
    desc: "Добавили на главную блок отзывов с четырёх площадок (Яндекс, Zoon, Продокторов, 2ГИС), ленту акций и новостей клиники — это усилило доверие и вернуло посетителей на сайт.",
  },
];

const RESULTS = [
  { icon: Smartphone, value: "100%", label: "адаптивная вёрстка на десктопе, планшете и телефоне" },
  { icon: Stethoscope, value: "50+", label: "врачей в каталоге с фильтром по специальности и ФИО" },
  { icon: ListChecks, value: "9", label: "комплексных программ check-up с разбивкой по возрасту" },
];

function BeforeAfter({
  srcs,
  labels,
}: {
  srcs: string[];
  labels: string[];
}) {
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

export default function CaseDetiKlinika() {
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
            {["Здравоохранение", "UX", "Каталог врачей", "Онлайн-запись", "Адаптивная вёрстка"].map((t) => (
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
                Сайт детской клиники «РЖД-Медицина»: каталог врачей, услуг и онлайн-запись
              </h1>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Сайт детского отделения сети клиник «РЖД-Медицина» — более 30 специальностей,
                комплексные программы наблюдения и запись на приём онлайн без звонков.
              </p>
            </div>
            <div>
              <img
                src={`${IMG}/after-6-responsive.webp`}
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

      {/* Hero visual: homepage + menu */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <BeforeAfter
            srcs={[`${IMG}/after-1-home.webp`, `${IMG}/after-3-menu.webp`]}
            labels={["Главная страница", "Меню услуг"]}
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
                Сделать понятным сайт с десятками услуг и специалистов
              </SectionHeading>
              <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
                Детское отделение «РЖД-Медицина» предлагает больше 30 специальностей, диагностику,
                реабилитацию, вакцинацию и комплексные программы наблюдения по возрасту. Нужно было
                собрать всё это в сайт, где родитель быстро находит врача, услугу и записывается на
                приём — без звонков и долгих поисков по разделам.
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
      <section className="pt-[18.5px] sm:pt-[22.5px] md:pt-[26.5px] pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Что было сделано</SectionLabel>
          <SectionHeading className="mb-10 sm:mb-14">Пять шагов к понятному сайту клиники</SectionHeading>

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

      {/* Doctors catalog */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Каталог врачей</SectionLabel>
          <SectionHeading className="mb-8 sm:mb-10">
            Фильтр по специальности и поиск по ФИО вместо сплошного списка
          </SectionHeading>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Больше 50 врачей клиники теперь можно найти по специальности или фамилии за пару секунд —
            карточка каждого доктора сразу показывает должность, специализацию и степень.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB]">
            <img src={`${IMG}/after-2-doctors.webp`} alt="Страница «Врачи» с фильтрами и поиском" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Комплексные программы</SectionLabel>
          <SectionHeading className="mb-8 sm:mb-10">
            Годовые программы и check-up с разбивкой по возрасту ребёнка
          </SectionHeading>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Собрали каталог программ с табами по возрасту (0–1 год, 1–3 года, 3 года, 0–17 лет),
            понятным составом услуг и прозрачным сравнением цены до и после скидки.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white">
            <img src={`${IMG}/after-4-programs.webp`} alt="Каталог комплексных программ check-up" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Service page template */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <SectionLabel>Страница услуги</SectionLabel>
          <SectionHeading className="mb-8 sm:mb-10">
            Единый шаблон: цены, врачи, запись и ответы на частые вопросы
          </SectionHeading>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Для каждой услуги — например, приёма педиатра — собрали одинаковую структуру: актуальные
            цены, слайдер врачей этого направления, блок онлайн-записи без звонков, а также
            содержательный блок «когда нужно на приём» и график профилактических осмотров.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white">
            <img src={`${IMG}/after-5-service.webp`} alt="Страница услуги «Педиатр» с записью на приём" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Trust block */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel>Доверие и обратная связь</SectionLabel>
              <SectionHeading className="mb-5">Отзывы с четырёх площадок прямо на главной</SectionHeading>
              <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
                Добавили на главную сводный блок отзывов с Яндекс Карт, Zoon, Продокторов и 2ГИС —
                родитель видит реальные оценки клиники, не переходя на сторонние сайты. Рядом —
                актуальные акции и новости клиники, которые обновляются регулярно.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: MessageSquare, title: "Рейтинги 4 площадок", desc: "Яндекс, Zoon, Продокторов, 2ГИС — с рейтингом и отзывами реальных пациентов." },
                { icon: Filter, title: "Акции и скидки", desc: "Отдельный блок с действующими акциями: скидки для многодетных, сотрудников, вакцинация." },
                { icon: MapPin, title: "Контакты и карта", desc: "Адрес, телефон и интерактивная карта проезда — в футере на каждой странице." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E7EB]">
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

      {/* Results */}
      <section className="pt-[37px] sm:pt-[45px] md:pt-[53px] pb-16 sm:pb-20 md:pb-24 bg-[#1F2937]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider text-[#0EA5A4] mb-3">Результат</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Сайт, в котором легко найти врача и записаться на приём
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
