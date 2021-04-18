const axios = require('axios')

//Get Photos

async function getPhotos (req,res) {
  //TODO: this needs to tidied up, to properly handle errors etc.
  const photos = await axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&lang=en-us`);
  res.send(photos.data.items);

 
}

module.exports = {getPhotos}