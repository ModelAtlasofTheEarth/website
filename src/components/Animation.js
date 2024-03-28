import React from "react"

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
        <video
          className="animation"
          src={src}
          preload="auto"
          width="fit-content"
          height="fit-content"
          autoPlay
          loop
          muted
        />
      )
    }

    return <div className="animation-container" alt={alt}>{internalElement}</div>
  }
}

export default Animation
