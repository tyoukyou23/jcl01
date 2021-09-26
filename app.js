require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const port = process.env.PORT || 5000
const authRoutes = require("./routes/authRoutes")

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use("/auth",authRoutes)
app.use("/",(req,res)=> res.send("hello world"))

mongoose.connect(process.env.DB_CONNECT)
    .catch(err => console.error(err))
    .then(() => app.listen(port,() => console.log(`Server is running on ${port}.`)))
