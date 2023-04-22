const express = require('express')
const { loginUser, registerUser } = require('../controllers/userController')
const router = express.Router()



router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/', (req, res) => console.log(req.cookies))


//redirect eg
router.get('/user/info', (req,res) => res.json({message:'hi'}))

router.get('/users/details', (req, res) => {
    console.log(req.ip)
    res.render('error', { message: 'Redirecting you to appropriate site' })

    
})
module.exports = router