const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto('https://www.headstack.co', { waitUntil: 'networkidle2' });
    await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        printBackground: true
    });

    await browser.close();
})();