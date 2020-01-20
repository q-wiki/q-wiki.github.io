import React, {useState} from 'react'
import './reportPage.scss';
import useForm from 'react-hook-form'
import {useParams} from 'react-router-dom'
import {Col, Row} from 'react-flexbox-grid'
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import config from '../../../config'

import Button from '../../atoms/Button/Button'
import Container75 from '../../atoms/Container75/Container75'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import TextArea from '../../atoms/TextArea/TextArea'
import TextField from '../../atoms/TextField/TextField'
import TagList from '../../molecules/TagList/TagList'

import { reportPageInfo} from '../../../../src/constants/constants'

// TODO:  validation


const tabsContent = [
  {
    title: 'Open New Report',
    content:
    <div className="report-form-container">
      <Row>
        <Col xs>
          <Heading type='H1'>{reportPageInfo[1].heading}</Heading>
          <Paragraph>{reportPageInfo[1].text}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Heading type='H2'>{reportPageInfo[1].heading2}</Heading>
          <Paragraph>{reportPageInfo[1].text2}</Paragraph>
        </Col>
      </Row>
      <Report />
    </div>,
  },
  {
    title: 'Open Reports',
    content: 'This is a list of Open Reports!'
  },
  {
    title: 'Closed Reports',
    content: 'This is a list of Closed Reports!'
  }
];

function getTabs() {
  return tabsContent.map((tabsContent, index) => ({
    title: tabsContent.title,
    getContent: () => tabsContent.content,
    /* Optional parameters */
    key: index,
    tabClassName: 'tab',
    panelClassName: 'panel',
  }));
}


function Report () {
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

export default function ReportPage() {
  return <div className="report-page-container">
  <Container75>
    <div className="report-header">
      <Heading  className="report-heading" pallete="white" type="H1">{reportPageInfo[0].heading}</Heading>
      <Heading  className="report-heading" pallete="white" type="H2">{reportPageInfo[0].text}</Heading>
      <Heading  className="report-heading" pallete="white" type="H2">{reportPageInfo[0].text2}</Heading>
  </div>
    <Tabs showMore={false} items={getTabs()} transformWidth={500}  />
    <Row>
      <Col xs>
        <Heading type='H1'>Got problems with wrong or missing content?</Heading>
        <Paragraph>Join the community and leave a suggestion. Together we can provide as much knowledge as possible!</Paragraph>
        <Paragraph><GithubLoginButton /></Paragraph>
      </Col>
    </Row>
    <Row>
      <Col xs>
        <Heading type='H2'>Did you find an error in a question?</Heading>
        <Paragraph>If you notice this during a game, click the in-game button. It makes filling out this form much quicker!</Paragraph>
      </Col>
    </Row>
  </Container75>
  </div>
}
