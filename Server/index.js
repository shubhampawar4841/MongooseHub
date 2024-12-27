const mongoose = require("mongoose");
const User = require("./User");

// Connection string with username and password embedded
const uri = "mongodb+srv://shubhampawar4841:Spawar%4001@aplha.fwota.mongodb.net/?retryWrites=true&w=majority&appName=Aplha";

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error("Atlas connection error:", error));

// Example of creating a user and saving it
const user = new User({ name: "Kyle", age: 26 });
user.save()
    .then(() => console.log("User Saved"))
    .catch((error) => console.error("Save error:", error));

// Async function with CRUD operations
async function run() {
    try {
        // **Create**: Insert a new user
        const newUser = await User.create({
            name: "John Doe",
            age: 30,
            email: "johndoe@example.com",
            hobbies: ["reading", "traveling", "coding"],
            address: {
                street: "123 Main St",
                city: "New York"
            }
        });
        console.log("User created:", newUser);

        // **Read**: Retrieve all users
        const users = await User.find();
        console.log("All users:", users);

        // **Find One**: Retrieve a user by name
        const foundUser = await User.findOne({ name: "John Doe" });
        console.log("User found by name:", foundUser);

        // **Update**: Update a user’s age and hobbies by name
        const updatedUser = await User.findOneAndUpdate(
            { name: "John Doe" },
            { age: 31, $push: { hobbies: "new hobby" } },
            { new: true } // This option returns the updated document
        );
        console.log("User updated:", updatedUser);

        // **Delete**: Remove a user by name
        const deletedUser = await User.deleteOne({ name: "Kyle" });
        console.log("User deleted:", deletedUser);
        
        // **Find by ID**: Retrieve a user by their unique ID
        const userById = await User.findById(newUser._id);
        console.log("User found by ID:", userById);

    } catch (error) {
        console.error("Operation error:", error);
    }
}

// Call the run function to perform CRUD operations
run();
