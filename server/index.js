import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'
import bookingRouter from './routes/booking.route.js'
import userRouter from './routes/user.route.js'
import cookieParser from "cookie-parser";

const app = express()
const port = process.env.PORT

// middlewares

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin : ['http://localhost:3000' , 'http://localhost:5173'] ,
    credentials : true,
    methods : ['GET' , 'POST' , 'PUT' , 'DELETE' , 'PATCH'],
    allowedHeaders : ['Content-Type' , 'Authorization'],
    exposedHeaders : ['Content-Type' , 'Authorization'],
    optionsSuccessStatus : 200,
}))
app.use(morgan('combined'))





// routes

app.use('/api/v1/reservation' , bookingRouter)
app.use('/api/v1' , userRouter)


app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})