/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import './addingQuestionsPage.scss';

import Tabs from 'react-responsive-tabs';

import sample from 'lodash/sample'

import config from '../../../config'
import { minigameTypes } from '../../../constants/constants'

import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Container75 from '../../atoms/Container75/Container75'
import Minigame from '../../molecules/Minigame/Minigame'
import SparqlEditor from '../../atoms/SparqlEditor/SparqlEditor';

const pickQuestion = (questions, minigame) =>
  sample(questions.filter(q => q.miniGameType === minigame.id))

const SparqlResultTable = ({ sparqlResults }) =>
  <table className='adding-questions-page--sparql-results'>
    <thead>
      <tr>
        {sparqlResults.head.vars.map((sparqlVar, idx) => <th key={'result-head-' + idx}>{'?' + sparqlVar}</th>)}
      </tr>
    </thead>
    <tbody>
      {sparqlResults.results.bindings.map((binding, idx) =>
        <tr key={'result-row-' + idx}>
          {sparqlResults.head.vars.map((sparqlVar, jdx) =>
            <td key={'result-cell-' + idx + '-' + jdx}>{binding[sparqlVar].value}</td>)}
        </tr>
      )}
    </tbody>
  </table>

// contains
// - A Sparql editor
// - The response returned by Wikidata
// - The generated minigame
const StepByStepPanel = ({ questions, minigame }) => {
  const [sparqlResult, setSparqlResult] = useState(null)
  const [questionData, setQuestionData] = useState(null)

  useEffect(() => {
    async function init () {
      async function fetchWikidataResponse () {
        const uri = `${window.location.protocol}//query.wikidata.org/sparql?query=${window.encodeURIComponent(questionData.sparqlQuery)}`
        const headers = {
          Accept: 'application/sparql-results+json;charset=utf-8'
        }
        const res = await fetch(uri, { headers })
        setSparqlResult(await res.json())
      }

      const questionData = pickQuestion(questions, minigame)
      setQuestionData(questionData)
      fetchWikidataResponse()
    }

    if (questions != null) init()
  }, [questions])

  return (questionData == null)
    ? <Paragraph>Waiting for the server to load questions…</Paragraph>
    : <>
      <Paragraph>With a question labeled <em>{questionData.taskDescription}</em>, given the following in-game query:</Paragraph>
      <SparqlEditor>
        {questionData.sparqlQuery}
      </SparqlEditor>
      <Paragraph>…the Wikidata SPARQL endpoint returns a result like this:</Paragraph>
      {sparqlResult == null
        ? <Paragraph>Waiting for the Wikidata server to respond…</Paragraph>
        : <SparqlResultTable sparqlResults={sparqlResult} />}
      <Paragraph>…which in turn generates the following minigame:</Paragraph>
      <Minigame questionData={questionData} />
    </>
}

function tutorialTabs (questions) {
  return minigameTypes.map(minigame => ({
    title: minigame.title,
    getContent: () => <StepByStepPanel questions={questions} minigame={minigame} />,
    key: minigame.id,
    tabClassName: 'tab',
    panelClassName: 'panel'
  }))
}

