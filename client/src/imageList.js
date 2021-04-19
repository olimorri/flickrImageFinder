import ImageTile from './imageTile';

export default function ImageList(props) {
  return (
    <div>
      <h1 className="page_title">Flickr Photo Stream</h1>
      <div className="image_list">
        {props.images.map((image, index) => (
          <ImageTile image={image} key={index} />
        ))}
      </div>
    </div>
  );
}
