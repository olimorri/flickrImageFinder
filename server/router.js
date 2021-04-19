const router = require('express').Router();
const {getPhotos} = require('./controllers/imageController');

//Photos
router.get('/photos', getPhotos);

module.exports = router;