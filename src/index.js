const mongoose = require("mongoose");
const express = require("express");
const {evenodd} = require("./Controller/usercontroller")

const app = express();

const port = 5000;

const mogourl =   "mongodb+srv://ujjwalkamboj001_db_user:Q8911DoUl9TuI0Cl@ujjwal.opys1ir.mongodb.net/?appName=Ujjwal"

mongoose.connect(mogourl)

.then(() => console.log(`mongo db connect `))
.catch((e) => console.log(`mongo db error${e}`))


app.listen(port, () => {console.log(`Server is running on port ${port}`)})

console.log(evenodd(2));