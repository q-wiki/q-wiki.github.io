import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

import {pick, omit} from 'lodash'

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
    const inputRef = input.current.inputRef.current
    if (e.key === 'Enter' && tags.length < maxTags && inputRef.value !== '') {
      setTags(tags.concat([{ label: inputRef.value, value: inputRef.value }]))
      inputRef.value = ''
      e.stopPropagation()
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
      <label>{inputProps.label}</label>
      <input
        disabled={tags.length >= maxTags}
        onKeyPress={handleKeyPress}
        ref={input}
        type='text' {...omit(inputProps, ['label'])} />
    </div>
    <div>
      {tags.map((tag, i) => <span key={`tag-elem-${i}`}>
        <Button icon='delete' labelPosition='right' content={tag.label} onClick={e => removeLabel(e, i)} />
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