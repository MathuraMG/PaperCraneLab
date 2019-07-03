import Slider from 'react-slick';
import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { ABOUT, ABOUT_IMG } from '../../constants/aboutContent';

require('./about.scss');

class About extends Component {
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
      <section className="container" id="about">
        <section className="sub-container">
          <Slider {...settings}>
            {ABOUT_IMG.map(img => this.renderImage(img.src, img.alt))}

          </Slider>
        </section>
        <section className="sub-container">
          <h1 className="heading"> About Us </h1>
          <p className="content">
            {renderHTML(ABOUT)}
          </p>
        </section>
      </section>
    );
  }
}

export default About;
