// require('dotenv').config({path: './env'})

import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/index.js'
dotenv.config({ path: './env' })

const app = express()

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
    console.log("Server is running at port ", process.env.PORT)
  })
  })
  .catch((error) => {
    console.log("mongoDB connection failed!!", error)
  })

// const app = express();
// const port = process.env.PORT || 5000;

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on('error', (error) => {
//       console.log(error)
//     })

//     app.listen(port, () => {
//       console.log(`App is listening on port ${port}`)
//     })
//   }
//   catch (error) {
//     console.log(error)
//     throw err
//   }
// })()