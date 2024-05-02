const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/users.model");

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (user) {
            bcrypt.hash(password, user.password, function (err, result) {
                if (result) {
                    var token = jwt.sign({ userId: user._id, username: user.username }, 'masai');
                    res.status(200).json({ msg: "login succesfull", token , user:user.username });
                }
            });
        }

    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});


userRouter.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    console.log(username)
    try {
        bcrypt.hash(password, 5, async function (err, hash) {
            if (err) {
                res.status(200).json(err);
            } else {
                const user = new userModel({
                    username,
                    email,
                    password: hash,
                });
                await user.save();
                res.status(201).json({ msg: "new user registered" });
            }
        });
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});

module.exports = { userRouter };
