import {test} from '@playwright/test';


test("login test", async ({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await page.pause();


  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('st');
  await page.locator('[data-test="username"]').press('CapsLock');
  await page.locator('[data-test="username"]').fill('st');
  await page.locator('[data-test="username"]').press('CapsLock');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.getByRole('link', { name: 'CANCEL' }).click();
  await page.getByRole('button', { name: 'REMOVE' }).click();
  await page.locator('#header_container div').nth(1).click();
  await page.locator('#header_container div').nth(1).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();


});
