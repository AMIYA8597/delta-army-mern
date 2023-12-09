const mongoose = require("mongoose")
const { Schema } = mongoose;
main().then(() => ("connection successful so Dont worry")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

// customerSchema.pre("findOneAndDelete", async (data) => {
//     console.log("PRE MIDDLEWARE");
// });

// customerSchema.post("findOneAndDelete", async (customer) => {
//     // console.log("POST MIDDLEWARE");
//     if (customer.orders.length) {
//      let result = await Order.deleteMany( { _id: {$in :Customer.orders} })
//      console.log(result);
//     }
// });



const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders")
    console.log(result);
};

findCustomer();

// const add



// const addCust = async () => {

//     let newCust = new Customer({
//         name: "Amiya Chowdhury",    
//     })

//     let newOrder = new Order({
//         item: "Pizza",
//         price : 450    
//     })
//     newCust.orders.push(newOrder);

//     await newOrder.save();
//     await newCust.save();

//     console.log("added new customwr");
// }

    const deleteCust = async () => {
      let data = await Customer.findByIdAndDelete() 
      console.log(data); 
    }

// addCust()
deleteCust()


// const addCustomer = async () => {

//     let cus1 = new Customer({
//         name: "Amiya Chowdhury",
        
//     })

//     let order1 = await order.findOne({ item: "IPhone" });
//     let order2 = await order.findOne({ item: "Camera" });

//     cus1.orders.push(order1)
//     cus1.orders.push(order2)

//     let result = await cus1.save()
//     console.log(result);
// }
// addCustomer();



// create a new order

// const addMyOrders = async () => {

//    let result =  await order.insertMany([
//         {
//           item: "Camera",
//           price: 67057
//         },
//         {
//           item: "IPhone",
//           price: 290000
//         },
//         {
//           item: "Watch",
//           price: 198505
//         },
//         {
//           item: "Car",
//           price: 8000000
//         },
//     ])
//     console.log(result);

// }

// addMyOrders();
