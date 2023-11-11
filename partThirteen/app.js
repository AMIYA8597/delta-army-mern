// let url = "https://api.potterdb.com/";

// async function getFacts(){

//     try {
//         let response =await fetch(url);
//         console.log(response);
//         // let data =await response.json();
//         // console.log(data); 


//         let response2 =await fetch(url);
//         console.log(response2);
//         // let data2 =await response2.json();
//         // console.log(data2); 


//     } catch (error) {
//         console.log(error);
//     }

//     let device = "you are not boring";
//     console.log(device);

// }
// getFacts();

// console.log("you are not boring , so don't be sad always");












// let url = "https://icanhazdadjoke.com/";

// async function getJokes () {
//     try {
//         let config = { 
//             headers: {
//             Accept: 'application/json',
//         }}
//         let jokes = await axios.get(url , config);
//         console.log(jokes.data);
//     } catch (error) {

//     }
// }

// getJokes();

















// let btn = document.querySelector("button")

// btn.addEventListener("click", async () => {
//     // console.log("button was clicked");
//     let fact = await getFacts()
//     console.log(fact);
//     let p = document.querySelector("#result")
//     p.innerText = fact;
// })

// // let url = "https://api.potterdb.com/";
// // let url = "https://fakerapi.it/api/v1/companies?_quantity=50";
// let url = "https://catfact.ninja/fact";

// async function getFacts(){

//     try {
//         let response =await axios.get(url);
//         // console.log(response.data.fact);
//         // console.log(response.data.data);
//         return response.data.fact;
//         // let data =await response.json();
//         // console.log(data); 


//         // let response2 =await fetch(url);
//         // console.log(response2);
//         // // let data2 =await response2.json();
//         // // console.log(data2); 


//     } catch (error) {
//         console.log(error);
//         return "No fact found";
//     }

//     // let device = "you are not boring";
//     // console.log(device);

// }
// getFacts();

// console.log("you are not boring , so don't be sad always");












// let btn = document.querySelector("button")
// let url2 = "https://dog.ceo/api/breeds/image/random"

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     console.log(link);
//     // let img = document.querySelector("#result");
//     let img = document.querySelector("img");
//     img.setAttribute("src", link);
// })


// async function getImage() {

//     try {
//         let response = await axios.get(url2);
//         // console.log(response.data.message);
//         // return response;
//         return response.data.message;


//     } catch (error) {
//         console.log("error is",error);
//         return "No image found";
//     }

//     // let device = "you are not boring";
//     // console.log(device);

// }
// getImage();

// console.log("you are not boring , so don't be sad always");








// let url2 = "https://dog.ceo/api/breeds/image/random"

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// })


// async function getJokes() {

//     try {
//         let config = {accept: {key: "application/json"}}
//         let response = await axios.get(url2 , config);
//         console.log(response.data);
//         // return response.data.message;


//     } catch (error) {
//         console.log("error is",error);
//         // return "No image found";
//     }

//     // let device = "you are not boring";
//     // console.log(device);

// }
// getJokes();

// console.log("you are not boring , so don't be sad always");
















// // let url = "http://universities.hipolabs.com/search?name=";
// let url = "http://universities.hipolabs.com/search?name=india";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async ()=> {
//     let country = document.querySelector("input").value;
//     // console.log(country);
//     console.log(country.state-province);
//     // console.log("search button clicked");

//     let colArr =  await getColleges(country)
//     console.log(colArr);
//     show(colArr);
// });

// // let country = "India";

// function show(colArr){
//     let list = document.querySelector("#list");
//     list.innerText= ""
//     console.log(list);
//     for (col of colArr) {
//         console.log(col.name);

//         let li = document.createElement("li")
//         li.innerText= col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try {
//        let result = await axios.get(url + country)
//     //    console.log(result.data);
//     return result.data;
//     } catch (error) {
//         console.log(error)
//         return [];
//     }
// }

// getColleges();







// let url = "https://icanhazdadjoke.com/";

// async function getIo() {
//     try {
//         let application = { headers: { Accept: "application/json" } }
//         console.log(application);
//         let jokes = await axios.get(url, application);
//         console.log(jokes.data.joke);
//     } catch (error) {
//         console.log(error);

//     }

// }
// getIo();










let url = "http://universities.hipolabs.com/search?name=";

// let country = "london";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    // console.log("button was clicked");
    // let res =await getUniversity()
    let colleges =await getUniversity(country);
    // console.log(colleges);
    // console.log(res);
    show(colleges)
})

async function show(colleges){
    let list = document.querySelector("#list");
    list.innerText ="";
    for(col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
    
}

async function getUniversity(country) {
    try {
        let sum = await axios.get(url + country);
        // console.log(sum.data);
        return sum.data;
    } catch (error) {
        console.log(error);
    }
}
// getUniversity();


