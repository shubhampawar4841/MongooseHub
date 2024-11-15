const mongoose = require("mongoose");
const User=require("./User")
// Connection string with username and password embedded
const uri = "mongodb+srv://shubhampawar4841:Spawar%4001@aplha.fwota.mongodb.net/?retryWrites=true&w=majority&appName=Aplha";

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error("Atlas connection error:", error));

const user=new User({name:"Kyle", age:26 })
user.save().then(() => console.log("USer SAved"))