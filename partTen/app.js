// let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.onClick= sayHello;
//     btn.onmouseenter = function() {
//         console.log("you enter a button");
//     };
//     console.dir(btn);
// };

// function sayHello(){
//     alert("Hello")
// }




// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log("generate randon click");

//     let h3 = document.querySelector("h3")
//     let randomColor = getRandonColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor= randomColor;

//     console.log("New color updated ");
// });


// function getRandonColor (){
//     let red = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let yellow = Math.floor(Math.random() * 255);

//     let color = `rgb (${red},${blue} ${yellow})`;
//     return color;
// }








// let btn = document.querySelector("button")
// let p = document.querySelector("p")
// let h1 = document.querySelector("h1")
// let h3 = document.querySelector("h3")


// btn.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// p.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// h1.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// h3.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })





// let btn = document.querySelector("button")
// let p = document.querySelector("p")
// let h1 = document.querySelector("h1")
// let h3 = document.querySelector("h3")

// function changeColor (){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }


// btn.addEventListener("click", changeColor)

// p.addEventListener("click", changeColor)

// h1.addEventListener("click",changeColor)

// h3.addEventListener("click", changeColor)


let inputInstance = document.querySelector("button");

inputInstance.addEventListener("keydown", function(event) {
    console.log("code =", event.code);      //arrowup,arrowdown,arrowleft,arrowright

    if (event.code =="keyU") {
        console.log("character moves forword");
        
    }
    else if (event.code =="ArrowDown") {
        console.log("character moves backword");
        
    }
    else if (event.code =="Arrowleft") {
        console.log("character moves left");
        
    }
    else if (event.code =="ArrowDRight") {
        console.log("character moves Right");
        
    }

})

