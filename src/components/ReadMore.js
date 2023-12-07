import React from "react"
import AnimateHeight from "react-animate-height"

class ReadMore extends React.Component {
  state = {
    isOpened: false,
  }

  handleClick = () => this.setState({isOpened: !this.state.isOpened})

  render() {
    const {
      children,
      openHeader = "Read Less...",
      closedHeader = "Read More...",
      className = "read-more",
      duration = 500,
      id = "read-more",
      height = "auto",
    } = this.props
    const { isOpened } = this.state
    return (
      <div className={className}>
        <button
          aria-expanded={isOpened}
          onClick={this.handleClick}
        >
          {isOpened ? openHeader : closedHeader}
        </button>

        <AnimateHeight
          id={id}
          duration={duration}
          height={isOpened ? height : 0}
        >
          {children}
        </AnimateHeight>
      </div>
    )
  }
}

export default ReadMore
