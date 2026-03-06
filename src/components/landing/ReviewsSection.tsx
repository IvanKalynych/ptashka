import { Search, Ruler, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import stitchingImg from "@/assets/stitching-detail.jpg";

const checks = [
  {
    icon: Search,
    title: "Перевірте з'єднання швів",
    instruction: "Візьміть свій костюм і знайдіть місце, де зустрічаються два шви (наприклад, під рукавом або на боці худі). Чи сходяться лінії швів в одну точку?",
    good: "Шви сходяться рівно, без зсувів — ознака якісного крою.",
    bad: "Шви розходяться на 2-5 мм — типово для масового виробництва.",
  },
  {
    icon: Ruler,
    title: "Порівняйте тип швів",
    instruction: "Виверніть костюм нави|виворіт. Подивіться на внутрішні шви. Який тип обробки ви бачите?",
    good: "Оверлочний шов з підгибом (flatlock) — не натирає шкіру, тримає форму.",
    bad: "Простий оверлок без підгибу — може розпускатись та натирати.",
  },
  {
    icon: ArrowRight,
    title: "Натягніть шов",
    instruction: "Візьміть будь-який шов двома руками і злегка розтягніть в сторони. Що відбувається?",
    good: "Шов пружинить, тканина не просвічує — нитки якісні, натяг правильний.",
    bad: "Тканина розходиться, видно просвіти між стібками — шов слабкий.",
  },
];

const ReviewsSection = () => (
  <section className="section-padding bg-card">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Перевірте самі</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-4">
      Візьміть свій костюм і порівняйте
    </h2>
    <p className="text-muted-foreground text-sm mb-12 max-w-lg">
      Зараз ви можете взяти будь-який свій костюм та перевірити якість пошиву. Ось 3 прості тести, які покажуть різницю.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="aspect-square overflow-hidden">
        <img src={stitchingImg} alt="Рівні шви Ptashka крупним планом" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="space-y-6 flex flex-col justify-center">
        {checks.map((check, i) => (
          <div key={check.title} className="border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 flex items-center justify-center bg-foreground text-background text-sm font-medium flex-shrink-0">
                {i + 1}
              </span>
              <h3 className="font-medium text-sm">{check.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{check.instruction}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">{check.good}</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">{check.bad}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center border border-border p-8 max-w-2xl mx-auto">
      <p className="text-lg font-medium mb-2">У Ptashka кожен шов проходить контроль якості</p>
      <p className="text-sm text-muted-foreground">
        Ми використовуємо flatlock-шви, точне суміщення ліній крою та подвійну перевірку кожного виробу перед відправкою.
      </p>
    </div>
  </section>
);

export default ReviewsSection;
