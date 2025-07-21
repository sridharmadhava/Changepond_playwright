import{test,expect} from '@playwright/test'
test("custom assertion",async ({page})=>{
    await page.goto('http://127.0.0.1:5500/assertion.html');
    await page.pause()
 
const txtval:any=await page.locator('#d1').textContent();
const value=parseInt(txtval ||'0')
 
await expect(value>10).toBeTruthy();
 
// const txtval2:any=await page.locator('#d2').textContent();
// const res=txtval2.length;
// await expect(res).toBeGreaterThan(5);
 
const message = await page.locator("#d2")
await asertMinCharLength(message,5)
 
 
 
 
})
const asertMinCharLength=async (locator:any,minLength:number)=>{
    const text=await locator.textContent();
    await expect((text || '').length).toBeGreaterThan(minLength)
}