const AddingQuestionsPage = () => {
  // fetch all questions from the server to generate minigames
  const [questions, setQuestions] = useState(null)
  useEffect(() => {
    async function fetchQuestions () {
      const res = await fetch(config.API_URL + '/api/Platform/Question')
      // take only questions which are merged into the game
      setQuestions((await res.json()).filter(q => q.status === 2))
    }
    if (questions == null) fetchQuestions()
  })

  return <>
  <div className="tutorial-container">
  <div className="tutorial-header">
      <div className="tutorial-header-container ">
    <Heading  pallete="qwikiOrange" type="H1">Writing question templates</Heading>
    <Paragraph pallete="white" textAlign="justify">Learn how questions are generated and how to create your own question templates!</Paragraph>
    </div>
</div>

    <Container75>
      <div className="tutorial-content-container">
      <Paragraph textAlign='justify'>
        This tutorial is meant to show you how you can extend Q-Wiki by writing additional questions. The content for each minigame you play is pulled live from <a href="https://www.wikidata.org/">Wikidata</a> – anybody can change the underlying database and fix errors or provide additional information. Did some animal species recover and is no longer listed as endangered? Change it on Wikidata and the content is published to Q-Wiki and for everyone else to use freely!
      </Paragraph>
      <Paragraph textAlign='justify'>
        The information is queried using the SPARQL query language. Check out the SPARQL links on <a href="/#/contribute">our <i>Contribute</i> page</a> if you are new to SPARQL. The exact SPARQL queries are all different depending on the information queried and the type of the minigame, but the response looks like this in principle:
      </Paragraph>

      <table border="2">
        <thead>
          <tr>
            <th scope="col">?question</th>
            <th scope="col">?answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i>Label for question</i></td>
            <td><i>Correct Answer</i></td>
          </tr>

          <tr>
            <td>&#xa0;</td>
            <td><i>Alternative Option 1</i></td>
          </tr>

          <tr>
            <td>&#xa0;</td>
            <td><i>Alternative Option 2</i></td>
          </tr>

          <tr>
            <td>&#xa0;</td>
            <td><i>Alternative Option 3</i></td>
          </tr>
        </tbody>
      </table>

      <Paragraph textAlign='justify'>
        This response is interpreted by the server and the minigame is constructed. For our <i>multiple choice</i> minigame the structure is given above. For the sorting minigame the server expects to receive the answers in sorted order and will check if the answer given by a user matches is identical to that. Of course we don't tell you the order of this result when you play the game on your phone - that would make it way too easy to cheat. :) When you play <i>Guess the Image</i> the label will be replaced with the URL to an image
      </Paragraph>

      <Paragraph textAlign='justify'>
        You can try different queries below:
      </Paragraph>

      <Tabs
        showMore={false}
        items={tutorialTabs(questions)} />

      <Paragraph textAlign='justify'>
        Notice how the queries can get quite complex but don't worry. The process roughly looks like this:
      </Paragraph>

      <ol>
        <li>Depending on the question, set the label and fetch possible correct answers.</li>
        <li>Fetch other answers which you think are plausible but not correct</li>
        <li>Take one correct answer at random and some incorrect ones. Put them together in a result and return it so the game server understands it</li>
      </ol>

      <Paragraph textAlign='justify'>
        There are some ingredients that make a good question which are explained below.
      </Paragraph>

      <Heading type='H2'>Randomization</Heading>

      <Paragraph textAlign='justify'>
        An important aspect of keeping the minigames enjoyable is making sure that the generated answers do not get repetitive. To do so, out of all possible correct or incorrect answers, you pick one at random. It turns out that this is not quite what the Wikidata query server usually does - it assumes there is some consistency to the query results and tries to reuse results it has given before. We trick it into thinking we are asking a new question. Shuffling and picking answers is done with another trick that you will see often:
      </Paragraph>

      <pre>
        <span style={{ color: '#56b4e9', fontWeight: 'bold' }}>ORDER</span> <span style={{ color: '#56b4e9', fontWeight: 'bold' }}>BY</span> MD5<span style={{ color: '#707183' }}>(</span>CONCAT<span style={{ color: '#7388d6' }}>(</span>STR<span style={{ color: '#909183' }}>(</span><span style={{ color: '#e69f00', fontWeight: 'bold' }}>?fieldInRow</span><span style={{ color: '#909183' }}>)</span>,  STR<span style={{ color: '#909183' }}>(</span>NOW<span style={{ color: '#709870' }}>()</span><span style={{ color: '#909183' }}>)</span><span style={{ color: '#7388d6' }}>)</span><span style={{ color: '#707183' }}>)</span><br />
        <span style={{ color: '#56b4e9', fontWeight: 'bold' }}>LIMIT</span> <span style={{ color: '#d55e00', fontWeight: 'bold' }}>4</span>
      </pre>

      <Paragraph textAlign='justify'>
        <code>MD5</code> is a cryptographic hash that computes a number that is very different as soon as you change its input just a little bit. The result of this will be different every time it is run because it is dependent on the execution time of the query (see the <code>STR(NOW())</code>). Because queries run very fast we have to make sure the hash returned for each row is different as well, which is why you concatenate the argument I just explained with the content of a field in the row which is unique to it (<code>CONCAT(STR(?fieldInRow), STR(NOW()))</code>).
      </Paragraph>

      <Heading type='H2'>Alternative Answers</Heading>
      <Paragraph textAlign='justify'>
        Unfortunately there is no recipe to providing good alternative answers. It requires some knowledge in the domain of the question and some flair as to what is wrong but could plausibly be correct. If you are asking a question which is answered with a specific country, maybe letting a user pick from its neighboring countries challenge a user into giving the wrong answers. Be careful: If all countries directly border the correct answer it might give away that you can choose the correct answer by picking the center. In general you will try to stay as close as possible to the correct answer while straying away just enough to not give a hint.
      </Paragraph>

      <Heading type='H2'>Excluding Correct Answers from the Alternative Answers</Heading>
      <Paragraph textAlign='justify'>
        Sometimes, if the alternative answers you pick are too god, you end up with more than one answer that is correct. We do not have any minigame that asks for more that one correct answer so you will have to try and avoid that. A good approach for this has been described above: Query for all the correct answers and exclude them from the deceitful ones by using SPARQL's set operations such as <code>MINUS</code> or <code>FILTER</code>.
      </Paragraph>
      </div>
    </Container75>
    </div>
  </>
}

AddingQuestionsPage.displayName = 'AddingQuestionsPage'

export default AddingQuestionsPage
