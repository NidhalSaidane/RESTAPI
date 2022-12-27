const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config({ path: './config/.env' });


mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
)
.then(res=> console.log('DataBase connected'))
.catch((err) => console.log(err) ) 


app.use(express.json());
app.use("/users", require("./Routes/useRoutes"));


const PORT = process.env.PORT;
app.listen(PORT,()=>console.log("listening in port 8080"))