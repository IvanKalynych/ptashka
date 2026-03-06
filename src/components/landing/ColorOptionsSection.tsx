import { useState } from "react";
import colorImg from "@/assets/color-options.jpg";
import blackImg from "@/assets/tracksuit-black.jpg";
import greyImg from "@/assets/tracksuit-grey.jpg";
import milkImg from "@/assets/tracksuit-milk.jpg";
import brownImg from "@/assets/tracksuit-brown.jpg";

const colors = [
  { name: "Чорний", value: "black", color: "bg-foreground", img: blackImg },
  { name: "Сірий", value: "grey", color: "bg-stone", img: greyImg },
  { name: "Молочний", value: "milk", color: "bg-milk", img: milkImg },
  { name: "Коричневий", value: "brown", color: "bg-warm-brown", img: brownImg },
];

const ColorOptionsSection = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleOrder = () => {
    const ctaSection = document.getElementById("final-cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
      // Set color in FinalCTA via custom event
      window.dispatchEvent(new CustomEvent("ptashka-select-color", { detail: selectedColor }));
      // Focus name input after scroll
      setTimeout(() => {
        const nameInput = document.getElementById("order-name");
        nameInput?.focus();
      }, 800);
    }
  };

  const currentImg = selectedColor
    ? colors.find((c) => c.value === selectedColor)?.img
    : colorImg;

  return (
    <section className="section-padding bg-card">
      <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Кольори</p>
      <h2 className="text-2xl md:text-3xl font-medium mb-12">
        Чотири нейтральних відтінки
      </h2>

      <div className={`${selectedColor ? "aspect-[3/4] max-w-md mx-auto" : "aspect-[16/9]"} overflow-hidden mb-8 transition-all duration-500`}>
        <img
          src={currentImg}
          alt={selectedColor ? `Костюм Ptashka — ${colors.find(c => c.value === selectedColor)?.name}` : "Кольори костюмів Ptashka"}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex gap-6 justify-center">
        {colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedColor(selectedColor === c.value ? null : c.value)}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-10 h-10 rounded-full ${c.color} border-2 transition-all ${
                selectedColor === c.value
                  ? "border-foreground scale-110"
                  : "border-border hover:scale-105"
              }`}
            />
            <span className={`text-xs transition-colors ${
              selectedColor === c.value ? "text-foreground font-medium" : "text-muted-foreground"
            }`}>
              {c.name}
            </span>
          </button>
        ))}
      </div>

      {selectedColor && (
        <div className="mt-8 text-center animate-fade-in">
          <button
            onClick={handleOrder}
            className="bg-foreground text-background px-10 py-4 text-sm tracking-wide uppercase font-medium hover:bg-foreground/90 transition-colors"
          >
            Замовити в кольорі «{colors.find(c => c.value === selectedColor)?.name}»
          </button>
        </div>
      )}
    </section>
  );
};

export default ColorOptionsSection;
