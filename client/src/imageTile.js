export default function ImageTile(props) {
  return (
    <div className="image_tile">
      <h3>{props.image.title}</h3>
      <img src={props.image.media.m} alt={props.image.title}></img>
    </div>
  );
}
