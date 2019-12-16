import React, { useState } from 'react'
import useForm from 'react-hook-form'
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
  const {register, handleSubmit} = useForm()

  return <form onSubmit={handleSubmit(form => console.log('form submitted with data', form))}>
    <Row>
      <Col xs>
        <Dropdown
          name='minigameType'
          placeholder='Minigame type *'
          options={[
            {key: 'sorting', value: 'sorting', text: 'Sorting'},
            {key: 'multipleChoice', value: 'multipleChoice', text: 'Multiple Choice'},
          ]}
          ref={register} />
      </Col>
      <Col xs>
        <Dropdown
          name='problem'
          disabled={/* minigameType === '' */ false}
          placeholder={`What's wrong? *`}
          options={problemOptions(/* minigameType */)}
          ref={register} />
      </Col>
    </Row>
    {/*problem === 'other'*/ false &&
      <Row>
        <Col xs>
          <div>
            <TextArea
              name='problemDescription'
              placeholder='Specify problem *'
              ref={register} />
          </div>
        </Col>
      </Row>}
    <Row>
      <Col xs>
        <TextField
          name='givenTask'
          placeholder='What was the question / task given in the minigame *'
          ref={register} />
      </Col>
      <Col xs>
        {/* TODO: How will this be validated? */}
        <TagList
          name='givenAnswers'
          placeholder='Provided answers *'
          tagName='answerOptions'
          register={register} />
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