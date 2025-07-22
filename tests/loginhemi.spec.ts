import {test} from '@playwright/test';


test("login test", async ({page})=>{
    await page.goto("http://quiz.hematitecorp.com/#/");
    await page.pause();

    //test('test', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('sridhar.mandava@changepond.com');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Harinadh@18');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('GHFGHS');
 
 

  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.close;


});
