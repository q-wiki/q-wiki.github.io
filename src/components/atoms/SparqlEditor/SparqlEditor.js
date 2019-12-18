import React, { useEffect, useRef } from 'react'
import YASQE from 'yasgui-yasqe'

import 'yasgui-yasqe/dist/yasqe.css'

const SparqlEditor = React.forwardRef(({ children, yasqeConfig }, ref) => {
  const textareaRef = useRef(null)

  useEffect(() => {
    const editor = YASQE.fromTextArea(textareaRef.current, yasqeConfig)
    ref.current = editor
    return () => {
      editor.toTextArea()
    }
  })

  return <>
    <textarea ref={textareaRef} defaultValue={children} />
  </>
})

export default SparqlEditor