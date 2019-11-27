import React, {useState} from 'react'
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

export default function SparqlPage() {
  const [response, setResponse] = useState(null)

  return <>
    <Heading type='H1'>The Stars are Sparqling tonight ✨</Heading>
    <WikidataQueryEditor
      onQueryResult={response => setResponse(response)}
      onQueryFailure={(...args) => console.log('query failure', args)}>
      {exampleQuery}
    </WikidataQueryEditor>

    {/* NOTE: This is only here for demonstrative purposes */}
    {response != null &&
      <>
        <Heading type='H2'>Query response</Heading>
        <table>
          <thead>
            <tr>
              {response.head.vars.map(label => <td>{label}</td>)}
            </tr>
          </thead>
          <tbody>
            {response.results.bindings.map(binding =>
              <tr>
                <td colspan='3'><pre>{JSON.stringify(binding)}</pre></td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    }
  </>
}