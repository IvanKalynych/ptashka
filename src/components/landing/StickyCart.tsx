import { useEffect, useState } from "react";

const StickyCart = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const scrollToOrder = () => {
    document
      .getElementById("final-cta")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-t border-border/20 px-5 py-3 flex items-center justify-between">
      <div>
        <p className="text-primary-foreground text-sm font-medium">
          Костюм Ptashka
        </p>
        <p className="text-primary-foreground/60 text-xs">2 250 ₴</p>
      </div>
      <button
        onClick={scrollToOrder}
        className="bg-primary-foreground text-primary px-6 py-2.5 text-xs tracking-wide uppercase font-medium hover:bg-primary-foreground/90 "
      >
        Замовити
      </button>
    </div>
  );
};

export default StickyCart;
