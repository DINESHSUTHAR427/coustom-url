const sessionIDUserMap = new Map();

function SetUser (id ,user){
    sessionIDUserMap.set(id,user)
}

function GetUser (id){
    return sessionIDUserMap.get(id);
}

module.exports = {
    SetUser,
    GetUser,
}