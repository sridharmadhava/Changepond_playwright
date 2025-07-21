import {test,expect, Locator, Browser, firefox, Page, chromium, BrowserContext} from '@playwright/test'
 
test("auth test",async()=>{
    const browser:Browser = await chromium.launch({headless : false,channel:"chrome"});
    const browercontext_1: BrowserContext = await browser.newContext();
    const page:Page = await browercontext_1.newPage();

    //await page.goto("http://quiz-fe.hematitecorp.com/");

    const userId:string = "sridhar.madhava@changgepond.com";
    const userPass:string ="Harinadh@19";
    const authHeader:string = "Basic" + btoa(userId+userPass);

    page.setExtraHTTPHeaders({Authorization:authHeader});

    await page.goto("http://quiz.hematitecorp.com/");


    //browsercontext1.close();
    //browser.close();
    
    await new Promise(()=>{});
})