const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config()

//routes
const workoutsRouter = require('./routes/workouts')
const userRoutes = require('./routes/user')


const app = express();
//middle ware

app.use(express.json());

//middleware

app.use((req,res,next )=>{
    console.log(req.path, req.method)
    next();
})

app.use('/api/workouts',workoutsRouter);
app.use('/api/user',userRoutes);

//CONNECT TO DB

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log("Listening port "+process.env.PORT);
    })
} )
.catch((error) => {
    console.log(error)
})


