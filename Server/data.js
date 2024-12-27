const mongoose=require("mongoose");
const User=require("./User")
async fucntion run() {
    try {
        const user=new User.create(
            {
                "name": "John Doe",
                "age": 30,
                "email": "johndoe@example.com",
                "hobbies": ["reading", "traveling", "coding"],
                "address": {
                    "street": "123 Main St",
                    "city": "New York"
                }
            }
        )
    }
}