import React, { useEffect, useState } from 'react';
import ImageList from './imageList';

export default function Homepage() {
  const [imageList, setImageList] = useState([]);

  //useEffect with emoty array at the end to signify I want it to get images once, on pageLoad.
  useEffect(() => {
    fetch(`http://localhost:3001/photos`)
      .then((response) => response.json())
      .then((images) => {
        setImageList((prevState) => [...prevState, ...images]);
        console.log(imageList);
      });
  }, []);

  return <ImageList images={imageList} className="image_list" />;
}
