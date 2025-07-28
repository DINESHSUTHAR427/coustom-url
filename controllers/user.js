const User = require('../models/user');
const {v4 : uuidV4} = require('uuid');
const {SetUser} = require('../server/auth');



async function handleGetUserSingUP(req,res) {
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    })

    return res.redirect("/")
}

async function handleGetUserLogin(req,res) {
    const {email,password} = req.body;
    const user = await User.findOne({
        email,
        password,
    })
    if(!user){
        return res.render("login",{
            error : "invalid email or password",
        })
    }
    const sessionID = uuidV4();
    SetUser(sessionID,user);
    res.cookie("uui",sessionID)
    return res.redirect("/")
}

module.exports = {
    handleGetUserSingUP,
    handleGetUserLogin,
}