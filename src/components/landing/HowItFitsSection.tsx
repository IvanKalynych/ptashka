import standingImg from "@/assets/lifestyle-standing.jpg";
import sittingImg from "@/assets/lifestyle-sitting.jpg";
import walkingImg from "@/assets/lifestyle-walking.jpg";

const fits = [
  { img: standingImg, label: "Стоячи" },
  { img: sittingImg, label: "Сидячи" },
  { img: walkingImg, label: "На прогулянці" },
];

const HowItFitsSection = () => (
  <section className="section-padding">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Як сидить</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-12">
      Комфорт у будь-якій ситуації
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {fits.map((f) => (
        <div key={f.label}>
          <div className="aspect-[3/4] overflow-hidden mb-3">
            <img src={f.img} alt={f.label} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <p className="text-sm text-muted-foreground">{f.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItFitsSection;
