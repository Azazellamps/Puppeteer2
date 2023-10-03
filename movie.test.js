const {clickElement, getText} = require("./lib/commands.js");
let page;
beforeEach(async () => {
  let day = 3;
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php"); 
  await clickElement(page, `body > nav > a:nth-child(${day}) > span.page-nav__day-week`);
  await clickElement(page, "[data-seance-id='178']");
}, 50000);

afterEach(() => {
  page.close();
});
describe("Movie tickets",() => {
  test("happy path1", async () => {
    let row = 1;
    let placeOne = 2;
    await clickElement(page,`div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${placeOne})`);
    await clickElement(page,".acceptin-button");
    const actual = await getText(page,"h2");
    const expected = "Вы выбрали билеты:";
    expect(actual).toContain(expected);
  }, 50000);

  test("happy path2", async () => {
    let row = 1;
    let placeTwo = 3;
    let placeThree = 5;
    let placeFour = 7;
    
    
    await clickElement(page,`div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${placeTwo})`);
    await clickElement(page,`div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${placeThree})`);
    await clickElement(page,`div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${placeFour})`);
    await clickElement(page,".acceptin-button");
    const actual = await getText(page,"h2");
    const expected = "Вы выбрали билеты:";
    expect(actual).toContain(expected);
  }, 50000);

  test("sad path", async () => {
    let row = 1;
    let placeFive = 10;
    let day = 3;
    await clickElement(page,`div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${placeFive})`);
    await clickElement(page,".acceptin-button");
    await clickElement(page,".acceptin-button");
    await page.goto("https://qamid.tmweb.ru/client/index.php"); 
    await clickElement(page, `body > nav > a:nth-child(${day}) > span.page-nav__day-week`);
    await clickElement(page, "[data-seance-id='178']");
    const button = await page.$eval(".acceptin-button",(el) => el.disabled
    );
    expect(button).toEqual(true);
  }, 50000);
})
