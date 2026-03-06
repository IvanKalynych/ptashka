import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const colors = [
  { name: "Чорний", value: "black", tw: "bg-foreground" },
  { name: "Сірий", value: "grey", tw: "bg-stone" },
  { name: "Молочний", value: "milk", tw: "bg-milk" },
  { name: "Коричневий", value: "brown", tw: "bg-warm-brown" },
];

const FinalCTASection = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <section id="final-cta" className="section-padding bg-charcoal text-center">
      <p className="text-sm tracking-[0.15em] uppercase text-primary-foreground/50 mb-3">Замовити</p>
      <h2 className="text-3xl md:text-4xl font-medium text-primary-foreground mb-3">
        Ваш костюм на кожен день
      </h2>
      <p className="text-primary-foreground/60 mb-10">
        Мінімалістичний. Комфортний. Створений щоб служити довго.
      </p>

      <div className="max-w-md mx-auto text-left space-y-6">
        <div>
          <p className="text-sm text-primary-foreground/70 mb-2">Колір</p>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c.value}
                onClick={() => setSelectedColor(c.value)}
                className={`w-9 h-9 rounded-full ${c.tw} border-2 transition-all ${selectedColor === c.value ? "border-primary-foreground scale-110" : "border-transparent"}`}
                title={c.name}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-primary-foreground/70 mb-2">Розмір</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-4 py-2 text-sm border transition-colors ${selectedSize === s ? "bg-primary-foreground text-primary border-primary-foreground" : "border-primary-foreground/30 text-primary-foreground/70 hover:border-primary-foreground/60"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <p className="text-3xl font-medium text-primary-foreground mb-4">2 250 ₴</p>
          <button className="w-full bg-primary-foreground text-primary py-4 text-sm tracking-wide uppercase font-medium hover:bg-primary-foreground/90 transition-colors">
            Замовити зараз
          </button>
          <p className="text-xs text-primary-foreground/40 mt-3 text-center">
            Доставка Новою Поштою · Накладений платіж або передоплата
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
