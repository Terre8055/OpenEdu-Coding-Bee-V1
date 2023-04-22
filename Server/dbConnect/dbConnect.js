const mongoose = require('mongoose')

//establish connection to the mongo server


const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        // connect.connection.name = 'mycontacts-backend ---- ignore-----'
        console.log("Database connected: ", connect.connection.host, connect.connection.name, connect.connection.port) 
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDb