function Card1(props) {
  return (
    <div className="card">
      <img
        className="card-img"
        src="http://img.youtube.com/vi/9EEp1q_iMYc/maxresdefault.jpg"
        alt="thumbnail"
      ></img>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-name">{props.name}</p>
      <p className="card-info">
        {props.views}views {props.date}
      </p>
    </div>
  );
}
export default Card1;
