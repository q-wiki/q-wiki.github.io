import React, { useEffect, useState } from 'react'
import githubStore from '../../../../stores/GithubStore'
import PropTypes from 'prop-types'

import Container75 from '../../../atoms/Container75/Container75'
import Heading from '../../../atoms/Heading/Heading'
import Paragraph from '../../../atoms/Paragraph/Paragraph'
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

// eslint-disable-next-line react/prop-types
function ReportDetail ({ report }) {
  const [minigame, setMinigame] = useState(null)
  console.log(report)
  
  // useEffect(() => {

  // }, [report.issueId])

  return <>
    <Paragraph>Have a look at the query and fix it yourself</Paragraph>
    <pre>// TODO: Render query</pre>
  </>
}

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
      const key = split[0].toLocaleLowerCase()
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
      ? <Accordion allowZeroExpanded>
        {apiResponse.map((issue, idx) => <SingleReport report={parseReportFromIssue(issue)} key={idx} />)}
      </Accordion>
      : 'Loading…'}
  </Container75>
}

ReportList.propTypes = {
  openIssues: PropTypes.bool
}
