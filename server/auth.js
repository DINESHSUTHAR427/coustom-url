const jwt = require("jsonwebtoken");
const secret =  "DineshSuthar@$";

// const sessionIDUserMap = new Map();

function SetUser (user){
    const playLod = {
        _id: user._id,
        email: user.email,
    }
    return jwt.sign(playLod,secret);
}

function GetUser (token){
    if(!token) return null;
    return jwt.verify(token,secret);
}

module.exports = {
    SetUser,
    GetUser,
}