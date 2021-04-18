const router = require('express').Router();
const {getPhotos} = require('./controllers/imageController');

router.get('/photos', getPhotos);

module.exports = router;