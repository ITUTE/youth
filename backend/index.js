import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'

//import routers
import authRoute from './src/routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 5001
const api = '/app/api/v1'
dotenv.config()

const whitelist = [
    'https://youth-itute.vercel.app',
    'http://localhost:3000',
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

//use middlewires
app.use(express.json())
app.use(morgan('common'))
app.use(cors(corsOptions))
app.use(
    fileUpload({
        useTempFiles: true,
    }),
)

//Connect DB
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

//set routes
app.use(`${api}/auth`, authRoute)

app.listen(PORT, function () {
    console.log(
        `Express server listening on port ${
            this.address().port
        } in ${app.settings.env} mode`,
    )
})
