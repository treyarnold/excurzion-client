import React from "react";

import video from "../../videos/20190727_112457_708.mp4"

const VideoPage = (props) => {
  // const id = props.match.params.id
  return (
    <a-scene>
      <a-assets>
        <video id="trey" autoPlay loop={true} src={video}> </video>
      </a-assets>
      <a-videosphere src="#trey"></a-videosphere>
    </a-scene>
  )
};

export default VideoPage;