import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto("http://localhost:4321/", {
    waitUntil: "networkidle2",
  });

  await page.pdf({
    path: "../dist/August-Herrström-CV.pdf",
    format: "A4",
    margins: {
      top: "0.8in",
      bottom: "0.8in",
      left: "0in",
      right: "0in",
    },
  });

  await browser.close();
})();
