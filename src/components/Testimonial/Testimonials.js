import Slider from 'react-slick';
import React, { Component } from 'react';
import { TESTIMONIALS } from '../../constants/testimonials';

require('./testimonials.scss');

class Testimonials extends Component {
  renderTestimonial=(content, name) => (
    <div
      className="testimonial__container"
      key={`key-${name}`}
    >
      <p className="testimonial__content">{content}</p>
      <h3 className="testimonial__name">{name}</h3>
    </div>
  )

  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="testimonials__container">
        <Slider {...settings}>
          {TESTIMONIALS.map(testimonial => this.renderTestimonial(testimonial.content, testimonial.name))}
        </Slider>
      </section>
    );
  }
}

export default Testimonials;
