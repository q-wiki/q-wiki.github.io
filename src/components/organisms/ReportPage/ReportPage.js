import React, {useState} from 'react'
import useForm from 'react-hook-form'
import {useParams} from 'react-router-dom'
import {Col, Row} from 'react-flexbox-grid'

import config from '../../../config'

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

const mockFetch = (_) => {
  // FIXME: There's a problem with missing CORS headers; for the time being we
  // just use mock data from the service until it's fixed.
  // See: https://github.com/q-wiki/q-wiki-server/issues/89
  const response = {"question":{"id":"40677b0f-9d5f-46d2-ab85-a6c40afb5f87","sparqlQuery":"SELECT ?question ?answer WHERE {\r\n                                      ?element wdt:P31 wd:Q11344;\r\n                                               wdt:P1086 ?number;\r\n                                               wdt:P246 ?question.\r\n                                      FILTER(1 <= ?number &&\r\n                                             ?number <= 118)\r\n                                      SERVICE wikibase:label {\r\n                                        bd:serviceParam wikibase:language 'en'.\r\n                                        ?element  rdfs:label ?answer.\r\n                                      }\r\n                                    }\r\n                                    ORDER BY MD5(CONCAT(STR(?answer), STR(NOW()))) # order by random\r\n                                    LIMIT 4","taskDescription":"Which element has the chemical symbol {0}?","category":{"id":"6c22af9b-2f45-413b-995d-7ee6c61674e5","title":"Chemistry"},"miniGameType":2,"status":2,"rating":0.0},"correctAnswer":["mercury"],"id":"b957e313-385a-49d1-1d85-08d796c3149c","type":2,"taskDescription":"Which element has the chemical symbol Hg?","answerOptions":["dysprosium","strontium","neon","mercury"]}

  return new Promise((resolve, reject) => {
    setTimeout(_ => resolve(response), 100) 
  })
}

function Report () {
  const params = useParams()

  const {register, handleSubmit, setValue} = useForm()

  // fetch details about minigame if a minigame the route is called with a minigame id
  const [loading, setLoading] = useState(params.minigameId != null)
  const [defaultValues, setDefaultValues] = useState({})

  if (loading) {
    // fetch(config.API_URL + '/api/Platform/Minigame/' + params.minigameId)
    //   .then(r => r.json())
    mockFetch(config.API_URL + '/api/Platform/Minigame/' + params.minigameId)
      .then(res => {
        console.log('Server responded', res)
        const minigameTypes = ['sorting', 'multipleChoice']
        setDefaultValues({
          'minigameType': minigameTypes[res.type],
          'taskDescription': res.taskDescription,
          'answerOptions': res.answerOptions
        })
        setLoading(false)
      })
  }

  return <form onSubmit={handleSubmit(form => console.log('form submitted with data', form))}>
    {loading
      ? (<Row>
          <Col xs>
            <Paragraph>One moment please, loading data…</Paragraph>
          </Col>
        </Row>)
      : (<>
          <Row>
            <Col xs>
              <Dropdown
                name='minigameType'
                placeholder='Minigame type *'
                options={[
                  {key: 'sorting', value: 'sorting', text: 'Sorting'},
                  {key: 'multipleChoice', value: 'multipleChoice', text: 'Multiple Choice'},
                ]}
                defaultValue={defaultValues.minigameType}
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
                name='taskDescription'
                placeholder='What was the question / task given in the minigame *'
                defaultValue={defaultValues.taskDescription}
                ref={register} />
            </Col>
            <Col xs>
              {/* TODO: How will this be validated? */}
              <TagList
                name='answerOptions'
                placeholder='Provided answers *'
                tagName='answerOptions'
                defaultValue={defaultValues.answerOptions}
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
        </>)}
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
