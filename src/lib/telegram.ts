// helper for sending messages directly to Telegram bot
// replace TOKEN / CHAT_ID if necessary or put into environment variables
export const TELEGRAM_BOT_TOKEN =
  "8716282349:AAH4lrk-VnFQCVztzfxlfEvIVqQ9prkdPQ0";
export const TELEGRAM_CHAT_ID = "681240023";

export async function sendTelegramMessage(text: string): Promise<void> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  // Telegram API is unlikely to enforce strict CORS for simple POST, but if you
  // run into issues you might need to proxy this through your own server.
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
  });
}
