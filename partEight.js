// let arr =[1,2,3,4,5,6,7,8]

// let byte = function(element){
//     console.log(element);
// }

// arr.forEach(byte)





// let arr =[1,2,3,4,5,6,7,8]

// arr.forEach(function(element){
//     console.log(element);
// })
// arr.forEach((element) =>{
//     console.log(element);
// })

// arr.forEach(byte)



// let arr =[{
//     name : "Amiya",
//     rollNo: 18,
//     marks : 74.8
// },{
//     name : "Pranab",
//     rollNo: 8,
//     marks : 84.8
// },{
//     name : "Sovan",
//     rollNo: 12,
//     marks : 76.9
// },{
//     name : "Akash",
//     rollNo: 9,
//     marks : 78.6
// },
// {
//     name : "Samiran",
//     rollNo: 4,
//     marks : 92.6
// }]

// arr.forEach( (student) =>{
// // console.log(student);
// console.log(student.name);
// // console.log(student);
// console.log(student.rollNo);
// // console.log(student);
// console.log(student.marks);
// })




// let symbol = [1,2,4,5,7,86,95,34,57,24];

// let yml = symbol.reduce( (res,ele) =>{
//     return res+ele;
// })

// console.log(yml);





// let symbol = [1,2,4,5,7,86,95,34,57,24];

// let yml = symbol.reduce( (res,ele) =>{
//     return res-ele;
// })

// console.log(yml);


// let symbol = [1,2,4,5,7,86,95,34,57,24];

// let yml = symbol.reduce( (res,ele) =>{
//     return res*ele;
// })

// console.log(yml);





// let symbol = [1,2,4,5,7,86,95,34,57,24];

// let max = -1;

// for (let i=0;i<symbol.length;i++){
//     if(max<symbol[i]){
//         max=symbol[i];
//         // console.log(max=symbol[i]);
//     }
// }

// console.log(max);









// let symbol = [1,2,4,5,7,86,95,34,57,24];


// let max = symbol.reduce( (max , el) =>{
//     if(max<el){
//         // return max;
//         return el;
//     } 
//     else{
//         // return el;
//         return max;
//     }
// })

// console.log(max);








// // let symbol = [1,2,4,5,7,86,95,34,57,24];
// let symbol = [10,30,60,40,70];


// let num = symbol.every( (gonv) =>{
//     if(gonv %10 ==0) {
//         return true;
//     }
//     else {
//         return false
//     }
// })


// console.log(num);


// let symbol = [1,2,4,5,7,86,95,34,57,24];
// let symbol = [10,30,60,40,70];


// let num = symbol.reduce( (gonv , sym) =>{
//     if(gonv <sym) {
//         // return gonv;
//         return sym;
//     }
//     else {
//         // return sym
//         return gonv
//     }
// })


// console.log(num);




function getMinimum (symbol)  {

    let num = symbol.reduce( (gonv , sym) =>{
        if(gonv <sym) {
            // return gonv;
            return sym;
        }
        else {
            // return sym
            return gonv
        }
    })
    return num;

    console.log(num);

}
let symbol = [10,30,60,40,70];





// console.log(num);





