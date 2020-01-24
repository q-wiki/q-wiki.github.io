import React, { useEffect, useState } from 'react'
import githubStore from '../../../../stores/GithubStore'
import PropTypes from 'prop-types';

const reportTypeLabels = {
  duplicate: 'Duplicate answer',
  wrongAnswer: 'Wrong answer marked as correct',
  otherProblem: 'Other'
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

  return <>
    <h1>Open? {openIssues}</h1>
    <pre>
      {JSON.stringify(apiResponse, 2)}
    </pre>
  </>
}

ReportList.propTypes = {
  openIssues: PropTypes.bool
}