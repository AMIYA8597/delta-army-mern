const mongoose = require("mongoose")
const { Schema } = mongoose;
main().then(() => ("connection successful so Dont worry")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String,
        }
    ]
})
const User = mongoose.model("User", userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "sharlokHomes",
        addresses: [
            {
                location: "221B Baker Street",
                city: "London",
            }
        ]
    })

    user1.addresses.push({ location: "p32 wallstreet", city: "London" })
    let result = await user1.save();
    console.log("the result is ", result);
}
addUser();