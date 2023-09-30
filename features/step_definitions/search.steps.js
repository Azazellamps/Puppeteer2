const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText} = require("../../lib/commands.js");

Given("go to the page {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}`, {
    setTimeout: 30000,
  });
});
When("choose {int} day", async function (day) {
        return await clickElement(this.page,  `body > nav > a:nth-child(${int}) > span.page-nav__day-week`);
});
When("choose a time", async function () {
  return await clickElement(this.page, "[data-seance-id='178']");
});

When("choose {int} row {int} seat", async function (int1, int2) {
  await clickElement(
    this.page,
    `div.buying-scheme__wrapper > div:nth-child(${int1}) > span:nth-child(${int2})`
  );
  await clickElement(this.page,".acceptin-button");
 
});

Then("the inscription appeared Вы выбрали билеты:", async function () {
  const actual = await getText(this.page,"h2");
    const expected = "Вы выбрали билеты:";
    expect(actual).contain(expected);
});



Given("go to the page {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}`, {
    setTimeout: 30000,
  });
});
When("choose {int} day", async function (day) {
        return await clickElement(this.page,  `body > nav > a:nth-child(${int}) > span.page-nav__day-week`);
});
When("choose a time", async function () {
  return await clickElement(this.page, "[data-seance-id='178']");
});

When("choose {int} row {int},{int},{int} seat", async function (int1, int2, int3,int4) {
  await clickElement(
    this.page,
    `div.buying-scheme__wrapper > div:nth-child(${int1}) > span:nth-child(${int2})`
  );
  await clickElement(
    this.page,
    `div.buying-scheme__wrapper > div:nth-child(${int1}) > span:nth-child(${int3})`
  );
  await clickElement(
    this.page,
    `div.buying-scheme__wrapper > div:nth-child(${int1}) > span:nth-child(${int4})`
  );
  await clickElement(this.page,".acceptin-button");
 
});

Then("the inscription appeared Вы выбрали билеты:", async function () {
  const actual = await getText(this.page,"h2");
    const expected = "Вы выбрали билеты:";
    expect(actual).contain(expected);
});



Given("go to the page {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}`, {
    setTimeout: 30000,
  });
});
When("choose {int} day", async function (day) {
        return await clickElement(this.page,  `body > nav > a:nth-child(${int}) > span.page-nav__day-week`);
});
When("choose a time", async function () {
  return await clickElement(this.page, "[data-seance-id='178']");
});

When("choose {int} row {int} seat", async function (int1, int2) {
  await clickElement(
    this.page,
    `div.buying-scheme__wrapper > div:nth-child(${int1}) > span:nth-child(${int2})`
  );
  await clickElement(this.page,".acceptin-button");
 
});
When("press the button Получить код бронирования", async function () {
  await clickElement(this.page,".acceptin-button");
});
When("go back to the page {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}`, {
    setTimeout: 30000,
  });
});
When("choose {int} day", async function (day) {
  return await clickElement(this.page,  `body > nav > a:nth-child(${int}) > span.page-nav__day-week`);
});
When("choose a time", async function () {
return await clickElement(this.page, "[data-seance-id='178']");
});

When("choose {int} row {int} seat", async function (int1, int2) {
  await clickElement(
    this.page,
    `div.buying-scheme__wrapper > div:nth-child(${int1}) > span:nth-child(${int2})`
  );
  await clickElement(this.page,".acceptin-button");
 
});
Then("the button Забронировать is not active", async function () {
  const button = await this.page.$eval(
    ".acceptin-button",
    (el) => el.disabled
  );
  expect(button).equal(true);
});
