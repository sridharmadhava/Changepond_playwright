

import { test, expect, Browser, chromium, BrowserContext, Page, Locator } from '@playwright/test';
 
test("testing browser context",async ()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});

    //browercontext
    const browercontext_1: BrowserContext = await browser.newContext();
    const page1:Page = await browser.newPage();
    const page2:Page = await browser.newPage();

    await page1.goto("http://quiz.hematitecorp.com/");
     
        const email:Locator = await page1.locator("#email");
        const passsword:Locator = await page1.locator("#password");
        const button:Locator = await page1.locator("[type='submit']");
        
        await email.fill("sridhar.mandava@changepond.com");
        await passsword.fill("Harinadh@18");
        await button.click();


        //page1 credentials
        await page2.goto("http://quiz.hematitecorp.com/");
     
        const email1:Locator = await page2.locator("#email");
        const passsword1:Locator = await page2.locator("#password");
        const button1:Locator = await page2.locator("[type='submit']");
        
        await email1.fill("hemanth.thummala@changepond.com");
        await passsword1.fill("Hemanth@29");
        await button1.click();
     
        const title = await page1.title();
        console.log("Home Page title",title);
        await page1.screenshot({path :'VoucherCode.png'});
        await page2.screenshot({path :'VoucherCode.png'});

        expect(title).toEqual("Quiz App");

        await new Promise(()=>{});
})
