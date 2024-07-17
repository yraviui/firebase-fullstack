import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import todoRoutes from './routes/todoRoutes.js'

// configure env
dotenv.config()

// database config
connectDB()

// rest object
const app = express()

// cors
app.use(cors())

// json bodyparser - middlewares 
app.use(express.json())

// rest api
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Todos App' })
})

// routes
app.use('/api/v1', todoRoutes)

// PORT
const PORT = process.env.PORT || 5000

// run listen
app.listen(PORT, () => console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white))

