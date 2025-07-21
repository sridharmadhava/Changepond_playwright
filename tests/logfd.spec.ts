import { Browser, chromium, Locator, Page, test } from '@playwright/test';
 
test("locator test",async()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage()
    await page.goto('http://127.0.0.1:5500/form.html');
 
//use of id selector
    const fname:Locator= await page.locator('#txt1');
     
    const pass:Locator= await page.locator('#txt2');
     
  //  const email:Locator= await page.locator('#txt3');
    const contact:Locator= await page.locator('.txtcontact');
 
 
   
   ``
 
 
   
    await fname.fill('Sridhar Mandava');
    await pass.fill('Ramu@1432');
    await contact.fill('9863366951');
    //await email.fill('ramu111v@gmail.com');
 
    //use of class selactor
    const logo:Locator=await page.locator('.logo');
    const logoexist =await logo.isEnabled();
    console.log(logoexist);
 
    //use of text selector
    const text:Locator=await page.locator("text=Registration Form");
    const texts =await text.isEnabled();
    console.log(texts);
 
 
    //use of css attribute
    const addr:Locator=await page.locator("css=input#textaddr");
    await addr.fill('Vizag')
 
 
    const pin:Locator=await page.locator("css=input#pin");
    await pin.fill('530017')


    //Use of X-path
    const email:Locator = await page.locator('xpath=//input[@name="myemail" and @type="email"]');
    await email.fill("ramu11v@gmail.com");
 
    const checkbox:Locator = await page.locator('xpath=//input[@name="term" and @type="checkbox"]');
    await checkbox.click();
 
})