// simple wrappers around global Google/Facebook tracking functions
// after you paste your IDs into index.html the snippets below will be available.

export function trackPageView() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "page_view");
  }
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }
}

export function trackPurchase(value?: number, currency = "UAH") {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "purchase", { value, currency });
  }
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Purchase", { value, currency });
  }
}
