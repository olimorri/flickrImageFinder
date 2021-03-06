const axios = require('axios')

//Get Photos - I haven't specified photos with the "safe" tag, as this seemed to have the opposite effect
async function getPhotos (req,res) {
  try {
    const photos = await axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&lang=en-us`);
    res.status(200);
    res.send(photos.data.items);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

module.exports = {getPhotos}