const express = require("express")

const router = express.Router();
<<<<<<< HEAD
const {handleGenerateNewShortUrl,handle_find_shortId ,handleGetAnalytics
=======
const {handleGenerateNewShortUrl,handle_find_shortId ,handleGetAnalytics,RenderHome
>>>>>>> 457d44c (add server side rendering)

} = require("../controllers/url.js")

router.post("/",handleGenerateNewShortUrl);
router.get("/:shortID",handle_find_shortId);
router.get("/analytics/:shortID",handleGetAnalytics);

<<<<<<< HEAD
=======

>>>>>>> 457d44c (add server side rendering)
module.exports = router;