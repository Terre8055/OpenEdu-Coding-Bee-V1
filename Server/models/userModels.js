const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: {
        type:String,
        required: [true, "Please add the user name"]
    },
    lastname: {
        type:String,
        required: [true, "Please add the user name"]
    },
    email: {
        type:String,
        required: [true, "Please add the email address"],
        unique: [true, "Email address already exist"]
    },
    password: {
        type: String,
        required: [true, "Please add user password"]
    },
    phone: {
        type: String,
        required: [true, "Please add user password"]
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema) //export to controllers
