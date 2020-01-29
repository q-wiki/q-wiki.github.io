/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import config from '../../../../config'
import githubStore from '../../../../stores/GithubStore'

import Button from '../../../atoms/Button/Button'
import Container75 from '../../../atoms/Container75/Container75'
import Heading from '../../../atoms/Heading/Heading'
import Textarea from '../../../atoms/TextArea/TextArea'
import Paragraph from '../../../atoms/Paragraph/Paragraph'
import Minigame from '../../../molecules/Minigame/Minigame'
import WikidataQueryEditor from '../../../molecules/WikidataQueryEditor/WikidataQueryEditor'
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
import useForm from 'react-hook-form'

const capitalizeFirstLetter = s => s.substring(0, 1).toLocaleUpperCase() + s.substring(1)

// TODO: Check styling (logged in and loggged out, also for every issue when the accordion is expanded)

function LoginWidget ({ githubStore }) {
  return <>
    <Paragraph>
      All of our issue reporting is tightly integrated into our code collaboration efforts <a href='https://github.com/q-wiki/q-wiki-server'>on GitHub</a>. Login in to give feedback on issues, post comments or re-play minigames and help us figure out what went wrong!
    </Paragraph>
    <GithubLoginButton githubStore={githubStore} />
  </>
}

function ExtendedDetail ({ githubStore, report, issue, minigame }) {
  const { register, getValues } = useForm()

  // see if the currently logged in user is somewhere in an issue's reactions
  const hasVotedBefore = issue.reactions.map(r => r.user.login).indexOf(githubStore.user.login.indexOf) > -1
  const [hasVoted, setHasVoted] = useState(hasVotedBefore)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  console.log('issue', issue)

  const voteValid = isValid => {
    // TODO: Error handling
    setHasVoted(true)
    githubStore.apiRequest('repos/q-wiki/q-wiki-server/issues/' + issue.number + '/reactions', {
      content: isValid ? '+1' : '-1'
    }, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.squirrel-girl-preview+json'
      }
    })
  }

  // shown when logged in
  return <>
    {minigame &&
      <Minigame questionData={minigame.question} />}

    <div>
      <Paragraph>
        <strong className='report-label'>Is the reported problem valid?</strong>
        {!hasVoted
          ? <>
            <Button onClick={_ => voteValid(true)}>👍</Button>
            <Button onClick={_ => voteValid(false)}>👎</Button>
          </>
          : <span className='report-content'> Thank you for your vote!</span>}
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

    {hasSubmitted
      ? <Paragraph>Thank you for your comment!</Paragraph>
      : <>
        <div>
          <Paragraph>
            <strong className='report-label'>Got an idea what is going wrong?</strong> Or any other comments you would like to make? You made changes to the query and now it works perfectly fine? Every tip or suggestion can help us solve the issue!
            <Textarea name='additionalComments' ref={register} />
          </Paragraph>
        </div>

        <div>
          <Button onClick={_ => {
            const comment = getValues().additionalComments
            if (comment) {
              // TODO: Error handling!
              githubStore.apiRequest('repos/q-wiki/q-wiki-server/issues/' + issue.number + '/comments', {
                body: comment
              }, { method: 'POST' })
              setHasSubmitted(true)
            }
          }}>Submit comment</Button>
        </div>
      </>}

    <div>You can see additional discussion of this issue <a href={'https://github.com/q-wiki/q-wiki-server/issues/' + issue.number}>here</a></div>
  </>
}

const ReportDetail = inject('githubStore')(observer(({ githubStore, report, issue }) => {
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
      ? <ExtendedDetail githubStore={githubStore} report={report} issue={issue} minigame={minigame} />
      : <LoginWidget githubStore={githubStore} />}
  </>
}))

// eslint-disable-next-line react/prop-types
function SingleReport ({ report, issue }) {
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
          <ReportDetail issue={issue} report={report} />
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
    issueNumber: issue.number,
    content
  }
}

export default function ReportList ({ openIssues = true }) {
  const endpoint = 'repos/q-wiki/q-wiki-server/issues?labels=q-wiki-platform,feedback&state=' + (openIssues ? 'open' : 'closed')
  const [apiResponse, setApiResponse] = useState(null)

  useEffect(() => {
    async function fetchData () {
      // TODO: Error handling!!!!
      const issues = await githubStore.apiRequest(endpoint)

      // fetch reactions for each issue so a user can't react twice
      const reactions = await Promise.all(issues.map(issue =>
        githubStore.apiRequest(
          'repos/q-wiki/q-wiki-server/issues/' + issue.number + '/reactions',
          null, {
            headers: { Accept: 'application/vnd.github.squirrel-girl-preview+json' }
          }
        )))
      reactions.forEach((reactions, idx) => {
        issues[idx].reactions = reactions
      })

      setApiResponse(issues)
    }

    fetchData()
  }, [openIssues])

  return <div>
    <Row>
      <Col x>
        <Heading type='H1'>{openIssues ? 'Open reports' : 'Closed reports'}</Heading>
      </Col>
    </Row>
    {apiResponse
      ? <Accordion allowZeroExpanded={true}>
        {apiResponse.map((issue, idx) => <SingleReport report={parseReportFromIssue(issue)} issue={issue} key={idx} />)}
      </Accordion>
      : 'Loading…'}
</div>
}

ReportList.propTypes = {
  openIssues: PropTypes.bool
}
