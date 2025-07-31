const {GetUser} = require('../server/auth');

function restrictsLoginUuid (req,res ,next){
    const UserUuid = req.cookies?.uui;
    if(!UserUuid){
        return res.redirect("/login")
    }
    const user = GetUser(UserUuid);
    if(!user){
        return res.redirect("/login")
    }

    req.user = user;
    next();
}

async function CheckAuth (req,res,next) {
    const UserUuid = req.cookies?.uui;
    const user = GetUser(UserUuid);
    req.user = user;
    next();
}
module.exports = {
    restrictsLoginUuid,
    CheckAuth,
}