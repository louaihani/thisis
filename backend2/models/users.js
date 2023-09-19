let mongoose = require("mongoose");
mongoose.connect("mongodb+srv://louai:LaDipivEx542OCMi@class.q9q9fya.mongodb.net/?retryWrites=true&w=majority").catch((e)=>{console.log("error is ", e)}).then(()=>{console.log("connected to db")});

let  userSchema =new mongoose.Schema({
    name:String,
    password : String,
})
let User = mongoose.model("User" , userSchema);
module.exports = User;
