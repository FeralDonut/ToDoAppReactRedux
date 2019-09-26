const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 250});
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org', {waitUntil: 'networkidle2'});

  // await page.focus('.js-serach-field');
  // await page.waitFor('input[name=search');
  // await page.waitFor('input[name=search', 'Behemouth');
  // await page.click('input[type="submit"]');


  await page.$eval('input[name=search]', el => el.value = 'The Dillinger Escape Plan');

  await page.click('input[type="submit"]');
  await page.waitForSelector('#mw-content-text');
  const text = await page.evaluate(() => {
      const anchor = document.querySelector('#mw-content-text');
      return anchor.textContent;
  });
  console.log(text);


  await page.screenshot({path: 'result.png'});
  

  await browser.close();
})();
