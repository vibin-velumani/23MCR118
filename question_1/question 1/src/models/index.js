import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(`${process.env.DB_URL}`)

export default mongoose