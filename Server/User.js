const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: { type: Date, default: Date.now }, // Auto-sets createdAt to current date
    hobbies: [String],
  
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model("User", UserSchema);
