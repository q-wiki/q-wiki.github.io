import React, { useEffect, useState } from 'react'
import githubStore from '../../../../stores/GithubStore'
import PropTypes from 'prop-types'

import Container75 from '../../../atoms/Container75/Container75'
import Heading from '../../../atoms/Heading/Heading'
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

function parseReportFromIssue (issue) {
  console.log(issue)
  return {
    title: issue.title.replace(/^.*?"/, '').replace(/"$/, ''),
    reportedBy: issue.user.login,
  }
}

// eslint-disable-next-line react/prop-types
function SingleReport ({ issue }) {
  const report = parseReportFromIssue(issue)

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
          <pre>{JSON.stringify(issue, null, 2)}</pre>
        </Col>
      </Row>
    </AccordionItemPanel>
  </AccordionItem>
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
        {apiResponse.map((issue, idx) => <SingleReport issue={issue} key={idx} />)}
      </Accordion>
      : 'Loading…'}
  </Container75>
}

ReportList.propTypes = {
  openIssues: PropTypes.bool
}
