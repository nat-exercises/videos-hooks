import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className=" video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div style={{ fontSize: "10px" }}>
          <div className="header-message header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
