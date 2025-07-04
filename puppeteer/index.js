import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({browser: 'chrome', channel: 'stable'});
  const page = await browser.newPage();
  await page.goto("https://cv.aghost.io", {
    waitUntil: "networkidle2",
  });

  await page.pdf({
    path: "August-Herrstrom-CV.pdf",
    format: 'A4'
  });

  await browser.close();
})();
