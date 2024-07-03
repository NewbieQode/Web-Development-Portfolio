function Video2(props) {
  return (
    <div className="video2">
      <img
        className="video-img2"
        src="http://img.youtube.com/vi/uwCabgduJgw/maxresdefault.jpg"
        alt="thumbnail"
      ></img>
      <h3 className="video-title2">{props.title}</h3>
      <p className="video-name2">{props.name}</p>
      <p className="video-info2">
        {props.views}views {props.date}
      </p>
    </div>
  );
}
export default Video2;
