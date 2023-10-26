require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


//DB connection
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true
}).then(()=>{
    console.log('DB CONNECTED')
}).catch((err)=>{
    console.log(err)
})

//My Routes 
const userRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
// const productRoutes = require("./routes/product");


//middleware
app.use(express.json());
app.use(cors());

//my routes
app.use("/api",userRoutes);
app.use("/api/blog",blogRoutes);

// app.use("/product",productRoutes)

const port = 8000;

app.listen(port,()=>{
    console.log(`Server is up and running at port ${port}`)
})