import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import { Star } from "lucide-react";

const reviews = [
  { img: review1, name: "Марія К.", city: "Київ", text: "Купила сірий — якість просто неймовірна. Після 10 прань виглядає як новий." },
  { img: review2, name: "Дмитро С.", city: "Львів", text: "Нарешті костюм без величезного логотипу. Ношу і на роботу, і на прогулянки." },
  { img: review3, name: "Лін В.", city: "Одеса", text: "Тканина щільна, але не жарка. Дуже приємно носити. Замовила ще коричневий." },
  { img: review4, name: "Олексій Т.", city: "Дніпро", text: "Посадка ідеальна. Худі не підскакує, штани не розтягуються. Топ." },
];

const ReviewsSection = () => (
  <section className="section-padding bg-card">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Відгуки покупців</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-12">
      Що кажуть наші клієнти
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {reviews.map((r) => (
        <div key={r.name} className="flex gap-4 p-6 bg-background border border-border">
          <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" loading="lazy" />
          <div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-3">"{r.text}"</p>
            <p className="text-xs text-muted-foreground">{r.name} · {r.city}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsSection;
