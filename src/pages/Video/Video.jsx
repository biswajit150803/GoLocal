import React from "react";
import ReactPlayer from "react-player";
// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.css"; 
import "./Video.css";
function Video(props) {
  return (
    <div className="videotop">
      <div className="videoText">{props.text}</div>
      <ReactPlayer className="videoplayer" url={props.url} controls={true} />
      {/* <Player
      className="videoplayer"
        playsInline
        poster="./ice1.jpg"
        src={props.url} */}
      {/* /> */}
    </div>
  );
}

export default Video;
