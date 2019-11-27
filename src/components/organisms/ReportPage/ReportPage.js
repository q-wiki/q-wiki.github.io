import React, { useState } from 'react'

import Button from '../../atoms/Button/Button'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

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
    <select
      label='Minigame type *'
      placeholder='Minigame type'
      options={[
        {key: 'sorting', value: 'sorting', text: 'Sorting'},
        {key: 'multipleChoice', value: 'multipleChoice', text: 'Multiple Choice'},
      ]}
      onChange={(_, {value}) => setMinigameType(value)} />
    <select
      disabled={minigameType === ''}
      label={`What's wrong? *`}
      placeholder={`What's wrong?`}
      options={problemOptions(minigameType)}
      onChange={(_, {value}) => setProblem(value)} />
    {problem === 'other' &&
      <div>
        <textarea label='Specify problem *' placeholder='Specify problem' />
      </div>}
    <input label='Minigame task*' placeholder='A description of the question / task given in the minigame' />
    <TagList label='Given options *' placeholder='Add an option by pressing enter' tagName='answerOptions' />
    <textarea label='Additional comments' placeholder='Anything else you want to add?' />
    <Paragraph>Required fields are marked with *</Paragraph>
    <Button>Submit</Button>
  </form>
}

export default function ReportPage() {
  return <>
    <Heading type='H1'>Got problems with wrong or missing content?</Heading>
    <Paragraph>Join the community and leave a suggestion. Together we can provide as much knowledge as possible!</Paragraph>

    <Heading type='H2'>Did you find an error in a question?</Heading>
    <Paragraph>If you notice this during a game, click the in-game button. It makes filling out this form much quicker!</Paragraph>
    <Report />
  </>
}