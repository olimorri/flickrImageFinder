import React, { useEffect, useState } from 'react';
import { getImages } from './services/apiClientService';
import ImageList from './imageList';

export default function Homepage() {
  const [imageList, setImageList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  //This function is run anytime a user types into the search bar
  //If the input is blank the filteredList remains blank
  //If input doesn't match any of the image titles, all of the images are displayed
  function filterImages(input) {
    if (input === '') return setFilteredList([]);
    const resultArr = [];
    //map through the imageList and check it title matches the input
    imageList.map((image) => {
      if (image.title.toLowerCase().includes(input)) {
        resultArr.push(image);
      }
      return setFilteredList(resultArr);
    });
  }

  //useEffect with empty array at the end to signify I want it to get images once, on pageLoad.
  useEffect(() => {
    getImages().then((images) => {
      //imageList is set using the prevState in order to allow for more photos to be added in time
      setImageList((prevState) => [...prevState, ...images]);
    });
  }, []);

  return (
    <div>
      {filteredList.length ? (
        <ImageList
          images={filteredList}
          className="image_list"
          handleOnChange={(input) => {
            filterImages(input);
          }}
        />
      ) : (
        <ImageList
          images={imageList}
          className="image_list"
          handleOnChange={(input) => {
            filterImages(input);
          }}
        />
      )}
    </div>
  );
}
