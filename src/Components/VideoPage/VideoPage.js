import React from "react";

import videos from "../../data";
import classes from "./VideoPage.module.css";

const VideoPage = (props) => {
  const id = props.match.params.id
  return (
    <a-scene className={classes.scene}>
      <a-assets>
        <video id="trey" autoPlay loop={true} src={videos[id].video}> </video>
      </a-assets>
      <a-videosphere src="#trey"></a-videosphere>
    </a-scene>
  )
};

export default VideoPage;