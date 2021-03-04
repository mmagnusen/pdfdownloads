const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const serverless = require('serverless-http');



// app.get('/', function (req, res) {
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
//     await page.goto('https://www.headstack.co', { waitUntil: 'networkidle2' });
//     await page.pdf({
//         path: './downloads/resume.pdf',
//         format: 'A4',
//         printBackground: true
//     });

//     await browser.close();
// })();

//     res.header('Access-Control-Allow-Origin', '*');
//     res.send('Hellow World, this is express')
// })

// app.listen(3000, () => {
//     console.log('server started')
// })

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ 'hello': 'hi' })
})

router.get('/download', (req, res) => {
    res.json({ 'what': 'download' })
})

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
