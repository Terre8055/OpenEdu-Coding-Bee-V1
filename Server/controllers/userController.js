const bcrypt = require('bcrypt')
const User = require('../models/userModels')
const asyncHandler = require('express-async-handler')

// const bodyParser = require('body-parser')

//@desc Register User
//@route POST /api/users/register
//access public

const registerUser = asyncHandler(async(req, res) => {
    const {firstname, lastname, password, email, phone} = req.body
    //check input to find null values
    if(!firstname || !lastname || !email || !password ||!phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    //check to see if user already exist

    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    // console.log(`Hash: ${hashedPassword}`)

    //create user
    const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phone
    })

    
    console.log(`User created ${user}`)

    //user created successfully?
    if(user){
        res.status(201).json({
            message: 'Account created Successfully',
            userID: `${user.id}`,
            name: `${firstname} ${lastname}`
        })
    }else{
        res.status(400)
        res.render('error', { message: 'Error registering user' })
    }
  
}
)
//@desc Login User
//@route POST /api/users/register
//access public

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    //check to find empty fields
    if(!email || !password){
        res.status(400); //validation_error
        throw new Error("All fields are mandatory")
    }

    //check if user exists in database
    const user = await User.findOne({email})

    //if credential matches 

    if(user && (await bcrypt.compare(password, user.password))){
        //set cookie on user
        res.cookie('firstname', user.firstname, { 
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), 
            httpOnly: true //to prevent XRR attacks
        })
        
        res.status(201).json('Success')
    }else{
        res.render('error', { message: 'Error registering user' })
        res.status(401)

    }
})

module.exports = {registerUser, loginUser}