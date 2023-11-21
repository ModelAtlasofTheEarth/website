import React from "react"
import ReactPlayer from "react-player/file"

class Animation extends React.Component {
  render() {
    const {
      src,
      alt,
      playing = true,
      loop = true,
    } = this.props
    let internalElement

    if (src.toString().endsWith(".gif")) {
      // GIF
      internalElement = <img src={src} alt={alt} {...this.props}/>
    } else {
      // Video
      internalElement = (
        <ReactPlayer
          className="react-player"
          url={src}
          playing={playing}
          loop={loop}
          width="100%"
          height="100%"
          {...this.props}
        />
      )
    }

    return <div className="animation-container">{internalElement}</div>
  }
}

export default Animation
