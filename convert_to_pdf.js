const puppeteer = require('puppeteer');
const { readFileSync } = require('fs');


async function generatePDF() {
    // Launch a new browser instance
    const browser = await puppeteer.launch({
        headless: true
    });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to your HTML file or any online URL
    await page.goto('file:///home/mdrokz/Documents/Projects/html/resume/index.html', { waitUntil: 'networkidle0' });


    // Generate the PDF
    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        scale: 0.72
    });

    // wait for 100 secs
    // await page.waitForTimeout(100000);

    // Save the PDF to a file
    require('fs').writeFileSync('Mohammad Munshi - Full Stack Engineer.pdf', pdf);

    // Close the browser
    await browser.close();
}

generatePDF();