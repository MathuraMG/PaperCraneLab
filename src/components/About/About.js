import Slider from 'react-slick';
import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import { ABOUT, ABOUT_IMG } from '../../constants/aboutContent';

require('./about.scss');

class About extends Component {
  isMobile = () => window.innerWidth < 1024;
  renderImage=(src, alt) => (
    <img
      className="about__image"
      src={src}
      alt={alt}
    />)

  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <section className="container" id="about">

        <section className="sub-container">
          <ul className="about__images">
            {ABOUT_IMG.map(img => {
                return <li>
                  {this.renderImage(img.src, img.alt)}
                  </li>
              }
            )}

          </ul>
        </section>

        <section className="sub-container">
          <h1 className="heading"> About Us </h1>
          <p className="content">
            {renderHTML(ABOUT)}
          </p>
        </section>



        </section>
      </div>
    );
  }
}

export default About;
