const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    );

    await page.goto("https://www.investing.com/currencies/usd-rub-chart", {
      waitUntil: "domcontentloaded",
    });

    console.log("Браузер запущен. Начинаем получать данные...");

    const fetchRate = async () => {
      try {
        await page.waitForSelector('[data-test="instrument-price-last"]', {
          timeout: 10000,
        });

        const rate = await page.$eval(
          '[data-test="instrument-price-last"]',
          (el) => el.textContent.trim(),
        );
        console.log(
          `[${new Date().toLocaleTimeString()}] Курс USD/RUB: ${rate}`,
        );
      } catch (error) {
        console.error("Ошибка при получении курса:", error.message);
      }
    };

    setInterval(fetchRate, 50000);
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
})();
