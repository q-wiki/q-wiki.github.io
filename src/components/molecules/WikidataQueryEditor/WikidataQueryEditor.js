import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button'
import SparqlEditor from '../../atoms/SparqlEditor/SparqlEditor'

const wikidataQueryPrefixes = {
  // These are the default prefixes taken from query.wikidata.org
  bd: 'http://www.bigdata.com/rdf#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
  pq: 'http://www.wikidata.org/prop/qualifier/',
  ps: 'http://www.wikidata.org/prop/statement/',
  p: 'http://www.wikidata.org/prop/',
  wikibase: 'http://wikiba.se/ontology#',
  wdt: 'http://www.wikidata.org/prop/direct/',
  wd: 'http://www.wikidata.org/entity/'
}

const wikidataQueryUiLink = query =>
  `https://query.wikidata.org/#${encodeURIComponent(query)}`

const WikidataQueryEditor = ({ children, onQueryResult, onQueryFailure }) => {
  // YASQE is the query editor we use under the hood; we can get an instance
  // of the set up editor by passing a ref
  const yasqe = useRef(null)
  const yasqeConfig = {
    createShareLink: null,
    sparql: {
      // showQueryButton: true, // <- this starts spinning when calling
      // `yasqe.current.query()` but nothing happens
      endpoint: window.location.protocol + '//query.wikidata.org/sparql',
      callbacks: {
        error: onQueryFailure,
        success: onQueryResult
      }
    }
  }

  const openQueryUi = e => {
    e.preventDefault()
    window.open(wikidataQueryUiLink(yasqe.current.getValue()))
  }

  useEffect(() => {
    // YASQE has been succesfully set up!
    yasqe.current.addPrefixes(wikidataQueryPrefixes)
  })

  return <>
    <SparqlEditor ref={yasqe} yasqeConfig={yasqeConfig}>
      {children}
    </SparqlEditor>

    {/* NOTE: Submit might be a weird label when this component shows up in a
        bigger form. */}
    <Button onClick={_ => yasqe.current.query()}>Submit</Button>
    {' or '}
    <a href='#' onClick={openQueryUi}>try this query on query.wikidata.org</a>
  </>
}

WikidataQueryEditor.propTypes = {
  children: PropTypes.string,
  onQueryResult: PropTypes.func,
  onQueryFailure: PropTypes.func
}

export default WikidataQueryEditor