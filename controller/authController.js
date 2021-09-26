const { User } = require("../models/user")


exports.signup_post = async (req,res) => {
    const { email,password } = req.body
    
    try {
        const user = await User.create({ email,password })
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).send("error,user canont create.")
    }
}

exports.login_post = (req,res) => {
    res.send("login_post")
}

exports.logout_get = (req,res) => {
    res.send("logout_get")
}