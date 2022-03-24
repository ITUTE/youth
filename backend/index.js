import express from 'express'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import helmet from 'helmet'

// Import routers
import authRouter from './src/routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 5001
const api = '/app/api/v1'
dotenv.config()

const whitelist = [
    'https://youth-itute.vercel.app',
    'http://localhost:3000',
    'http://youth-itute.herokuapp.com/'
]

const corsOptions = {
    origin:
        app.settings.env === 'development'
            ? '*'
            : function (origin, callback) {
                  if (whitelist.indexOf(origin) !== -1) {
                      callback(null, true)
                  } else {
                      callback(
                          new Error('Not allowed by CORS'),
                      )
                  }
              },
}

// Use middlewires
app.use(helmet())
app.use(morgan('common'))
app.use(cors(corsOptions))
app.use(
    fileUpload({
        useTempFiles: true,
    }),
)
app.use(express.json())

// Connect DB
const connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log(' Mongoose connected ')
            })
    } catch (error) {
        console.log('Connect Error :', error.message)
        process.exit(1)
    }
}
connectDB()

// Set routes
app.use(`${api}`, authRouter)

// listten port
app.listen(PORT, function () {
    console.log(
        `Express server listening on port ${
            this.address().port
        } in ${app.settings.env} mode`,
    )
})

