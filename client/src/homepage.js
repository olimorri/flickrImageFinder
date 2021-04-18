import React, { useEffect, useState } from 'react';
import ImageList from './imageList';

export default function Homepage() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/photos`)
      .then((response) => response.json())
      .then((images) => {
        setImageList((prevState) => [...prevState, ...images]);
      });
  }, []);

  return <ImageList images={imageList} className="image_list" />;
}
