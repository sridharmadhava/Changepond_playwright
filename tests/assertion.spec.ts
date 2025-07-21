import { test, expect } from '@playwright/test';

test("assertion test",async({page})=>{
    await page.goto('http://hematitecorp.com/');
    await page.pause();

    //await page.locator("text = OUR COURSES")
    /// Assertion in playwright
    await expect(page.locator("text = OUR COURSES")).toHaveCount(1); //it will fild ement unique


    if (await page.$("text =OUR COURSES")) {
    await page.locator("text = OUR COURSES").click();
    }
    //Element visible or hidden
    await expect(page.locator("text=OUR COURSES")).toBeVisible();
    await expect.soft(page.locator("text=OUR COURSES")).toBeHidden();

     //Element Enabled or disabled
     await expect(page.locator("text=OUR COURSES")).toBeEnabled();
     await expect.soft(page.locator("text=OUR COURSES")).toBeDisabled();


    //Check text is available or not
    await expect(page.locator("text=OUR COURSES")).toHaveText("OUR COURSES");
    await expect.soft(page.locator("text=OUR COURSES")).not.toHaveText("OUR COURSES");

});