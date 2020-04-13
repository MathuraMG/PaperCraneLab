import React, { Component } from 'react';


require('./legal.scss');

class Home extends Component {
  render() {
    return (
      <div class="legal__container">

        <h1 class="legal__heading"> {`TERMS OF SERVICE`}</h1>

        {`
          The following terms of service apply to all companies and or persons or other entities (“you”) that are attending any workshop or session (“Workshop”) organised by Paper Crane Lab LLP (“we” or “us”). Please ensure you have read and understand the following:
        `}

        <h2 class="legal__sub-heading">
        {`
        1. Acceptance of terms and conditions
        `}
        </h2>
        <p class="legal__para">
        {`
        By completing the registration form for a particular workshop, you are agreeing to the terms and conditions set out below (“Terms”) and they will be incorporated into the contract between us (“Contract”). You will ensure that your employees, partners, agents, contractors, subcontractors and any other person attending the Workshop on your behalf shall comply with these Terms. The Contract is formed when we send you a booking confirmation
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        2. Payment
        `}
        </h2>
        <p class="legal__para">
        {`
        The fee for attending the Workshop (“Registration Fee”) will be as stated on the registration form for the relevant Workshop from time to time. Prices are exclusive of GST and transaction fees except where expressly stated otherwise. All payments for the Registration Fee must be made in full at the time of completing the registration form and in any event prior to the date of the Workshop. If payment is not received within 7 days of your registration, your registration will be cancelled and the payment of any refund will be at our complete discretion. Payment will be made via our merchant account provider (and you consent to us passing your necessary details to the merchant account provider and to them processing necessary information about you) or directly to our bank account, as notified to you. We reserve the right to run price promotions as we think fit.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        3. Liability and Disclaimer – important, you must read this
        `}
        </h2>
        <p class="legal__para">
        {`
        Our sole liability in relation to any cancellation, postponement or change of venue shall be limited to the price paid by you for such Workshop and we shall not be liable under any circumstances for any consequential losses.
        In providing this workshop, no person is acting as your solicitor or providing you with legal advice. We are providing you with training, template documents and guidance.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        4. Your obligations
        `}
        </h2>
        <p class="legal__para">
        {`
        If you act in any way which in our opinion is likely to cause any harm or nuisance to any person at the Workshop, you will be required to leave the Workshop and we shall not be liable to refund your Registration Fee or any other payment.
        You must comply at all times with the health and safety policy of the venue. You must comply with all requests from us or the venue with regard to health and safety and failure to do so will result in you being asked to leave the workshop (in which case no refund will be provided). You may not bring any equipment or items of a hazardous or dangerous nature to the Workshop.
        You shall not cause any damage to any part of the venue (including outside areas, and all inside walls, flooring, fixtures and fittings). You are solely liable for any damage caused by you, your employees, contractors, sub-contractors and agents to any such area of the venue and shall fully reimburse us in relation to any damage so caused.
        You must keep your personal belongings with you at all times and we accept no liability for any damage to, loss of or theft of any of your belongings or other items brought to the Workshop by you.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        5. Promotional materials and materials at the Workshop
        `}
        </h2>
        <p class="legal__para">
        {`
        Unless otherwise stated, the copyright for any such promotional materials and any materials used at the Workshop (including course notes, slides, brochures, articles and case studies) belongs to us and may not be reproduced in any medium without our prior written consent.
        You may use such materials for your own business purposes only and may not reproduce, publish or deal with such materials in any way for any commercial use.
        We reserve the right to change the published programme (including the publicised speakers) or materials as we think fit.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        6. Photography and filming
        `}
        </h2>
        <p class="legal__para">
        {`
        We may wish to photograph or film the Workshop and reserve the right to do so for the purposes of promoting future workshops or otherwise. You consent to us (or any other person attending the Workshop) photographing or filming you and any persons attending the Workshop with you. You may not photograph or video the Workshop without our prior consent.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        7. Data protection
        `}
        </h2>
        <p class="legal__para">
        {`
        We will communicate with you using the contact details provided on the Registration Form for the purposes of the Workshop.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        8. Disability and medical conditions
        `}
        </h2>
        <p class="legal__para">
        {`
        If you have any disability or medical condition that requires us to make special arrangements for you, please email us at`} <a
          href="mailto:hello@papercranelab.com"
          className="legal__contact"
        >
          hello@papercranelab.com
        </a>
        {`as soon as possible and in any workshop at least 2 weeks prior to the date of the Workshop.
        `}
        </p>


        <h2 class="legal__sub-heading">
        {`
        9. Limitations of Liability
        `}
        </h2>
        <p class="legal__para">
        {`
        Whilst every reasonable precaution is taken by us to ensure security and safety at the workshop, we shall not in any way be liable for any loss or damage suffered by you whatsoever in relation to the Workshop, save that nothing in these Terms shall be deemed to limit the liability of any person for death or personal injury caused by negligence.
        Nothing in these Terms shall limit or exclude our liability for death or personal injury caused by our negligence, any fraudulent misrepresentation or any other liability for which it is unlawful to exclude or limit liability.
        Our total liability for any matter arising out of the Contract shall in all circumstances be limited to the price paid by you for the Workshop and we shall not in any circumstances be liable to you for any consequential loss whatsoever.
        `}
        </p>


      </div>
    );
  }
}


export default Home;
