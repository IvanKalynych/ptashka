import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "ptashka_cookies_accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (stored !== "true") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_KEY, "true");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-12 bg-primary right-0 left-0 text-background p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">
      <span className="text-sm">
        Ми використовуємо куки для покращення роботи сайту.{" "}
        <Link to="/privacy" className="underline underline-offset-2">
          Політика конфіденційності
        </Link>
      </span>
      <button
        className="mt-2 md:mt-0 bg-accent text-accent-foreground px-4 py-2 rounded"
        onClick={accept}
      >
        Гаразд
      </button>
    </div>
  );
};

export default CookieBanner;
