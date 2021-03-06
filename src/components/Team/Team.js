import React, { Component } from 'react';
import { ONLINE_LIST } from '../../constants/onlineList.js';
import Mathura from '../../assets/team/mathura.png';
import MVG from '../../assets/team/mvg.png';
import Dhanvini from '../../assets/team/dhanvini.png';
import Rushali from '../../assets/team/rushali.png';

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
              src={Mathura}
              />
            </a>
            <p className="content team__bio"> Mathura Govindarajan is a creative technologist and educator from Bangalore. She completed her Masters and Fellowship from NYU's Interactive Telecommunications Program, and her Bachelors in Electronics Engg.from NITK Surathkal. Her work lies in the intersection of art, design and technology. She has been teaching creative technology in various maker spaces and colleges for the past 4 years.</p>
          </li>

          <li className="team__list-item">
            <a target="_blank" href="https://mathuramg.com/index.html" className="team__link">
              <h3 className="team__name"> Govindarajan, Ops Consultant </h3>
              <img className="team__image"
              src={MVG}
              />
            </a>
            <p className="content team__bio"> MV Govindarajan retired as Chief of Operations at L&T Technology Services after 30 years of experience in both product development and Engineering Services. Equipped with a Masters from IITM, and a BE from Madras University, he started of his illustrious career by developing hardware and software for Floppy Disks and Dot Matrix Printers! He now consults with  Paper Crane Lab on Strategy and Business Development.</p>
          </li>


          <li className="team__list-item">
            <a target="_blank" href="https://www.linkedin.com/in/dhanvini-gudi-155334ba?originalSubdomain=ca" className="team__link">
              <h3 className="team__name"> Dhanvini, Facilitator </h3>
              <img className="team__image"
              src={Dhanvini}
              />
            </a>
            <p className="content team__bio"> <span className="highlight">Dhanvini Gudi </span>is an electrical engineer from Bangalore working as a Sr. Engineer at Global Foundries . She has a Masters degree in Microsystems and Nanodevices from the University of Alberta, Canada, and a BTech in Electrical and Electronics engineering from NITK Surathkal. She is  a teacher and content developer at PCL, and works on interdisciplinary STEM based outreach programs!</p>
          </li>
          <li className="team__list-item">
            <a target="_blank" href="https://rushali.space/" className="team__link">
              <h3 className="team__name"> Rushali, Facilitator </h3>
              <img className="team__image"
              src={Rushali}
              />
            </a>
            <p className="content team__bio"> <span className="highlight">Rushali Paratey </span>is an artist and engineer currently based in LA where she works as a technologist at Alchemy. She worked as Research Resident at New York University's Interactive Telecommunications program where she received her Masters. She loves working on AR, and related curriculum for PCL!</p>
          </li>

        </ul>
      </section>
    );
  }
}

export default Team;
