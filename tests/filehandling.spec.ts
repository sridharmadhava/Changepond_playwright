import{test,expect} from '@playwright/test'
import { promiseHooks } from 'v8';
test("custom assertion",async ({page})=>{
    await page.goto('http://127.0.0.1:5501/assertion.html');
    await page.pause();
    const filepath: string = "tests/sample.pdf"
    await page.setInputFiles("input[type='file']",filepath);
    await page.locator('button[type="submit"]').click();

    //test case for downloading file
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadbutton')
    ]);

    const downloadFilePath = await download.path();
    console.log("Downloading File Path: ", downloadFilePath)


    // const [download] = await Promise.all([
    //     page.waitForEvent('download'),
    //     page.click('a#downloadbutton')
    // ]);
 
    // //code to save file on disk
 
    // const downloadFilePath = await download.path();
    // console.log("Downloading File Path",downloadFilePath);


    

}
);