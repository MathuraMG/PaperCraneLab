import React, { Component } from 'react';
import { YOUTUBE_LIST } from '../../constants/youtubeList.js';
import YouTube from 'react-youtube';

require('./youtube.scss');

class Youtube extends Component {
  render() {
    const opts = {
      height: '234',
      width: '384',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 1
      },
    };

    return (
      <section className="container container-col" id="youtube">
        <h1 className="heading team__heading"> Make with PCL! </h1>

        <p className="content">
         We believe that it’s important to have easy access to basic education.
         To promote this, we create STEM tutorials in multiple languages and make them available
         to all, free of cost, via platforms like
         &nbsp;
         <a className="youtube__link" target="_blank" href="https://www.youtube.com/channel/UC2kToqnu4t0ZbQcCidd_nAw">Youtube</a>
         , and
         &nbsp;
         <a className="youtube__link" target="_blank" href="https://www.instructables.com/member/PaperCraneLab/">Instructables</a>
         . Check them out!
        </p>
          <ul className="youtube__videos">
            {YOUTUBE_LIST.map((ytVideo) => {
                return(
                  <li className="youtube__video">
                    <YouTube videoId={ytVideo.id} opts={opts} />
                  </li>
                )
              }
            )}
          </ul>
      </section>
    );
  }
}

export default Youtube;

//        <h2 className="sub-heading team__heading">  </h2>
