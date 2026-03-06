import colorImg from "@/assets/color-options.jpg";

const colors = [
  { name: "Чорний", color: "bg-foreground" },
  { name: "Сірий", color: "bg-stone" },
  { name: "Молочний", color: "bg-milk" },
  { name: "Коричневий", color: "bg-warm-brown" },
];

const ColorOptionsSection = () => (
  <section className="section-padding bg-card">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Кольори</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-12">
      Чотири нейтральних відтінки
    </h2>

    <div className="aspect-[16/9] overflow-hidden mb-8">
      <img src={colorImg} alt="Кольори костюмів Ptashka" className="w-full h-full object-cover" loading="lazy" />
    </div>

    <div className="flex gap-6 justify-center">
      {colors.map((c) => (
        <div key={c.name} className="flex flex-col items-center gap-2">
          <div className={`w-8 h-8 rounded-full ${c.color} border border-border`} />
          <span className="text-xs text-muted-foreground">{c.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ColorOptionsSection;
