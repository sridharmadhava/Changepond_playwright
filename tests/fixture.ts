

import{test as ramu} from '@playwright/test';

type MyFixture ={
    Hollywood:string
    greatDay:string
}

export const test = ramu.extend<MyFixture>({
    Hollywood: async({},use:any)=>{
         const myword=("Sleep")
        //console.log("For sleep")
      await use(myword)
    },
    greatDay:async ({},use:any)=>{
        const myday="having great day"
        await use(myday)
    }
})

///////////////////////////////////////////////////////
// import { test as raja } from '@playwright/test'
 
// type Myfixture = {
//     hello:string,
//     greatday:string
 
// }
 
// export const test = raja.extend<Myfixture>({
//     hello: async ({}, use: any) => {
//         // console.log("Hi All GOOD MRNG")
//         const myword=("Hi All GOOD MRNG")
//         await use(myword)
//     },
 
//     greatday:async({},use:any)=>{
//         const myday="Have a Great Day"
//         await use(myday)
//     }
// })