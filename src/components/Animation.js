import React from "react"
import ReactPlayer from "react-player/file"
// import { reactPlayer } from "./Animation.module.css"
import "./atlas.sass"

const Animation = ({ src, alt, ...props }) => {
  if (src.toString().endsWith(".gif")) {
    // GIF
    return (
      <img
        src={src}
        alt={alt}
        {...props}
      />
    )
  } else {
    // Video
    return (
      <ReactPlayer
        className="react-player"
        url={src}
        playing={props.playing || "true"}
        loop={props.loop || "true"}
        {...props}
      />
    )
  }
}

export default Animation
