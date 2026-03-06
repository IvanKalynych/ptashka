const sizes = [
  { size: "S", chest: "96", length: "68", sleeve: "62" },
  { size: "M", chest: "100", length: "70", sleeve: "63" },
  { size: "L", chest: "106", length: "72", sleeve: "64" },
  { size: "XL", chest: "112", length: "74", sleeve: "65" },
  { size: "XXL", chest: "118", length: "76", sleeve: "66" },
  { size: "XXXL", chest: "124", length: "78", sleeve: "67" },
];

const SizeGuideSection = () => (
  <section className="section-padding">
    <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Розміри</p>
    <h2 className="text-2xl md:text-3xl font-medium mb-8">
      Таблиця розмірів
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full max-w-2xl text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 font-medium">Розмір</th>
            <th className="text-left py-3 font-medium">Груди (см)</th>
            <th className="text-left py-3 font-medium">Довжина (см)</th>
            <th className="text-left py-3 font-medium">Рукав (см)</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((s) => (
            <tr key={s.size} className="border-b border-border/50">
              <td className="py-3 font-medium">{s.size}</td>
              <td className="py-3 text-muted-foreground">{s.chest}</td>
              <td className="py-3 text-muted-foreground">{s.length}</td>
              <td className="py-3 text-muted-foreground">{s.sleeve}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-sm text-muted-foreground mt-6">
      Не впевнені у розмірі? Напишіть нам в{" "}
      <a href="https://instagram.com/ptashka" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-foreground">
        Instagram
      </a>
      , допоможемо підібрати.
    </p>
  </section>
);

export default SizeGuideSection;
