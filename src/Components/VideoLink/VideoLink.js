import React from "react";

const VideoLink = (props) => {
  const url = props.data.url;
  const title = props.data.title;
  const thumbnail = props.data.thumbnail;
  return (
    <div>
      <a href={url}>
        <img src={thumbnail} alt={title}/>
      </a>
      <h3>{title}</h3>
      <h4>{props.data.description}</h4>
    </div>
  )
};

export default VideoLink;