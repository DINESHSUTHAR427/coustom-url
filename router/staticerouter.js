const express = require("express");
const url = require("../models/url")
const router = express.Router();

router.get('/',async (req,res) => {
    if(!req.user) return res.redirect("/login")
    const allUrl = await url.find({createdBy: req.user._id});
    return res.render('home',{
        urls: allUrl,
    });
})

router.get('/singup',async(req,res) => {
    return res.render("singup");
})

router.get('/login',async(req,res) => {
    return res.render("login");
})


module.exports = router;