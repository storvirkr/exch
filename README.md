# Currency Rate Scraper

Приложение на Node.js для получения курса USD/RUB в режиме реального времени с сайта [Investing.com](https://www.investing.com/currencies/usd-rub-chart) с помощью Puppeteer.

---

## Установка и запуск

1. Установите **Node.js** (v16+): [nodejs.org](https://nodejs.org/).
2. Склонируйте репозиторий или скачайте архив:
   ```bash
   git clone https://github.com/your-username/currency-rate-scraper.git
   cd currency-rate-scraper
3. Установите зависимости:
   npm install

4. Запустите скрипт:
   node index.js

   ## Как работает
   Приложение каждые 50 секунд извлекает курс USD/RUB и выводит его в консоль:
   [12:00:00] Курс USD/RUB: 103.9976
   [12:01:00] Курс USD/RUB: 104.0021
