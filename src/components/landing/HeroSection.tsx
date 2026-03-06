import heroImg from "@/assets/hero-tracksuit.jpg";
import { Check } from "lucide-react";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end md:items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Мінімалістичний костюм Ptashka на моделі"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/10" />
      </div>

      <div className="relative z-10 section-padding pb-20 md:pb-24 w-full max-w-3xl">
        <p className="text-primary-foreground/70 text-sm tracking-[0.2em] uppercase mb-4">Ptashka</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-4">
          Костюм, який хочеться носити кожного дня
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg">
          Мінімальний дизайн. Без логотипів. Просто ідеальна посадка.
        </p>

        <ul className="space-y-2 mb-8">
          {["Щільна тканина 360 GSM", "Гарантія антипілінг на 30 прань", "Мінімалістичний дизайн на кожен день"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
              <Check className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 flex-wrap">
          <button
            onClick={scrollToOrder}
            className="group relative overflow-hidden bg-accent text-accent-foreground px-10 py-4 text-sm tracking-wide uppercase font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <span className="relative z-10">Купити костюм</span>
          </button>
          <span className="text-primary-foreground text-3xl font-semibold tracking-tight">2 250 ₴</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
