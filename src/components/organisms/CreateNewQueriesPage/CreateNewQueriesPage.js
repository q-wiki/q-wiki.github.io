import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import WikidataQueryEditor from '../../molecules/WikidataQueryEditor/WikidataQueryEditor'

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

export default function CreateNewQueriesPage() {
  return <>
    <Heading type='H1'>The Stars are Sparqling tonight ✨</Heading>
    <WikidataQueryEditor
      onQueryResult={(...args) => console.log('query result', args)}
      onQueryFailure={(...args) => console.log('query failure', args)}>
      {exampleQuery}
    </WikidataQueryEditor>
  </>
}
