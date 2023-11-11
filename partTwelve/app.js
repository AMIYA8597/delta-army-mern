let url = "https://api.potterdb.com/";

async function getFacts(){

    try {
        let response =await fetch(url);
        console.log(response);
        // let data =await response.json();
        // console.log(data); 
        
        
        let response2 =await fetch(url);
        console.log(response2);
        // let data2 =await response2.json();
        // console.log(data2); 
        
        
    } catch (error) {
        console.log(error);
    }

    let device = "you are not boring";
    console.log(device);
    
}
getFacts();

console.log("you are not boring , so don't be sad always");