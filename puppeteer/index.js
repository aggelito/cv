import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto("http://localhost:4321/", {
    waitUntil: "networkidle2",
  });

  await page.pdf({
    path: "../dist/August-Herrstrom-CV.pdf",
    format: "A4",
  });

  await browser.close();
})();
