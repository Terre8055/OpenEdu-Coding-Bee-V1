const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/userRoute')
const errorHandler = require('./middlewares/errorHandler')
const connectDb = require('./dbConnect/dbConnect')
const dotenv = require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')

//connect db
connectDb()


const port = process.env.PORT || 3000

//middlewares
app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie'],
    credentials: true ///enable credentials in cors
  }));


// set views directory to 'views'
app.set('views', './views')

// set the view engine to 'pug'
app.set('view engine', 'pug')

  

app.use(bodyParser.json())
app.use('/', router)
app.use(errorHandler)
app.use(cookieParser())

app.listen(port, () => console.log('Connected to server on port'))