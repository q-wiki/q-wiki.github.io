import React, { useState } from 'react'
import {Col, Row} from 'react-flexbox-grid'

import Button from '../../atoms/Button/Button'
import Container75 from '../../atoms/Container75/Container75'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import TextArea from '../../atoms/TextArea/TextArea'
import TextField from '../../atoms/TextField/TextField'

import TagList from '../../molecules/TagList/TagList'

// TODO:  validation

/**
 * Gives a list of options of what might be wrong, depending on the
 * minigame type
 * @param String minigameType
 * @return Object[]
 */
function problemOptions (minigameType) {
  let options = [
    {
      key: 'wrongAnswer',
      value: 'wrongAnswer',
      text: `The suggested ${(minigameType === 'sorting') ? 'order' : 'answer'} is incorrect`
    },
    {key: 'duplicates', value: 'duplicates', text: 'An option was offered multiple times'},
    {key: 'other', value: 'other', text: 'Other (please specify)'}
  ]

  return options
}

// TODO: Simulate a pre-filled form
function Report () {
  const [minigameType, setMinigameType] = useState('')
  const [problem, setProblem] = useState('')

  return <form onSubmit={form => console.log('form submitted with data', form)}>
    <Row>
      <Col xs>
        <Dropdown
          placeholder='Minigame type *'
          options={[
            {key: 'sorting', value: 'sorting', text: 'Sorting'},
            {key: 'multipleChoice', value: 'multipleChoice', text: 'Multiple Choice'},
          ]}
          onChange={e => setMinigameType(e.target.value)} />
      </Col>
      <Col xs>
        <Dropdown
          disabled={minigameType === ''}
          placeholder={`What's wrong? *`}
          options={problemOptions(minigameType)}
          onChange={e => setProblem(e.target.value)} />
      </Col>
    </Row>
    {problem === 'other' &&
      <Row>
        <Col xs>
          <div>
            <TextArea placeholder='Specify problem *' />
          </div>
        </Col>
      </Row>}
    <Row>
      <Col xs>
        <TextField placeholder='What was the question / task given in the minigame *' />
      </Col>
      <Col xs>
        <TagList placeholder='Provided answers *' tagName='answerOptions' />
      </Col>
    </Row>
    <Row>
      <Col xs>
        <TextArea placeholder='Any additional information you want to provide?' />
      </Col>
    </Row>
    <Row>
      <Col xs>
        <Paragraph>Required fields are marked with *</Paragraph>
      </Col>
    </Row>
    <Row>
      <Col xs>
        <Button>Submit</Button>
      </Col>
    </Row>
  </form>
}

export default function ReportPage() {
  return <Container75>
    <Row>
      <Col xs>
        <Heading type='H1'>Got problems with wrong or missing content?</Heading>
        <Paragraph>Join the community and leave a suggestion. Together we can provide as much knowledge as possible!</Paragraph>
      </Col>
    </Row>
    <Row>
      <Col xs>
        <Heading type='H2'>Did you find an error in a question?</Heading>
        <Paragraph>If you notice this during a game, click the in-game button. It makes filling out this form much quicker!</Paragraph>
      </Col>
    </Row>
    <Report />
  </Container75>
}