import puppeteer from "puppeteer";

(async () => {
  console.log("Starting Puppeteer...");
  
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  console.log("Navigating to CV page...");

  await page.goto("https://cv.aghost.io", {
    waitUntil: "networkidle2",
  });


  console.log("Generating PDF...");

  await page.pdf({
    path: "August-Herrstrom-CV.pdf",
    format: "A4",
  });

  console.log("PDF generated successfully!");

  await browser.close();
})();
