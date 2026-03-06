import { Check } from "lucide-react";

const solutions = [
  { title: "Без логотипів", desc: "Чистий мінімалістичний дизайн. Нічого зайвого." },
  { title: "Щільна тканина 360 GSM", desc: "Тришарова бавовняна тканина, яка тримає форму." },
  { title: "Посадка на кожен день", desc: "Продуманий крій, комфортний для роботи, прогулянок і відпочинку." },
  { title: "Мінімалістичний дизайн", desc: "Костюм, який поєднується з будь-чим у вашому гардеробі." },
];

const SolutionSection = () => (
  <section className="section-padding">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Рішення</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-12">
      Ptashka — інший підхід
    </h2>

    <div className="grid sm:grid-cols-2 gap-10">
      {solutions.map((s) => (
        <div key={s.title} className="flex gap-4">
          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SolutionSection;
