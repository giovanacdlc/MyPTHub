const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (err) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;

// const { MongoClient } = require('mongodb')

// let dbConnection;

// //connecting to MongoDB
// module.exports = {
//     connectToDb: (cb) => {
//         MongoClient.connect('mongodb://localhost:27017/pt_app')
//             .then((client) => {
//                 dbConnection = client.db()
//                 return cb()
//             })
//             .catch(err => {
//                 console.log(err)
//                 return cb(err)
//             })
//     },
//     getDb: () => dbConnection
// }