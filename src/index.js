const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes/userroutes")    
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.port || 8000   


mongoose.connect(process.env.mogourl)

.then(() => {console.log(`mongo db connect `)})
.catch((e) =>{console.log(`mongo db error${e}`)})

app.use("/", routes)

app.listen(process.env.port, () => {console.log(`Server is running on port ${process.env.port}`)})


 