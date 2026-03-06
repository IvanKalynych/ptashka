import { Truck, CreditCard } from "lucide-react";

const DeliverySection = () => (
  <section className="section-padding-sm bg-card">
    <div className="max-w-2xl mx-auto">
      <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">Доставка та оплата</p>
      <h2 className="text-2xl md:text-3xl font-medium mb-8">Доставка по Україні</h2>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <Truck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">Нова Пошта</h3>
            <p className="text-sm text-muted-foreground">Доставка у відділення або поштомат по всій Україні. Відправка протягом 1–2 робочих днів.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <CreditCard className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">Оплата</h3>
            <p className="text-sm text-muted-foreground">Накладений платіж або часткова передоплата — як вам зручніше.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DeliverySection;
