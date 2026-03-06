import { X } from "lucide-react";

const problems = [
  { title: "Пілінг після прання", desc: "Більшість костюмів починають котитися вже після 5 прань." },
  { title: "Худі стає коротшим", desc: "Неправильний крій призводить до того, що худі сідає і виглядає дешево." },
  { title: "Великі логотипи", desc: "Замість якості бренди продають свій логотип на грудях." },
];

const ProblemSection = () => (
  <section className="section-padding bg-charcoal">
    <p className="text-sm tracking-[0.15em] uppercase text-primary-foreground/50 mb-3">Проблема</p>
    <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-12">
      Чому більшість костюмів розчаровують
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {problems.map((p) => (
        <div key={p.title} className="flex flex-col gap-3">
          <X className="w-5 h-5 text-destructive" />
          <h3 className="text-lg font-medium text-primary-foreground">{p.title}</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProblemSection;
