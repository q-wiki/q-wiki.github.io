import React, { useState } from 'react'

import { Message, Form } from 'semantic-ui-react'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

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
      text: (minigameType === 'sorting')
        ? 'The order shown as the answer is incorrect'
        : 'The suggested answer is incorrect'
    },
    {key: 'duplicates', value: 'duplicates', text: 'An option was offered multiple times'},
    {key: 'other', value: 'other', text: 'Other (please specify)'}
  ]

  return options
}

function validateForm (form) {

}

// TODO: Simulate a pre-filled form
function ReportForm () {
  const [minigameType, setMinigameType] = useState('')
  const [problem, setProblem] = useState('')

  return <Form onSubmit={form => console.log('form submitted with data', form)}>
    <Form.Group>
      <Form.Select
        label='Minigame type *'
        placeholder='Minigame type'
        options={[
          {key: 'sorting', value: 'sorting', text: 'Sorting'},
          {key: 'multipleChoice', value: 'multipleChoice', text: 'Multiple Choice'},
        ]}
        onChange={(_, {value}) => setMinigameType(value)} />
      <Form.Select
        disabled={minigameType === ''}
        label={`What's wrong? *`}
        placeholder={`What's wrong?`}
        options={problemOptions(minigameType)}
        onChange={(_, {value}) => setProblem(value)} />
    </Form.Group>
    {problem && <Form.Group><Form.TextArea label='Specify problem *' placeholder='Specify problem' /></Form.Group>}
    {/* TODO: Add fields to drill down on the problem */}
    <Form.Group><Form.TextArea label='Additional comments' placeholder='Anything else you want to add?' /></Form.Group>
    <Paragraph>Required fields are marked with *</Paragraph>
    <Form.Button primary>Submit</Form.Button>
  </Form>
}

export default function ReportPage() {
  return <>
    <Heading type='H1'>Got problems with wrong or missing content?</Heading>
    <Paragraph>Join the community and leave a suggestion. Together we can provide as much knowledge as possible!</Paragraph>

    <Heading type='H2'>Did you find an error in a question?</Heading>
    <Message>
      <Message.Header>Hint</Message.Header>
      <p>If you notice this during a game, there's a button to report problems that will fill out this form for you!</p>
    </Message>
    <ReportForm />
  </>
}