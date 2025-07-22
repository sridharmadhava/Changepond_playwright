import { test } from './swaglabs';
import {expect } from '@playwright/test';

test("display product after login",async({loggedInPage})=>{
    await expect(loggedInPage.locator('.product_label')).toHaveText("Products");

});