import {expect, test} from '@playwright/test';
 
test('Model Popup', async ({page}) => {
    await page.goto('http://127.0.0.1:5501/assertion.html');
 
    await page.pause();
 
    //alert
    page.once("dialog", async(dialog)=>{
        console.log(dialog.message);
        await dialog.accept();
    });
    await page.click('button[onclick = "jsalert()"]');
 
    //confirm
 
    page.once("dialog", async(dialog)=>{
        expect(dialog.message).toContain("confirm");
        await dialog.accept();
    });
    await page.click('button[onclick = "jsconfirm()"]');
 
    //prompt
    page.once("dialog", async(dialog)=>{
       ;
        await dialog.accept("hello friends");
    });
    await page.click('button[onclick = "jsprompt()"]');
 
});