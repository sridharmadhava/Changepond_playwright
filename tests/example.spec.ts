import { test, expect } from '@playwright/test';
 
test ("add",async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html');
  await page.fill("#txt1", '5');
  await page.fill("#txt2", '3');
  await page.click("#btnadd" );
 
  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('8');
 
 
} )
 
test ("sub",async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html');
  await page.fill("#txt1", '5');
  await page.fill("#txt2", '3');
  await page.click("#btnsub" );
 
  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('2');
});
 
test ("multiply",async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html');
  await page.fill("#txt1", '10');
  await page.fill("#txt2", '2');
  await page.click("#btnmul" );
 
  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('20');
});
 
test ("divide",async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html');
  await page.fill("#txt1", '10');
  await page.fill("#txt2", '2');
  await page.click("#btdiv" );
 
  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('5');
});