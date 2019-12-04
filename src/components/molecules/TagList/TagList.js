import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

import {pick, omit} from 'lodash'

import TextField from '../../atoms/TextField/TextField'
import Button from '../../atoms/Button/Button'

/**
 * Provides a list of tags that's influenced by a delete button next to each
 * tag and an input text that can be used to extend the list.
 */
export default function TagList (props) {
  const [tags, setTags] = useState(props.tags || [])
  const input = useRef(null)
  const maxTags = Math.min(props.maxTags || 4, 4)

  // we pass on some props to the input element
  const inputProps = pick(props, ['label', 'placeholder'])

  // clear input and add a tag when pressing enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && tags.length < maxTags && input.current.value !== '') {
      setTags(tags.concat([{ label: input.current.value, value: input.current.value }]))
      input.current.value = ''
      e.stopPropagation()
      e.preventDefault()
    }
  }

  // remove label at index when a button is clicked
  const removeLabel = (e, labelIdx) => {
    // NOTE: This seems to be a bug in react-semantic-ui or react? This
    // function is called as soon as the button is mounted, even though we
    // only define it onClick. Cray cray!
    if (e.clientX === 0 && e.clientY === 0) return

    setTags(tags.slice(0, labelIdx).concat(tags.slice(labelIdx + 1)))
    e.stopPropagation()
    e.preventDefault()
  }

  return <>
    <div>
      <TextField
        disabled={tags.length >= maxTags}
        ref={input}
        onKeyPress={handleKeyPress}
        {...omit(inputProps, ['label'])} />
    </div>
    <div>
      {tags.map((tag, i) => <span key={`tag-elem-${i}`}>
        <Button icon={{ icon: 'delete' }} onClick={e => removeLabel(e, i)}>
          {tag.label}
        </Button>
        <input type='hidden' name={`${props.tagName}[]`} value={tag.value} />
      </span>)}
    </div>
  </>
}

TagList.propTypes = {
  // the tag name will decide the name of the hidden input field that is used
  // to pass the tag on to the wrapping form
  tagName: PropTypes.string.isRequired,
  // each tag is an object like {value, label}
  tags: PropTypes.arrayOf(PropTypes.object),
  maxTags: PropTypes.number
}