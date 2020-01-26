import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Col, Row } from 'react-flexbox-grid'

import config from '../../../../config'

import Button from '../../../atoms/Button/Button'
import ValidatedDropdown from '../../../atoms/Dropdown/ValidatedDropdown'
import Heading from '../../../atoms/Heading/Heading'
import Paragraph from '../../../atoms/Paragraph/Paragraph'
import TextArea from '../../../atoms/TextArea/TextArea'
import TextField from '../../../atoms/TextField/TextField'
import TagList from '../../../molecules/TagList/TagList'

import { inject, observer } from 'mobx-react'
import GithubLoginButton from '../../../molecules/GithubLoginButton/GithubLoginButton'

function issueBody (form) {
  return `
## Feedback

*This issue has been automatically created via the [report form](https://q-wiki.github.io/#/report).*

**Minigame id:** ${form.minigameId || '*Empty*'}
**Minigame type:** ${form.minigameType}  
**What's wrong?** ${form.reportType}  

**Question / task given:** ${form.taskDescription}  
**Answers:** ${(form.answerOptions && form.answerOptions.join(', ')) || '*Empty*'}  
**Suggested correct answer:** ${form.correctAnswer || '*Empty*'}  

**Additional information:** ${form.additionalInfo || '*Empty*'}`
}

function ReportForm ({ githubStore }) {
  const params = useParams()
  const { register, handleSubmit, errors, getValues } = useForm()

  // fetch details about minigame if a minigame the route is called with a minigame id
  const [loading, setLoading] = useState(params.minigameId != null)
  const [defaultValues, setDefaultValues] = useState({})
  const [reportType, setReportType] = useState('')
  const [apiError, setApiError] = useState(null)
  const [issueUrl, setIssueUrl] = useState(null)

  if (loading) {
    fetch(config.API_URL + '/api/Platform/Minigame/' + params.minigameId)
      .then(res =>
        // keep original response to handle http errors
        res.json().then(body => [res, body])
      )
      .then(([res, body]) => {
        if (res.ok) {
          const minigameTypes = ['', 'sorting', 'multipleChoice', 'guessTheImage']
          setDefaultValues({
            minigameType: minigameTypes[body.type],
            taskDescription: body.taskDescription,
            answerOptions: body.answerOptions.map(option => ({ label: option, value: option })),
            correctAnswer: body.correctAnswer.join(', ')
          })
        } else {
          setApiError(body)
        }
        setLoading(false)
      })
  }

  // const Errors = ({ field }) => errors[field] && <Paragraph>{errors[field]}</Paragraph>

  return <form onSubmit={handleSubmit(async form => {
    const maxLength = 100
    let description = form.taskDescription
    if (description.length > maxLength) {
      description = description.substr(0, maxLength).replace(/\s(.*?)$/, '') + '…'
    }

    // eslint-disable-next-line react/prop-types
    const body = await githubStore.apiRequest('repos/q-wiki/q-wiki-server/issues', {
      labels: ['q-wiki-platform', 'feedback'],
      title: `Feedback for question "${description}"`,
      body: issueBody(form)
    }, { method: 'POST' })

    setIssueUrl(body.html_url)
  })}>
    {loading
      ? (<Row>
        <Col xs>
          <Paragraph>One moment please, loading data…</Paragraph>
        </Col>
      </Row>)
      : (apiError != null
        ? <>
          <Row>
            <Col xs>
              <Heading type='H2'>An error occured interacting with the API :(</Heading>
              <pre>{JSON.stringify(apiError, 2)}</pre>
            </Col>
          </Row>
        </>
        : (issueUrl != null
          ? <>
            <Col xs>
              <Heading type='H2'>Thank you for your report!</Heading>
              <Paragraph>The issue can be found <a href={issueUrl}>on Github</a> where you can track any progress.</Paragraph>
            </Col>
          </>
          : (<>
            <Row>
              <Col xs>
                <ValidatedDropdown
                  name='minigameType'
                  placeholder='Minigame type *'
                  options={[
                    { value: 'sorting', text: 'Sorting' },
                    { value: 'multipleChoice', text: 'Multiple Choice' },
                    { value: 'guessTheImage', text: 'Guess The Image' }
                  ]}
                  defaultValue={defaultValues.minigameType}
                  ref={register({ required: 'Please tell us which game you were playing' })} />
                {errors.minigameType && <Paragraph>{errors.minigameType.message}</Paragraph>}
              </Col>
              <Col xs>
                <ValidatedDropdown
                  name='reportType'
                  placeholder="What's wrong? *"
                  options={[
                    { value: 'wrongAnswer', text: 'The suggested answer is incorrect' },
                    { value: 'duplicates', text: 'An option was offered multiple times' },
                    { value: 'other', text: 'Other (please specify)' }
                  ]}
                  onChange={e => setReportType(e.target.value)}
                  ref={register({ required: 'Please describe your problem' })} />
                {errors.reportType && <Paragraph>{errors.reportType.message}</Paragraph>}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <TextField
                  name='taskDescription'
                  placeholder='What was the question / task given in the minigame *'
                  defaultValue={defaultValues.taskDescription}
                  ref={register({ required: 'We need this information to find out where to look' })} />
                {errors.taskDescription && <Paragraph>{errors.taskDescription.message}</Paragraph>}
              </Col>
            </Row>
            <Row>
              <Col xs>
                <TagList
                  name='answerOptions'
                  placeholder='Provided answers'
                  tagName='answerOptions'
                  tags={defaultValues.answerOptions}
                  ref={register} />
                {errors.answerOptions && <Paragraph>{errors.answerOptions.message}</Paragraph>}
              </Col>
            </Row>
            {reportType === 'wrongAnswer' &&
              <Row>
                <Col xs>
                  <div>
                    <TextField
                      name='correctAnswer'
                      placeholder='Winning answer *'
                      defaultValue={defaultValues.correctAnswer}
                      ref={register({ required: 'We need this information to understand your problem' })} />
                    {errors.correctAnswer && <Paragraph>{errors.correctAnswer.message}</Paragraph>}
                  </div>
                </Col>
              </Row>}
            {params.minigameId ? <input type='hidden' name='minigameId' defaultValue={params.minigameId} ref={register} /> : null}
            <Row>
              <Col xs>
                <TextArea
                  name='additionalInfo'
                  placeholder={getValues().reportType === 'other'
                    ? 'Please specify your problem *'
                    : 'Any additional information you want to provide?'}
                  ref={register(getValues().reportType === 'other' ? {
                    required: 'We need more information to understand your problem'
                  } : { required: false })} />
                {errors.additionalInfo && <Paragraph>{errors.additionalInfo.message}</Paragraph>}
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
          </>)))}
  </form>
}

export default inject('githubStore')(observer(function SignInOverlay ({ githubStore }) {
  // FIXME: This is not a nice solution. There should be /some/ way to submit reports without logging in
  return githubStore.isLoggedIn
    ? <ReportForm githubStore={ githubStore } />
    : <>
      <Paragraph>
        This report will be created as a public issue in <a href="https://github.com/q-wiki/q-wiki-server/issues?q=is%3Aissue+is%3Aopen+label%3Aq-wiki-platform+label:feedback">our Github repository</a>. In order to avoid vandalism, please log in to continue:
      </Paragraph>
      <Paragraph>
        <GithubLoginButton githubStore={githubStore} />
      </Paragraph>
    </>
}))
