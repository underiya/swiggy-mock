const express = require("express");

const postRouter = express.Router();

postRouter.get("/posts",async(req, res)=>{
    try {
        const posts = await postRouter.find()
        res.status(200).json({msg:"done"})
    } catch (error) {
        res.status(400).json({msg:"failed"})
        console.log(error)
    }
})
postRouter.post("/posts",async(req, res)=>{
        const {} =req.body;
    try {
        const posts = await postRouter.find()
        res.status(200).json({msg:"done"})
    } catch (error) {
        res.status(400).json({msg:"failed"})
        console.log(error)
    }
})



module.exports={
    postRouter
}