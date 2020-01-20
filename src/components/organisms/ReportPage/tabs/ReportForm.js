import React, {useState} from 'react'
import useForm from 'react-hook-form'
import {useParams} from 'react-router-dom'

import {Col, Row} from 'react-flexbox-grid'

import config from '../../../../config'

import Button from '../../../atoms/Button/Button'
import Dropdown from '../../../atoms/Dropdown/Dropdown'
import Paragraph from '../../../atoms/Paragraph/Paragraph'
import TextArea from '../../../atoms/TextArea/TextArea'
import TextField from '../../../atoms/TextField/TextField'
import TagList from '../../../molecules/TagList/TagList'

export default function Report () {
  const params = useParams()
  const {register, handleSubmit, errors} = useForm()

  // fetch details about minigame if a minigame the route is called with a minigame id
  const [loading, setLoading] = useState(params.minigameId != null)
  const [defaultValues, setDefaultValues] = useState({})
  const [reportType, setReportType] = useState('')
  const [apiError, setApiError] = useState(null)

  if (loading) {
    fetch(config.API_URL + '/api/Platform/Minigame/' + params.minigameId)
      .then(res =>
        // keep original response to handle http errors
        res.json().then(body => [res, body])
      )
      .then(([res, body]) => {
        console.log('Server responded', res)
        if (res.ok) {
          const minigameTypes = ['', 'sorting', 'multipleChoice']
          setDefaultValues({
            minigameType: minigameTypes[body.type],
            taskDescription: body.taskDescription,
            answerOptions: body.answerOptions.map(option => ({label: option})),
            correctAnswer: body.correctAnswer.join(', ')
          })
        } else {
          setApiError(body)
        }
        setLoading(false)
      })
  }

  const Errors = ({ field }) => {errors[field] && <Paragraph>{errors[field]}</Paragraph>}

  return <form onSubmit={handleSubmit(form => console.log('form submitted with data', form))}>
    {loading
      ? (<Row>
          <Col xs>
            <Paragraph>One moment please, loading data…</Paragraph>
          </Col>
        </Row>)
      :
      (apiError != null
       ? <>
         <Row>
           <Col xs>
             <Heading type='H2'>An error occured interacting with the API :(</Heading>
             <pre>{JSON.stringify(apiError, 2)}</pre>
           </Col>
         </Row>
       </>
       : (<>
          <Row>
            <Col xs>
              <Dropdown
                name='minigameType'
                placeholder='Minigame type *'
                options={[
                  {value: 'sorting', text: 'Sorting'},
                  {value: 'multipleChoice', text: 'Multiple Choice'},
                ]}
                defaultValue={defaultValues.minigameType}
                ref={register({ required: true })} />
              {errors.minigameType && <Paragraph>{errors.minigameType.message}</Paragraph>}
            </Col>
            <Col xs>
              <Dropdown
                name='reportType'
                placeholder={`What's wrong? *`}
                options={[
                  {value: 'wrongAnswer', text: 'The suggested answer is incorrect'},
                  {value: 'duplicates', text: 'An option was offered multiple times'},
                  {value: 'other', text: 'Other (please specify)'}
                ]}
                onChange={e => setReportType(e.target.value)}
                ref={register({ required: true })} />
              {errors.reportType && <Paragraph>{errors.reportType.message}</Paragraph>}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <TextField
                name='taskDescription'
                placeholder='What was the question / task given in the minigame *'
                defaultValue={defaultValues.taskDescription}
                ref={register({ required: true })} />
              {errors.taskDescription && <Paragraph>{errors.taskDescription.message}</Paragraph>}
            </Col>
            <Col xs>
              <TagList
                name='answerOptions'
                placeholder='Provided answers'
                tagName='answerOptions'
                tags={defaultValues.answerOptions}
                register={register} />
              {errors.answerOptions && <Paragraph>{errors.answerOptions.message}</Paragraph>}
            </Col>
          </Row>
          {reportType === 'other' &&
            <Row>
              <Col xs>
                <div>
                  <TextArea
                    name='problemDescription'
                    placeholder='Specify problem *'
                    ref={register} />
                  {errors.problemDescription && <Paragraph>{errors.problemDescription.message}</Paragraph>}
                </div>
              </Col>
            </Row>}
          {reportType === 'wrongAnswer' &&
            <Row>
              <Col xs>
                <div>
                  <TextField
                    name='correctAnswer'
                    placeholder='Winning answer *'
                    defaultValue={defaultValues.correctAnswer}
                    ref={register} />
                  {errors.correctAnswer && <Paragraph>{errors.correctAnswer.message}</Paragraph>}
                </div>
              </Col>
            </Row>}
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
            <div className="submit-button-container">
            <Col xs>
              <Button>Submit</Button>
            </Col>
            </div>
          </Row>
        </>))}
    </form>
}