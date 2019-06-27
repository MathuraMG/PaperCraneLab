import Slider from "react-slick";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TESTIMONIALS } from '../../constants/testimonials'

require('./contact.scss');

class Testimonials extends Component {
  renderTestimonial=(content, name)=> {
    return (
      <div className="testimonial__container">
        <p className="testimonial__content">{content}</p>
        <h3 className="testimonial__name">{name}</h3>
      </div>
    )
  }
  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {TESTIMONIALS.map((testimonial)=>{
          return this.renderTestimonial(testimonial.content, testimonial.name)
        })}
      </Slider>
    );
  }
}

export default Testimonials;
