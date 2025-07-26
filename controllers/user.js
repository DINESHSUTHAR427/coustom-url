const User = require('../models/user');

async function handleGetUserSingUP(req,res) {
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    })

    return res.render("home")
}

module.exports = {
    handleGetUserSingUP,
}