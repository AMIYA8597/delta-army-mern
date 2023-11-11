// function diceRoll (){
//     let random = Math.floor(Math.random() *6) +1;
//     console.log("random roll dice is :",random);
// }
// diceRoll();

// function avgCal (a,b,c) {
//     let calculator = (a+b+c)/3
//     console.log("avarage number is ",calculator);
// }

// avgCal(4,5,7).



// function printTable (k) {
//     for(i=k;i<=k*10;i+=k){
//     // console.log("multiplier is k",k);
//     console.log("multiplier is i",i);
//     }
// }

// printTable(4)


// function retbg(n){
//     let sum = 0
//     for(i=1;i<=n;i++) {
//         sum +=i;
//         // console.log(n);
//     }
//     return sum;
// }

// retbg(8999);

// function numFind (request){

//     // let num = n;
//     if (request == "odd") {
//         let odd = function(n){
            
//             console.log(!(n%2 == 0));
//         }
//         return odd;
    
//     } 

//     else if (request=="even") {

//         let even = function(n) {

//             console.log(n%2==0);
//         }
//         return even;
//     }
    
//     else {
//         console.log("wrong request");
        
//     }
// }

// numFind();


// const number = {
//     num :75,

//     add: function(a,b){
//         return a+b;
//     },
    
//     mul: function(a,b){
//         return a*b;
//     },

//     sub: function(a,b){
//         return a-b;
//     }


// }

// console.log(number.add(2,6));




const number = {
    num :75,

    add(a,b){
        return a+b;
    },
    
    mul(a,b){
        return a*b;
    },

    sub(a,b){
        return a-b;
    }


}

console.log(number.add(2,6));
console.log(number.mul(2,6));
console.log(number.sub(2,6));