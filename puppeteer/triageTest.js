const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 250});
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');

  
  await page.click('button', { text: 'Create Task'});

  await page.focus('#title');
  await page.keyboard.type('Testing');

  await page.focus('#value');
  await page.keyboard.type('23');
  
  await page.focus('#effort');
  await page.keyboard.type('99');
  
  await page.click('button', { text: 'Delete'});

  await page.screenshot({path: 'triage.png'});

  await browser.close();
})();
