import React, { Component } from 'react';


require('./legal.scss');

class Home extends Component {
  render() {
    return (
      <div class="legal__container">

        <h1 class="legal__heading"> {`CANCELLATION AND REFUND`}</h1>


        <h2 class="legal__sub-heading">
        {`
        Refunds
        `}
        </h2>
        <p class="legal__para">
        {`
          All tickets for the Workshop shall be non-refundable except as set out in paragraphs 4 and 5 below. However, if you are unable to attend the Workshop for any reason you may email us at `} <a
            href="mailto:hello@papercranelab.com"
            className="legal__contact"
          >
            hello@papercranelab.com
          </a>
          {` to provide us with the name of a substitute to attend the Workshop on your behalf and on receipt of this email we shall make such substitution and allow the substitute access to the Workshop. We may at our discretion charge an administration fee of up to £50 for making such substitution.

        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        Cancellation
        `}
        </h2>
        <p class="legal__para">
        {`
        There may be circumstances in which we need to cancel the Workshop. In such circumstances, we will provide you with a full refund of the amount of the Registration Fee that you have paid to us and we will make every effort to provide you with such refund within 14 days of the date of cancellation.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        Postponement or change to venue
        `}
        </h2>
        <p class="legal__para">
        {`
          There may be circumstances in which we need to postpone the Workshop or change the venue at which Workshop is to be held and if we do, we shall advise you of this as soon as we possibly can. If the new date or venue does not work for you, you may cancel your ticket by emailing us at `} <a
            href="mailto:hello@papercranelab.com"
            className="legal__contact"
          >
            hello@papercranelab.com
          </a>
          {` and we shall provide you with a full refund.


        `}
        </p>




      </div>
    );
  }
}


export default Home;
