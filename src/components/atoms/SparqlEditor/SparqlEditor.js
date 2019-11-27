import React, { useEffect, useRef } from 'react'
import YASQE from 'yasgui-yasqe'

import 'yasgui-yasqe/dist/yasqe.css'

const yasqeConfig = {
  sparql: {
    complete: (...args) => {
      console.log('Sparql query complete', args)
    }
  }
}

const SparqlEditor = ({ children }) => {
  const textareaRef = useRef(null)

  useEffect(() => {
    console.log('YASQE mounted')
    console.log('YASQE', YASQE)
    YASQE.addPrefixes

    const editor = YASQE.fromTextArea(textareaRef.current)
    editor.addPrefixes({
      wd: 'http://www.wikidata.org/entity/',
      wdt: 'http://www.wikidata.org/prop/direct/',
      wikibase: 'http://wikiba.se/ontology#',
      p: 'http://www.wikidata.org/prop/',
      ps: 'http://www.wikidata.org/prop/statement/',
      pq: 'http://www.wikidata.org/prop/qualifier/',
      rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
      bd: 'http://www.bigdata.com/rdf#'
    })
  })

  return <>
    <textarea ref={textareaRef}>
      {children}
    </textarea>
  </>
}

export default SparqlEditor