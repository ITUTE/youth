const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const authRoute = require("./src/routers/authRoutes");
const fileUpload = require('express-fileupload')

//Config env
dotenv.config({ path: "./.env" });

//Config CORS
const cors = require("cors");


var whitelist = [
    'https://youth-itute.vercel.app',
    'http://localhost:3000'
]

var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.options('*', cors())
app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}))

//Base url: no slash at the end
const api = "/app/api/v1";
//Connect DB
const connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log(" Mongoose connected ");
            });
    } catch (error) {
        console.log("Connect Error :", error.message);
        process.exit(1);
    }
};

connectDB();

/* ---------------------------------- Route --------------------------------- */
app.use(`${api}/auth`, authRoute);


app.get("/", (req, res) => res.send("Youth ITUTE API"));

app.listen(process.env.PORT || 5001, function () {
    console.log(
        "Express server listening on port %d in %s mode",
        this.address().port,
        app.settings.env
    );
});