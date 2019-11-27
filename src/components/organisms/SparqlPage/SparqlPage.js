import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import SparqlEditor from '../../atoms/SparqlEditor/SparqlEditor'

// this is just here to show how the SparqlEditor can be used
const exampleQuery = `
#Cats, with pictures
#added before 2016-10

#defaultView:ImageGrid
SELECT ?item ?itemLabel ?pic
WHERE
{
?item wdt:P31 wd:Q146 .
?item wdt:P18 ?pic
SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" }
}
`

export default function SparqlPage() {
  return <>
    <Heading type='H1'>The Stars are Sparqling tonight ✨</Heading>
    <iframe src='https://giphy.com/embed/jrutBd1N7ZhsINAPzs' width='480' height='268' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/wow-amazing-jake-jrutBd1N7ZhsINAPzs'>via GIPHY</a></p>
    <SparqlEditor>
      {exampleQuery}
    </SparqlEditor>
  </>
}