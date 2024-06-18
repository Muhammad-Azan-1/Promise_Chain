"use strict";
//DOING SAME THING WITH PROMISE CHAIN TO avoid call back hell
//CALL BACK HELL
// function getData(DataId:number, getNextDataId:Function){
//     setTimeout(()=>{
//         console.log("Data = ",DataId);
//         getNextDataId();
//     },3000)
// }
// getData(1,()=>{
//     console.log(" data1  Fetched successfully")
//     console.log("Fetching data2")
//     getData(2,()=>{
//         console.log(" data2  Fetched successfully")
//         console.log("Fetching data3")
//         getData(3,()=>{
//             console.log(" data3  Fetched successfully")
//             console.log("Fetching data4")
//             getData(4,()=>{
//                 console.log(" data4  Fetched successfully")
//                 console.log("Fetching data5")
//                 getData(5,()=>{
//                     console.log(" data5 Fetched successfully")
//                 })   
//             });
//         });
//     });
// })
// This  is called CALL BACK HELL becuase call backs function are nested into each other and code is difficult to understand so when we deepdive into 
// the nesetd call back function then call back Hell Problem arise to solve this we use Promises 
//DOING SAME THING WITH PROMISE CHAIN TO avoid call back hell
function getDatas(DataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", DataId);
            resolve(); //whole promise return  to the caller of function
        }, 3000);
    });
}
// console.log("Fetching data1....")
//  getDatas(1).then(()=>{
//     console.log("Data 1 fetched successfully")
//     console.log("Fetching data2....")
//     //working for second data
// getDatas(2).then(()=>{
//     console.log("Data 2 fetched successfully")
//     console.log("Fetching data3....")
//      //working for third data
// getDatas(3).then(()=>{
//     console.log("Data 3 fetched successfully")
//     console.log("Fetching data4....")
//     //working for fourth data
// getDatas(4).then(()=>{
//     console.log("Data 4 fetched successfully")
//     console.log("Fetching data5....")
//     //working for fifth data
// getDatas(5).then(()=>{
//     console.log("Data 5 fetched successfully")
// });
// });
// });
// });
// });
/// or
//This is actual prmoise chain
console.log("fetching data1...");
getDatas(1).then(() => {
    console.log("Data 1 fetched successfully");
    console.log("fetching data2...");
    return getDatas(2);
}).then(() => {
    console.log("Data 2 fetched successfully");
    console.log("fetching data3...");
    return getDatas(3);
}).then(() => {
    console.log("Data 3 fetched successfully");
    console.log("fetching data4...");
    return getDatas(4);
}).then(() => {
    console.log("Data 4 fetched successfully");
    console.log("fetching data5...");
    return getDatas(5);
}).then(() => {
    console.log("Data 5 fetched successfully");
});
