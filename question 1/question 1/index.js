import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AppRoutes from './src/route.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(AppRoutes)

app.listen(process.env.PORT,()=>console.log("Server Listening in Port "+ process.env.PORT))