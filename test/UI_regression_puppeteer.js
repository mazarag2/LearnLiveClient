const puppeteer = require('puppeteer');
var expect = require('chai').expect;

async function test() {
	
	setTimeout(function(){console.log('execute')},2000);
	
}
(async () => {
  const browser = await puppeteer.launch();
  await test();
  console.log('1');
  const page = await browser.newPage();
  console.log("2");
  await page.goto('https://isitlikedarksouls.herokuapp.com/');
  console.log("3");
  await page.screenshot({path: 'Screenshots/home.png'});
  console.log("4");
  
  console.log("5");
  const domText = await page.$('#DisplayResponse');
	console.dir(domText);
  expect(await domText.$$eval('#DisplayResponse',node => node.innerText)).to.equal("Is it like Darks souls lets find out lol");
  await browser.close();
  
  
})();



