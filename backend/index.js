const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");

dotenv.config();

const port = process.env.PORT || 4000;

//database connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log(`Database Connected to ${mongoose.connection.host}`)
}).catch((err)=>console.log(err))


//middlewares
app.use(express.json());
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

//Routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)


app.listen(port,()=>{
    console.log(`Server is working on ${port} `)
})