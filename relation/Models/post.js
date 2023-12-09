const mongoose = require("mongoose")
const { Schema } = mongoose;
main().then(() => ("connection successful so Dont worry")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

const userSchema = new Schema({
    username: String,
    email: Number
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", postSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {

    let user1 = new User
    ({
        username: "Amiya Chowdhury",
        email: "abc@gmail.com"
    });
    let post1 = new Post
    ({
        content: "Hello CoochBehar",
        likes: 65
    })



    // let user1 = new User({
    //     username: "Amiya Chowdhury",
    //     email: "abc@gmail.com"
    // });
    // let post1 = new Post({
    //     content: "Hello CoochBehar",
    //     likes: 65
    // })

    post1.user = user1;

    await user1.save();
    await post1.save();

}
addData();