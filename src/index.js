const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes/userroutes")    

const app = express()
app.use(express.json())

const port = 5000;

const mogourl =  "mongodb+srv://sanjay:" 

mongoose.connect(mogourl)

.then(() => {console.log(`mongo db connect `)})
.catch((e) =>{console.log(`mongo db error${e}`)})

app.use("/", routes)

app.listen(port, () => {console.log(`Server is running on port ${port}`)})

