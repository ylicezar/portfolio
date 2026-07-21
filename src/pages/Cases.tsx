import { Link } from "react-router";
import { ArrowRight, Calendar, Target, Users } from "lucide-react";

const CASES = [
  {
    id: "audiometr",
    image: "/audiometr.webp",
    title: "Редизайн сайта audiometr.ru",
    period: "2021",
    tags: ["Редизайн", "UX", "B2B каталог"],
    summary:
      "Обновили фирменный стиль, собрали каталог из 50+ моделей с фильтрами и сделали сайт полностью адаптивным.",
    link: "/cases/audiometr",
  },
  {
    id: "medrx-med",
    image: "/medrx-med.webp",
    title: "Создание сайта medrx-med.ru",
    period: "2025 – сейчас",
    tags: ["MVP за 7 дней", "Tilda"],
    summary:
      "Собрали на Tilda сайт-каталог для американского производителя MedRx. Быстрый запуск под B2B-продажи медицинского аудиологического оборудования.",
    link: "/cases/medrx",
  },
  {
    id: "deti-klinika",
    image: "/detyrzd.png",
    title: "Сайт детской клиники «РЖД-Медицина»",
    period: "2023 – сейчас",
    tags: ["Создание сайта", "UI", "UX", "1C-Битрикс"],
    summary:
      "Создали с нуля сайт с каталогом врачей, услуг и комплексных программ, онлайн-записью и адаптивной вёрсткой.",
    link: "/cases/deti-klinika",
  },
  {
    id: "interacoustics",
    image: "/audio.webp",
    title: "Сайт interacoustics.audio",
    period: "2025 – сейчас",
    tags: ["Стратегия", "Дизайн", "Tilda"],
    summary:
      "Запустили сайт официального дистрибьютора: каталог оборудования, карточки с заказом КП и раздел «Академия» с экспертным контентом.",
    link: "/cases/interacoustics",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-wider text-[#0EA5A4] mb-3">
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-6">
      {children}
    </h1>
  );
}

function CaseCard({ item }: { item: (typeof CASES)[0] }) {
  return (
    <Link to={item.link} className="group block">
      <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden hover:shadow-md hover:border-[#0EA5A4]/30 transition-all flex flex-col h-full">
        <div className="h-44 sm:h-48 bg-[#E0F2F2] overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-0.5 bg-[#F7F8FA] border border-[#E5E7EB] rounded-full text-[#6B7280]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-extrabold text-[#1F2937] text-base leading-snug mb-2">
            {item.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mb-3">
            <Calendar size={13} />
            {item.period}
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed mb-5 flex-1">
            {item.summary}
          </p>
          <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0EA5A4] group-hover:text-[#0d9190] transition-colors">
            Смотреть кейс
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Cases() {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 bg-[#F7F8FA]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionLabel>Портфолио</SectionLabel>
        <SectionHeading>Кейсы</SectionHeading>
        <p className="text-[#6B7280] leading-relaxed max-w-2xl mb-10 sm:mb-14">
          Подборка проектов в сфере здравоохранения и медицинского оборудования <br />от редизайна
          существующих сайтов до создания новых с нуля.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {CASES.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex items-center gap-3 bg-white rounded-2xl border border-[#E5E7EB] px-5 py-4 max-w-md">
          <div className="w-9 h-9 rounded-xl bg-[#E0F2F2] flex items-center justify-center flex-shrink-0">
            <Users size={16} className="text-[#0EA5A4]" />
          </div>
          <div className="text-sm text-[#6B7280]">
            Ищете подрядчика для похожей задачи?{" "}
            <a href="mailto:79260655851@ya.ru" className="font-semibold text-[#0EA5A4] hover:text-[#0d9190]">
              Напишите мне
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}