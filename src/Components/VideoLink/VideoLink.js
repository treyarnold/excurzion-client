import React from "react";
import { Link } from "react-router-dom";
import classes from "./VideoLink.module.css";

const VideoLink = (props) => {
  const id = props.id;
  const title = props.data.title;
  const thumbnail = props.data.thumbnail;
  return (
    <div>
      <Link to={`/videos/${id}`}>
        <img className={classes.image} src={thumbnail} alt={title} />
      </Link>
      <h3>{title}</h3>
      <h4>{props.data.description}</h4>
    </div>
  )
};

export default VideoLink;