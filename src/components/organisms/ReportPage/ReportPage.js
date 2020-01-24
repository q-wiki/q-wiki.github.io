import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import './reportPage.scss'
import { Col, Row } from 'react-flexbox-grid'
import Tabs from 'react-responsive-tabs'
import 'react-responsive-tabs/styles.css'

import Container75 from '../../atoms/Container75/Container75'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

import ReportForm from './tabs/ReportForm'
import ReportList from './tabs/ReportList'

import { reportPageInfo } from '../../../../src/constants/constants'

// TODO:  validation

const colSize = { xs: 12, md: 10, mdOffset: 1 }

const tabsContent = [
  {
    title: 'Open New Report',
    content:
    <div className="report-form-container">
      <Row>
        <Col {...colSize}>
          <Heading type='H1'>{reportPageInfo[1].heading}</Heading>
          <Paragraph>{reportPageInfo[1].text}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col {...colSize}>
          <Heading type='H2'>{reportPageInfo[1].heading2}</Heading>
          <Paragraph>{reportPageInfo[1].text2}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col {...colSize}>
          <ReportForm />
        </Col>
      </Row>
    </div>
  },
  {
    title: 'Open Reports',
    content: <ReportList openIssues={true} />
  },
  {
    title: 'Closed Reports',
    content: <ReportList openIssues={false} />
  }
]

function getTabs (selectedTabsKey) {
  return tabsContent.map((tabsContent, index) => ({
    title: tabsContent.title,
    getContent: () => tabsContent.content,
    /* Optional parameters */
    key: index,
    tabClassName: 'tab',
    panelClassName: 'panel'
  }))
}

export default function ReportPage ({ page, showOpenIssues }) {
  const { minigameId } = useParams()
  const [rememberedMinigameId, setRememberedMinigameId] = useState(null)
  if (minigameId) {
    setRememberedMinigameId(minigameId)
  }

  const selectedTabKey = page === 'form'
    ? 0
    : (showOpenIssues ? 1 : 2)

  return <div className="report-page-container">
    <Container75>
      <div className="report-header">
        <Heading className="report-heading" pallete="white" type="H1">{reportPageInfo[0].heading}</Heading>
        <Heading className="report-heading" pallete="white" type="H2">{reportPageInfo[0].text}</Heading>
        <Heading className="report-heading" pallete="white" type="H2">{reportPageInfo[0].text2}</Heading>
      </div>
      <Tabs
        showMore={false}
        items={getTabs()}
        transformWidth={500}
        onChange={currentlySelectedTab => {
          // NOTE: We need to update the location has manually because `react-responsive-tabs` does not have any concept of URLs by itself
          const URLs = [
            '/report/' + (rememberedMinigameId ? rememberedMinigameId : ''),
            '/report/list/open',
            '/report/list/closed'
          ]

          window.location.hash = URLs[currentlySelectedTab]
        }}
        selectedTabKey={selectedTabKey} />
    </Container75>
  </div>
}
