const express= require("express");
const { userRouter } = require("./routes/user.route");
const { connection } = require("./config/db");
const { postRouter } = require("./routes/post.route");
const { auth } = require("./middleware/auth.middleware");
const cors= require("cors");



const app= express();
app.use(express.json())
app.use(cors());


app.use("/api",userRouter );
// app.use("/auth", );
app.use("/api" , auth , postRouter);

const port =8080;
app.listen(port,async()=>{
    try {
        await connection;
        console.log("connected to db");
        console.log(`server is runnning at ${port}`)
    } catch (error) {
        console.log(error);
    }
    
})