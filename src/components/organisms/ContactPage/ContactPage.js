import React from 'react'

import Container75 from '../../atoms/Container75/Container75'
import Heading from '../../atoms/Heading/Heading'

import './ContactPage.scss'

const ContactPage = () => <div className='contact-page'>
  <Container75 className='contact-page--container'>
    <Heading type='H1'>Legal Notice</Heading>
    <div>
    <p>
      Malte Götz
    </p>
    <p>
      Tannenhofweg 101
    </p>
    <p>
      40627 Düsseldorf, Germany
    </p>
    <p>
      Phone: +49 176 - 71712069
    </p>
    <p>
      playstore@maltegoetz.com
    </p>
    </div>
    <div className="made-by-container">
      <p>Icons made by</p>
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>,&nbsp;
      <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a>,&nbsp;
      <a href="https://www.flaticon.com/authors/vaadin" title="Vaadin">Vaadin</a>,&nbsp;
      <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a>,&nbsp;
      <p>from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p></div>
<div className="made-by-container">
    Project Supervisor - HTW images by
    (c) 2018 HTW Berlin /
Nikolas Fahlbusch
    </div>


</Container75>
</div>
ContactPage.displayName = 'ContactPage'

export default ContactPage
