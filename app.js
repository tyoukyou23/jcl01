require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = process.env.PORT || 5000
const authRoutes = require("./routes/authRoutes")

// middlewares
app.use(express.json())

// routes
app.use("/auth",authRoutes)

mongoose.connect(process.env.DB_CONNECT)
    .catch(err => console.error(err))
    .then(() => app.listen(port,() => console.log(`Server is running on ${port}.`)))
