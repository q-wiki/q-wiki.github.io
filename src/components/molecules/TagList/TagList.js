import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

import {Button, Form, Input} from 'semantic-ui-react'
import {pick, omit} from 'lodash'

/**
 * Provides a list of tags that's influenced by a delete button next to each
 * tag and an input text that can be used to extend the list.
 */
export default function TagList (props) {
  const [tags, setTags] = useState(props.tags || [])
  const [currentTag, setCurrentTag] = useState('')
  const input = useRef(null)
  const maxTags = Math.min(props.maxTags || 4, 4)

  // we pass on some props to the input element
  const inputProps = pick(props, ['label', 'placeholder'])
  const handleKeyPress = (e) => {
    const inputRef = input.current.inputRef.current
    if (e.key === 'Enter' && tags.length < maxTags) {
      setTags(tags.concat([{ label: inputRef.value, value: inputRef.value }]))
      inputRef.value = ''
      e.stopPropagation()
    }
    console.log(input)
  }

  return <>
    <Form.Field>
      <label>{inputProps.label}</label>
      <Input
        disabled={tags.length >= maxTags}
        onKeyPress={handleKeyPress}
        ref={input}
        type='text' {...omit(inputProps, ['label'])} />
    </Form.Field>
    {tags.map(tag => <>
      <Button icon='delete' labelPosition='right' content={tag.label} />
      <Form.Input type='hidden' name={`${props.tagName}[]`} value={tag.value} />
    </>)}
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