import React, { Component } from 'react';
require('./cover.scss');

class Cover extends Component {
  render() {
    return (
      <div className="cover__container">
        <img className="cover__image" src="/cover.png" alt="top view illustration of a work table" />
        <div className="cover__heading-container">

          <h1 className="heading cover__heading">
           Innovate, Create & Make !
          </h1>
          <h2 className="heading cover__sub-heading">
          A Paper Crane Lab Adventure
          </h2>
        </div>
        <div className="cover__logo-container">
          <a className="logo__link" href="https://www.youtube.com/channel/UC2kToqnu4t0ZbQcCidd_nAw" target="_blank">
            <img className="logo__image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png" />
          </a>
          <a className="logo__link" href="https://www.instagram.com/papercranelab/" target="_blank">
            <img className="logo__image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" />
          </a>
          <a className="logo__link" href="https://medium.com/paper-crane-lab" target="_blank">
            <img className="logo__image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Medium_colored_svg-128.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Cover;
