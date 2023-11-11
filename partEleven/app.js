h2 = document.querySelector("h2");

function changeColor(color, delay, nextcolorChange) {
    setTimeout(() => {
        h2.stylecolor = color;
        if (nextcolorChange) nextcolorChange();
    }, delay)
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000() => {
        changeColor("pink",1000 () => {
            changeColor("blue",1000 () => {
        changeColor("yellow",1000)

    });

});
    });
})


















// function saveDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// saveDb("Amiya Chowdhury", () => {
//     console.log("success: Your Data saved Successfully");
//     saveDb("Hello world",
//         () => {
//             console.log("Success2 : Data2 Saved successfully");
//         })
//     saveDb("Hello vailog",
//         () => {
//             console.log("Success3 : Data3 Saved successfully");
//             saveDb("HLO GUYS", ()=>{
//                 console.log("this is nesting dominstion");
//             })
//         })
//     saveDb("Hello vaisab",
//         () => {
//             console.log("Success4 : Data4 Saved successfully");
//         }, () => {
//             console.log("Failure : Failed to saved Data");
//         })
// }, () => {
//     console.log("Weak connection , failed to save data");
// })







// function saveDb (data) {
//     return new Promise ((success, failure) => {
//         let internetSpeed = Math.floor(Math.random() +1);
//         if (internetSpeed >4) {
//             success("success : your data was saved");
//         } else {
//          failure("ooh ! failure connection");   
//         }
//     })
// }

// saveDb("Amiya Chowdhury")







function saveDb(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() + 1);
        if (internetSpeed > 4) {
            success("success : your data was saved");
        } else {
            failure("ooh ! failure connection");
        }
    })
}

// let ourRequest = saveDb("Amiya Chowdhury")
// console.log(ourRequest);
// ourRequest.then( () =>{
//     console.log("here we are useing .then method as a promise resolver");
// });
// ourRequest.catch( (){
//     console.log("here we are using .catch method as a promise rejecter");
// })


saveDb("Amiya Chowdhury")
    // console.log(ourRequest);
    .then(() => {
        console.log("here we are useing .then method as a promise resolver");
    })
    .catch(() => {
        console.log("here we are using .catch method as a promise rejecter");
    })








