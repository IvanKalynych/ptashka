import heroImg from "@/assets/hero-tracksuit.jpg";
import { Check, Star, Truck, RefreshCw, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end md:items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Мінімалістичний костюм Ptashka на моделі"
          className="w-full h-full object-cover"
          loading="eager" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-8 md:pb-24 w-full max-w-3xl">
        {/* Social proof badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-1.5 mb-6">
          <div className="flex -space-x-0.5">
            {[...Array(5)].map((_, i) =>
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            )}
          </div>
          <span className="text-primary-foreground/80 text-xs font-medium">
            1 200+ задоволених клієнтів
          </span>
        </div>

        {/* Headline — Problem + Solution */}
        <h1 className="text-[1.75rem] md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-[1.15] mb-4 tracking-tight">
          Преміум костюм без логотипів
          <span className="block text-primary-foreground/60 text-xl md:text-3xl lg:text-4xl font-normal mt-2">
            за ціною, яку ви заслуговуєте
          </span>
        </h1>

        {/* Subheadline */}
        

        

        {/* Bullet benefits — pain-focused */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
          {[
          "Не скочується — гарантія на 30 прань",
          "Не сідає після прання",
          "Зручний і стоячи, і сидячи",
          "Без видимих логотипів і зайвого"].
          map((item) =>
          <li key={item} className="flex items-start gap-2 text-primary-foreground/90 text-sm">
              <Check className="w-4 h-4 text-accent-foreground mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          )}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center gap-5 flex-wrap mb-6">
          <button
            onClick={scrollToOrder}
            className="group relative overflow-hidden bg-accent text-accent-foreground px-10 py-4 text-sm tracking-wide uppercase font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            <span className="relative z-10">Замовити зараз</span>
          </button>
          <div className="flex flex-col">
            <span className="text-primary-foreground text-3xl font-semibold tracking-tight leading-none">2 250 ₴</span>
            <span className="text-primary-foreground/40 text-xs mt-1">повний костюм · худі + штани</span>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-primary-foreground/50 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" />
            Доставка Новою Поштою 1–3 дні
          </span>
          <span className="inline-flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" />
            Обмін/повернення 14 днів
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Гарантія антипілінг
          </span>
        </div>
      </div>
    </section>);

};

export default HeroSection;