import { useState, useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { sendTelegramMessage } from "@/lib/telegram";
import { trackPurchase } from "@/lib/analytics";

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const colors = [
  { name: "Чорний", value: "black", tw: "bg-foreground" },
  { name: "Сірий", value: "grey", tw: "bg-stone" },
  { name: "Молочний", value: "milk", tw: "bg-milk" },
  { name: "Коричневий", value: "brown", tw: "bg-warm-brown" },
];

function formatUAPhone(value: string): string {
  const digits = value.replace(/\D/g, "");

  let local = digits;
  if (local.startsWith("380")) {
    local = local.slice(2);
  } else if (local.startsWith("38")) {
    local = local.slice(2);
  }

  local = local.slice(0, 10);

  let formatted = "+38 ";
  if (local.length === 0) return "+38 ";
  if (local.length <= 3) {
    formatted += `(${local}`;
  } else if (local.length <= 6) {
    formatted += `(${local.slice(0, 3)}) ${local.slice(3)}`;
  } else if (local.length <= 8) {
    formatted += `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
  } else {
    formatted += `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6, 8)}-${local.slice(8)}`;
  }

  return formatted;
}

function getRawPhone(formatted: string): string {
  const digits = formatted.replace(/\D/g, "");
  if (digits.startsWith("38") && digits.length === 12) {
    return `+${digits}`;
  }
  if (digits.startsWith("0") && digits.length === 10) {
    return `+38${digits}`;
  }
  return `+${digits}`;
}

const FinalCTASection = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+38 ");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const color = (e as CustomEvent).detail;
      if (color) setSelectedColor(color);
    };
    window.addEventListener("ptashka-select-color", handler);
    return () => window.removeEventListener("ptashka-select-color", handler);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!raw.startsWith("+38")) {
      setPhone("+38 ");
      return;
    }
    setPhone(formatUAPhone(raw));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Backspace" || e.key === "Delete") && phone.length <= 4) {
      e.preventDefault();
    }
  };

  const validate = () => {
    const newErrors: { name?: boolean; phone?: boolean } = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = true;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 12) {
      newErrors.phone = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (isSubmitting || submitted) return;

    if (!validate()) {
      toast({
        title: "Помилка",
        description: "Заповніть всі обов'язкові поля.",
      });
      return;
    }

    setIsSubmitting(true);

    const rawPhone = getRawPhone(phone);
    const message = `Нове замовлення:
Колір: ${selectedColor}
Розмір: ${selectedSize}
Ім'я: ${name}
Телефон: ${rawPhone}
Коментар: ${comment}`;

    try {
      await sendTelegramMessage(message);
      trackPurchase(2250, "UAH");
      toast({ title: "Дякуємо!", description: "Ваше замовлення надіслано." });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast({
        title: "Помилка",
        description: "Не вдалося надіслати замовлення, спробуйте пізніше.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="final-cta" className="section-padding bg-charcoal text-center">
      <p className="text-sm tracking-[0.15em] uppercase text-primary-foreground/50 mb-3">
        Замовити
      </p>
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
                className={`w-9 h-9 rounded-full ${c.tw} border-2 transition-all ${
                  selectedColor === c.value
                    ? "border-primary-foreground scale-110"
                    : "border-transparent"
                }`}
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
                className={`px-4 py-2 text-sm border ${
                  selectedSize === s
                    ? "bg-primary-foreground text-primary border-primary-foreground"
                    : "border-primary-foreground/30 text-primary-foreground/70 hover:border-primary-foreground/60"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="order-name"
            className="text-sm text-primary-foreground/70 mb-2 block"
          >
            Ім'я
          </label>
          <input
            id="order-name"
            ref={nameInputRef}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
            }}
            placeholder="Ваше ім'я"
            className={`w-full bg-transparent border text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none transition-colors ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-primary-foreground/30 focus:border-primary-foreground/70"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              Введіть ваше ім'я (мінімум 2 символи)
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="order-phone"
            className="text-sm text-primary-foreground/70 mb-2 block"
          >
            Телефон
          </label>
          <input
            id="order-phone"
            ref={phoneRef}
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            placeholder="+38 (0XX) XXX-XX-XX"
            className={`w-full bg-transparent border text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none transition-colors ${
              errors.phone
                ? "border-red-500 focus:border-red-500"
                : "border-primary-foreground/30 focus:border-primary-foreground/70"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">
              Введіть коректний номер телефону
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="order-comment"
            className="text-sm text-primary-foreground/70 mb-2 block"
          >
            Коментар
          </label>
          <textarea
            id="order-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Додаткові побажання (необов'язково)"
            rows={3}
            className="w-full bg-transparent border border-primary-foreground/30 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/70 resize-none"
          />
        </div>

        <div className="pt-4">
          {submitted ? (
            <div className="py-12">
              <p className="text-2xl font-semibold text-primary-foreground">
                Дякуємо за замовлення!
              </p>
              <p className="mt-2 text-primary-foreground/70">
                Ми зв'яжемося з вами найближчим часом.
              </p>
            </div>
          ) : (
            <>
              <p className="text-3xl font-medium text-primary-foreground mb-4">
                2 250 ₴
              </p>
              <button
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-primary-foreground text-primary py-4 text-sm tracking-wide uppercase font-medium hover:bg-primary-foreground/90"
              >
                {isSubmitting ? "Завантаження..." : "Замовити зараз"}
              </button>
              <p className="text-xs text-primary-foreground/40 mt-3 text-center">
                Доставка Новою Поштою · Накладений платіж або передоплата
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
