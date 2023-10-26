import React from "react";
import video from "./sitar.mp4";
function Video() {
  return (
    <div className="flex items-center justify-center">
      <video width="750" height="500" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
