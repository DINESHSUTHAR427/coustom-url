const express = require("express")

const router = express.Router();
const {handleGenerateNewShortUrl,handle_find_shortId ,handleGetAnalytics,RenderHome

} = require("../controllers/url.js")

router.post("/",handleGenerateNewShortUrl);
router.get("/:shortID",handle_find_shortId);
router.get("/analytics/:shortID",handleGetAnalytics);

module.exports = router;