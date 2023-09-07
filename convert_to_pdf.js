const puppeteer = require('puppeteer');
const { readFileSync } = require('fs');


async function generatePDF() {
    // Launch a new browser instance
    const browser = await puppeteer.launch({
        headless: true,
        timeout: 60000,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to your HTML file or any online URL
    await page.goto('file:///home/runner/work/resume/resume/index.html', { waitUntil: 'networkidle0' });


    // Generate the PDF
    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        scale: 0.72
    });


    // Save the PDF to a file
    require('fs').writeFileSync('Mohammad Munshi - Full Stack Engineer.pdf', pdf);

    // Close the browser
    await browser.close();
}

generatePDF();