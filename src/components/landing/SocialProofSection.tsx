import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";

const testimonials = [
  { img: review1, name: "Марія", text: "Нарешті костюм, який не втрачає форму після прання." },
  { img: review2, name: "Дмитро", text: "Ношу майже щодня. Якість тканини відчувається одразу." },
  { img: review3, name: "Лін", text: "Ідеальна посадка без зайвих логотипів. Саме те, що шукала." },
];

const SocialProofSection = () => (
  <section className="section-padding">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Відгуки</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-12">
      Перші покупці вже оцінили посадку.
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <div key={t.name} className="flex flex-col gap-4">
          <img
            src={t.img}
            alt={t.name}
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <p className="text-foreground/80 leading-relaxed">"{t.text}"</p>
          <p className="text-sm text-muted-foreground">— {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SocialProofSection;
