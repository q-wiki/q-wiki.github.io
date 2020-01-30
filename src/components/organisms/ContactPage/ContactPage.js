import React from 'react'

import Container75 from '../../atoms/Container75/Container75'
import Heading from '../../atoms/Heading/Heading'

import './ContactPage.scss'

const ContactPage = () => <div className='contact-page'>
  <Container75 className='contact-page--container'>
    <Heading type='H1'>Contact</Heading>
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
  </Container75>
</div>
ContactPage.displayName = 'ContactPage'

export default ContactPage
