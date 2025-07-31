const {nanoid} = require("nanoid");
const url = require("../models/url.js");
const User = require("../models/user.js");

async function handleGenerateNewShortUrl (req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({Error: "url is require"})
    const shortid = nanoid(8);
    await url.create({
        ShortID : shortid,
        redirectURL: body.url,
        visite_History:[],
        createdBy : req.user._id,
    })
    return res.render('home',{
        id :shortid
    })
    // return res.json({id:shortid })
}

async function handle_find_shortId (req, res) {
    const ShortID = req.params.shortID;
    const entry = await url.findOneAndUpdate(
        { ShortID },
        {
            $push: {
                visite_History: {
                    timestamp: Date.now()
                }
            }
        }
    );
    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    return res.redirect(entry.redirectURL);
}


async function handleGetAnalytics(req,res) {
    const ShortID = req.params.shortID;
    const result = await url.findOne({
        ShortID
    });
    return res.json({
        totalClicks: result.visite_History.length,
        Analytics: result.visite_History,
    })

}

module.exports= {
handleGenerateNewShortUrl,
handle_find_shortId,
handleGetAnalytics,
} 