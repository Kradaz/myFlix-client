import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
  return (
    <div>
      <div>
        <img src={movie.ImagePath} crossOrigin = "anonymous" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <button onClick={() => { onBackClick(null); }}>Back</button>
    </div>
  );
};
};
MovieView.propTypes = {
  movie: PropTypes.shape({
  Title: PropTypes.string.isRequired,
  ImagePath: PropTypes.string.isRequired,
  author: PropTypes.string
}).isRequired,
onBackClick: PropTypes.func.isRequired
};

