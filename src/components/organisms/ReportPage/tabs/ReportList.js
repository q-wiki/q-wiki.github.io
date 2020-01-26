/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import config from '../../../../config'
import githubStore from '../../../../stores/GithubStore'

import Container75 from '../../../atoms/Container75/Container75'
import Heading from '../../../atoms/Heading/Heading'
import Paragraph from '../../../atoms/Paragraph/Paragraph'
import Minigame from '../../../molecules/Minigame/Minigame'

import GithubLoginButton from '../../../molecules/GithubLoginButton/GithubLoginButton'

import { Row, Col } from 'react-flexbox-grid'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'
import '../../../atoms/Accordion/accordion.scss'
import WikidataQueryEditor from '../../../molecules/WikidataQueryEditor/WikidataQueryEditor'

const capitalizeFirstLetter = s => s.substring(0, 1).toLocaleUpperCase() + s.substring(1)

// TODO: Check styling (logged in and loggged out, also for every issue when the accordion is expanded)

function LoginWidget () {
  return <>
    <Paragraph>
      All of our issue reporting is tightly integrated into our code collaboration efforts <a href='https://github.com/q-wiki/q-wiki-server'>on GitHub</a>. Login in to give feedback on issues, post comments or re-play minigames and help us figure out what went wrong!
    </Paragraph>
    <GithubLoginButton />
  </>
}

function ExtendedDetail ({ report, minigame }) {
  // shown when logged in
  return <>
    {minigame &&
      <Minigame questionData={minigame.question} />}

    <div>
      <Paragraph>
        <strong className='report-label'>Is the reported problem valid?</strong>
        <span className='report-content'> </span>
      </Paragraph>
    </div>

    {minigame &&
      <div>
        <Paragraph>
          <strong className='report-label'>Have a look at the query.</strong> Feel free to change the query below, try it and fix it! Send it together with your comments and ideas about this report.
        </Paragraph>
        <WikidataQueryEditor>
          {minigame.question.sparqlQuery}
        </WikidataQueryEditor>
      </div>}

    <div>
      <Paragraph>
        <strong className='report-label'>Got an idea what is going wrong?</strong> Or any other comments you would like to make? You made changes to the query and now it works perfectly fine? Every tip or suggestion can help us solve the issue!
      </Paragraph>
    </div>
  </>
}

const ReportDetail = inject('githubStore')(observer(({ githubStore, report }) => {
  const [minigame, setMinigame] = useState(null)
  const minigameId = report.content['Minigame id']
  useEffect(() => {
    if (minigameId) {
      // TODO: Handle errors
      fetch(config.API_URL + '/api/Platform/Minigame/' + minigameId)
        .then(res => res.json())
        .then(body => {
          setMinigame(body)
        })
    }
  }, [minigameId])

  console.log(report)
  const minigameTypes = {
    multipleChoice: 'Multiple Choice',
    guessTheImage: 'Guess The Image',
    sorting: 'Sorting'
  }

  const formatContent = (k) => {
    switch (k.toLowerCase()) {
      case 'minigame type': return minigameTypes[report.content[k]]
      default: return capitalizeFirstLetter(report.content[k])
    }
  }

  return <>
    {/* Try to piece back together as much information as we can */}
    {Object.keys(report.content)
      // only labels for which we actually have content
      .filter(k => report.content[k])
      // display all of it
      .map((k, idx) => <div key={'report-row-' + idx}>
        <Paragraph>
          <strong className='report-label'>{k}</strong>
          <span className='report-content'> {formatContent(k)}</span>
        </Paragraph>
      </div>)}

    {githubStore.isLoggedIn
      ? <ExtendedDetail report={report} minigame={minigame} />
      : <LoginWidget />}
  </>
}))

// eslint-disable-next-line react/prop-types
function SingleReport ({ report }) {
  return <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>
        <p className="accordionButtonTitle">
          {report.title}
          <span>reported by {report.reportedBy}</span>
        </p>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <Row>
        <Col xs>
          <ReportDetail report={report} />
        </Col>
      </Row>
    </AccordionItemPanel>
  </AccordionItem>
}

function parseReportFromIssue (issue) {
  // parse the information back out from the issue body
  const content = {}
  issue.body.split('\n*').forEach(line => {
    if (line.match(/(:|\?)\*\*/)) {
      const split = line.replace(/^\*+/, '').split(/(:|\?)\*\*/)
      const key = split[0] + (split[1] === '?' ? '?' : '')
      const val = split.slice(2).join(':').replace(/^\s+/, '').replace(/\s+$/, '').replace('*Empty*', '')
      content[key] = val
    }
  })

  return {
    title: issue.title.replace(/^.*?"/, '').replace(/"$/, ''),
    reportedBy: issue.user.login,
    issueId: issue.id,
    content
  }
}

export default function ReportList ({ openIssues = true }) {
  const endpoint = 'repos/q-wiki/q-wiki-server/issues?labels=q-wiki-platform,feedback&state=' + (openIssues ? 'open' : 'closed')
  const [apiResponse, setApiResponse] = useState(null)

  useEffect(() => {
    async function fetchData () {
      // TODO: Error handling!!!!
      const body = await githubStore.apiRequest(endpoint)
      setApiResponse(body)
    }

    fetchData()
  }, [openIssues])

  return <Container75>
    <Row>
      <Col x>
        <Heading type='H1'>{openIssues ? 'Open reports' : 'Closed reports'}</Heading>
      </Col>
    </Row>
    {apiResponse
      ? <Accordion allowZeroExpanded={true}>
        {apiResponse.map((issue, idx) => <SingleReport report={parseReportFromIssue(issue)} key={idx} />)}
      </Accordion>
      : 'Loading…'}
  </Container75>
}

ReportList.propTypes = {
  openIssues: PropTypes.bool
}
