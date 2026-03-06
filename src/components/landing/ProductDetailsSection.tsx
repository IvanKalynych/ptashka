import fabricImg from "@/assets/fabric-detail.jpg";
import stitchingImg from "@/assets/stitching-detail.jpg";

const details = [
  { img: fabricImg, label: "Тканина 360 GSM", caption: "Тришарова бавовна — щільна, м'яка, тримає форму після прань." },
  { img: stitchingImg, label: "Точне зшивання", caption: "Рівні шви, міцні манжети — кожна деталь продумана для довговічності." },
];

const ProductDetailsSection = () => (
  <section className="section-padding bg-card">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Деталі</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-12">
      Якість у деталях
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {details.map((d) => (
        <div key={d.label}>
          <div className="aspect-square overflow-hidden mb-4">
            <img src={d.img} alt={d.label} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h3 className="font-medium mb-1">{d.label}</h3>
          <p className="text-muted-foreground text-sm">{d.caption}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {[
        ["70% бавовна", "30% поліестер"],
        ["360 GSM", "тришарова тканина"],
        ["S – XXXL", "унісекс розміри"],
        ["30 прань", "гарантія антипілінг"],
      ].map(([big, small]) => (
        <div key={big} className="py-6 border border-border">
          <p className="font-medium text-lg">{big}</p>
          <p className="text-muted-foreground text-xs mt-1">{small}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductDetailsSection;
