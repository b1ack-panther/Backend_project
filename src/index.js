// require('dotenv').config({path: './env'})

// import dotenv from 'dotenv'
// import connectDB from './db/index.js'
// dotenv.config({ path: './env' })
// import { app } from './app.js'

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//     console.log("Server is running at port ", process.env.PORT)
//   })
//   })
//   .catch((error) => {
//     console.log("mongoDB connection failed!!", error)
//   })

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

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
	path: "./.env",
});

connectDB()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
		});
	})
	.catch((err) => {
		console.log("MONGO db connection failed !!! ", err);
	});

