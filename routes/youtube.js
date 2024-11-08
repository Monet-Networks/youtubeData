const express = require('express');
const router = express.Router();
const youtube = require('../controller/youtube');







router.get('/getYoutubeSearch',youtube.youtubeApi);




module.exports = router;