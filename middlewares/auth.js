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
    next();
}

module.exports = {
    restrictsLoginUuid,
}