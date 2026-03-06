import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="section-padding text-center">
    <ShieldCheck className="w-10 h-10 mx-auto mb-6 text-accent" />
    <h2 className="text-2xl md:text-3xl font-medium mb-4">
      Гарантія на 30 прань
    </h2>
    <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
      Якщо костюм покриється пілінгом протягом 30 прань — ми замінимо його безкоштовно. Без зайвих питань.
    </p>
  </section>
);

export default GuaranteeSection;
