export default function ImageTile(props) {
  const username = props.image.author.split(' ')[1].replace(/[()"]/g, '');
  const profileUrl = `https://www.flickr.com/photos/${props.image.author_id}`;
  const title = props.image.title.slice(0, 50);
  const topTags = props.image.tags.split(' ').slice(0, 4).join(' ');
  console.log(topTags);
  console.log(props.image);

  return (
    <div className="image_tile">
      <img src={props.image.media.m} alt={props.image.title}></img>
      <div className="image_info">
        <p>
          <a href={props.image.link}>{title}</a> by <a href={profileUrl}>{username}</a>
        </p>
        {props.image.tags ? <p>Tags: {topTags}</p> : <></>}
      </div>
    </div>
  );
}
