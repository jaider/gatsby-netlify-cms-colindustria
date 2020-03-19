import React from 'react'
import PropTypes from 'prop-types'

const ImageView = ({code, onClick}) => (
    <>
        <img src={`https://img.youtube.com/vi/${code}/sddefault.jpg`} onClick={onClick} alt="Youtube Image" />
        <span onClick={onClick}>▶</span>
    </>
);

const YoutubeView = ({code}) => (
    <iframe className="has-ratio" width="640" height="360" src={`https://www.youtube.com/embed/${code}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
);

const LazyYoutube = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showYoutube: false };
  }

  showYoutube = event => {
    event.preventDefault(); 
    event.stopPropagation();
    this.setState({ showYoutube: true });
  }
  render() {
    return this.state.showYoutube 
        ? <YoutubeView code={this.props.url} /> 
        : <ImageView code={this.props.url} onClick={(e) => this.showYoutube(e)} />
  }
}

LazyYoutube.propTypes = {
    url: PropTypes.string
}

export default LazyYoutube
