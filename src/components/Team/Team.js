import React, { Component } from 'react';
import { ONLINE_LIST } from '../../constants/onlineList.js';

require('./team.scss');

class Team extends Component {
  render() {
    return (
      <section className="container container-col" id="team">
        <h1 className="heading team__heading"> Our Team </h1>
        <h2 className="sub-heading team__heading"> Meet the vibrant group that forms PCL! </h2>

        <ul className="team__list">
          <li className="team__list-item">
            <a target="_blank" href="https://mathuramg.com/index.html" className="team__link">
              <h3 className="team__name"> Mathura, Founder </h3>
              <img className="team__image"
              src="https://pcl-images.s3.ap-south-1.amazonaws.com/images/team/mathura.png"
              />
            </a>
            <p className="content team__bio"> Mathura Govindarajan is a creative technologist and educator from Bangalore. She completed her Masters and Fellowship from NYU's Interactive Telecommunications Program, and her Bachelors in Electronics Engg.from NITK Surathkal. Her work lies in the intersection of art, design and technology. She has been teaching creative technology in various maker spaces and colleges for the past 4 years.</p>
          </li>


          <li className="team__list-item">
            <a target="_blank" href="https://www.linkedin.com/in/dhanvini-gudi-155334ba?originalSubdomain=ca" className="team__link">
              <h3 className="team__name"> Dhanvini, Facilitator </h3>
              <img className="team__image"
              src="https://pcl-images.s3.ap-south-1.amazonaws.com/images/team/dhanvini.png"
              />
            </a>
            <p className="content team__bio"> <span className="highlight">Dhanvini Gudi </span>is an electrical engineer from Bangalore working as a Sr. Engineer at Global Foundries . She has a Masters degree in Microsystems and Nanodevices from the University of Alberta, Canada, and a BTech in Electrical and Electronics engineering from NITK Surathkal. She is  a teacher and content developer at PCL, and works on interdisciplinary STEM based outreach programs!</p>
          </li>
          <li className="team__list-item">
            <a target="_blank" href="https://rushali.space/" className="team__link">
              <h3 className="team__name"> Rushali, Facilitator </h3>
              <img className="team__image"
              src="https://pcl-images.s3.ap-south-1.amazonaws.com/images/team/rushali.jpeg"
              />
            </a>
            <p className="content team__bio"> <span className="highlight">Rushali Paratey </span>is an artist and engineer currently based in LA where she works as a technologist at Alchemy. She worked as Research Resident at New York University's Interactive Telecommunications program where she received her Masters. She loves working on AR, and realted curriculum for PCL!</p>
          </li>

        </ul>
      </section>
    );
  }
}

export default Team;

// <li className="team__list-item">
//   <h3 className="team__name"> MVG, Biz Consultant </h3>
//   <img className="team__image"
//   src="https://pcl-images.s3.ap-south-1.amazonaws.com/images/team/mvg.jpeg"
//   />
//   <p className="content team__bio"> MV Govindarajan has been working in </p>
// </li>
