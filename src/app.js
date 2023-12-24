import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config('../env')
import express from 'express'

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ limit: "16kb", extended: true }))
app.use(express.static("public"))
app.use(cookieParser())


//import router
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter)

export { app }