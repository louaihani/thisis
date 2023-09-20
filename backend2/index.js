let express = require("express");
let app = express();
let User = require("./models/users");
let cors = require("cors");
app.use(express.json());
app.use(cors())
app.get("/" ,async (req,res)=>{
res.send(await User.find());

})
app.post("/addUser" ,async (req,res)=>{
  console.log(req.body);
    let user =await new User(req.body);
await user.save();
res.json({message:"good"})
})
app.listen(process.env.Port ||4000, ()=>{
    console.log("listening");
})
