import React from 'react'

import Container75 from '../../atoms/Container75/Container75'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const ContactPage = () => <Container75>
  <Heading type='H1'>Contact</Heading>
  <div>
    <Paragraph>
      Malte Götz
    </Paragraph>
  </div>
  <div>
    <Paragraph>
      Tannenhofweg 101
    </Paragraph>
  </div>
  <div>
    <Paragraph>
      40627 Düsseldorf, Germany
    </Paragraph>
  </div>
  <div>
    <Paragraph>
      Phone: +49 176 - 71712069
    </Paragraph>
  </div>
  <div>
    <Paragraph>
      playstore@maltegoetz.com
    </Paragraph>
  </div>
</Container75>

ContactPage.displayName = 'ContactPage'

export default ContactPage
