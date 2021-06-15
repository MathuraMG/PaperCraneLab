import React, { Component } from 'react';
import { WORK_LIST, WORK_IMG } from '../../constants/workList.js';
import renderHTML from 'react-render-html';

require('./work.scss');

class Work extends Component {
  renderImage=(src, alt) => (
    <img
      className="work__image"
      src={src}
      alt={alt}
    />)

  render() {

    return (
      <section className="container container-col" id="work">
        <h1 className="heading team__heading"> Our adventures so far </h1>

        <p className="content">
         We are working with multiple other organisations and individuals to spread our love for STEM education.
         Here is some of our outreach work so far. If you would be interested in collaborating with us,
         &nbsp;
          <a className="highlight" href="#contact">please do reach out to us! </a>
        </p>

        <section className="sub-container">
          <ul className="work__images">
            {WORK_IMG.map(img => {
              return(
                <li>
                  {this.renderImage(img.src, img.alt)}
                  <p className="content work__image-text">{img.text}</p>
                </li>
              )
              }
            )}

          </ul>
        </section>

        <ul className="work__list-items">
          {WORK_LIST.map(work => {
              return(
                <li className="work__list-items">
                  <p className="content"> {renderHTML(work)} </p>
                </li>
              )
            }
          )}
        </ul>
      </section>
    );
  }
}

export default Work;

//        <h2 className="sub-heading team__heading">  </h2>
