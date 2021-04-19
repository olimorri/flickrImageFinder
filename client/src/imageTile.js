export default function ImageTile(props) {
  //Url needed to link the user's Flickr profile
  const profileUrl = `https://www.flickr.com/photos/${props.image.author_id}`;

  //Logic to separate username from default email and display correctly
  const username = props.image.author.split(' ')[1].replace(/[()"]/g, '');

  //Give a limit on the number of characters in the title - in some edge cases the title was very long
  const title = props.image.title.slice(0, 50);

  //Isolate the top tags and give a max to the number we can display
  const topTags = props.image.tags.split(' ').slice(0, 4).join(' ');

  //If the image doesn't have a title then we instead display "Image" - this gives the UI a more consistent look
  return (
    <div className="image_tile">
      <img src={props.image.media.m} alt={props.image.title}></img>
      <div className="image_info">
        {props.image.title !== ' ' ? (
          <p>
            <a href={props.image.link}>{title}</a> by <a href={profileUrl}>{username}</a>
          </p>
        ) : (
          <p>
            <a href={props.image.link}>Image</a> by <a href={profileUrl}>{username}</a>
          </p>
        )}
        {props.image.tags ? <p>Tags: {topTags}</p> : <></>}
      </div>
    </div>
  );
}
