import React, { useEffect, useRef } from 'react'
import YASQE from 'yasgui-yasqe'

import 'yasgui-yasqe/dist/yasqe.css'

const prettifySparql = sparql => {
  // find first line with non-zero-whitespace and count how much that is
  window.sparql = sparql
  const lines = sparql.split('\n')
  const whitespace = lines.filter(line => line.match(/^\s+/))

  if (whitespace.length) {
    const numberOfSpaces = whitespace[0].match(/^\s+/)[0].length
    const re = new RegExp(`^\\s{${numberOfSpaces}}`)
    return lines.map(line => line.replace(re, '')).join('\n')
  }

  return sparql
}

const SparqlEditor = React.forwardRef(({ children, yasqeConfig }, ref) => {
  const textareaRef = useRef(null)

  useEffect(() => {
    const editor = YASQE.fromTextArea(textareaRef.current, yasqeConfig)
    if (ref != null) ref.current = editor
    return () => {
      editor.toTextArea()
    }
  })

  const prettifiedSparql = typeof children === 'string'
    ? prettifySparql(children)
    : children

  return <>
    <textarea ref={textareaRef} defaultValue={prettifiedSparql} />
  </>
})

SparqlEditor.displayName = 'SparqlEditor'

export default SparqlEditor
