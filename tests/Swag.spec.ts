import {test} from '@playwright/test';


test("login test", async ({page})=>{
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.pause();

    //For entering details

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.close;


});