
import {test} from '@playwright/test'
 
test("Api mock test",async({page})=>{
    // console.log("simple get test")
    await page.route("api/users",(router)=>{
        router.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([{id:1,name:"Sridhar"},
                {id:2,name:"Hemanth"}]),
       
        })
    })
 
    await page.goto("")
})