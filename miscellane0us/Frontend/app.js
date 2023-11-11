//    ****now we are using constructor using class



// function PublicCommision(instructor , address){
//     this.instructor= instructor;
//     this.address= address;
//     console.log(this);

// }

// let work = new PublicCommision("Amiya", {
//     village:"Golar",
//     po:"Golar",
//     PS:"Keshpur",
//     Dist:"Paschim_Medinipur",
//     pin:721260


// })



// let work2 = new PublicCommision("Pranab", {
//     village:"Golar",
//     po:"Golar",
//     PS:"Keshpur",
//     Dist:"Paschim_Medinipur",
//     pin:721260


// })





// PublicCommision.prototype.talk = function () {
//     console.log(`Hi here instructname is ${this.instructor}`);
// }

// console.log(work);





//  ********* now we are using constructor using class

// class PublicCommision {
//     constructor(instructor, address) {
//         this.instructor = instructor;
//         this.address = address;
//         console.log(this);

//     }

//     talk() {
//         console.log(`Hi here instructname is ${this.instructor}`);
//     }
// }

// // console.log(work);

// let work = new PublicCommision("Amiya", {
//     village: "Golar",
//     po: "Golar",
//     PS: "Keshpur",
//     Dist: "Paschim_Medinipur",
//     pin: 721260
// })


// let work2 = new PublicCommision("Pranab", {
//     village: "Golar",
//     po: "Golar",
//     PS: "Keshpur",
//     Dist: "Paschim_Medinipur",
//     pin: 721260
// })











// class Person {
//     constructor(name, age) {
//         console.log("Person class constructor");

//         this.name = name
//         this.age = age
//         // console.log(this);
//     }
//     talk() {
//         console.log(`Hi, this is ${name}`);
//     }
// }

// class Students extends Person {
//     constructor(name, age, rollNo, marks) {
//         console.log("students class constructor");


//         // this.name = name
//         // this.age = age
//         super(name, age);
//         this.rollNo = rollNo;
//         this.marks = marks;
//         // console.log(this);
//     }
//     // talk() {
//     //     console.log(`hi, this is ${name}`);
//     // }
// }

// let studentData = new Students("Amiya", 22, 181100110037, 82)
// console.log(studentData.name);

// class Teachers extends Person {

//     constructor(name, age, id, subject) {
//         console.log("teachers class constructor");
//         super(name, age);

//         // this.name = name
//         // this.age = age
//         this.id = id;
//         this.subject = subject;
//         // console.log(this);
//     }
//     // talk() {
//     //     console.log(`hi, this is ${name}`);
//     // }
// }

// let teachersData = new Teachers("Biswanath Karak", 46, 1, "Mathematics")





class Box {
    constructor(name, a, b) {
        this.name = name
        this.a = a
        this.b = b
    }
    area() {

        let area = this.a * this.b;
        console.log(`the area is ${area}`);
    }

}

class Square extends Box {
    constructor(a) {
        super("square", a, a)
    }
    area() {

        let area = this.a * this.b;
        console.log(`the area is ${area}`);
    }
}

let sq1 = new Square(4);
sq1.area()
