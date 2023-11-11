// const newInfo [
//     { 
//         name: "Amiya",
//         city: "kolkata",
//         grade: "A"

//     },


// ];


let user = prompt("Enter the max number");

let random = Math.floor(Math.random() * user) +1;

let guess = prompt("guess the number ")

// let num = 5;

    	while(true){
            if (guess == "quit") {
                console.log("user quited");

                break;
                
            } 
            if (guess ==random) {
                console.log();("congrats , you pick right number , and right number is : ",random)

                break
                
            }

           else if (guess < random) {
                console.log();("hint , your guess is too small , pick bigger one")

                break
                
            }
            else {
                guess=prompt("you are wrong pick the right one")
            }
        }



// while ((num!==user) && (user !==quit)) {
//     prompt("generate the right number");
//     if(user == "quit"){
//         prompt("you succesfully quit from the game")
//     }


// }