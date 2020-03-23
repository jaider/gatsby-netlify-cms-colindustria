import React from 'react'
import PropTypes from 'prop-types'

const Slideshow = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.toggleSlide(),
      4000 // 4 seconds
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleSlide = () => {
    this.setState(
      {
        activeIndex: (this.state.activeIndex + 1) % this.props.slides.length,
      }
    );
  }
  render() {
    return (
      <div className="slideshow-container">
        {this.props.slides.map(({image, heading, subheading}, i) => (
          <div
            key={i}
            className={`full-width-image margin-top-0 slideshow-hidden ${this.state.activeIndex === i ? 'slideshow-visible' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
              })`,
              backgroundPosition: `center center`,
              backgroundAttachment: `fixed`,
            }}
          >
            <div
              style={{
                display: 'flex',
                height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',
              }}
            >
              <h1
                className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered col-slide-text col-slide-border"
              >
                {heading}
              </h1>
              <h3
                className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered col-slide-text"
              >
                {subheading}
              </h3>
              <div className="has-text-centered">
                <a href="http://web.colindustria.com/shop/" target="_self" class="button is-primary">Conocer Mas</a>
              </div>
            </div>
          </div>
          )
        )}
      </div>
    )
  }
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      subheading: PropTypes.string,
    })
  ),
}

export default Slideshow
