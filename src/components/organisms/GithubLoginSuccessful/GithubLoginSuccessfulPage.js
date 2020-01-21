import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import github from '../../../stores/GithubStore'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default () => {
  const history = useHistory()
  const queryParams = useQuery()

  React.useEffect(() => {
    // the sourceUrl gets passed on from the C# server so we know where we
    // initialized the auth flow; the bearer token comes from Github
    github.bearerToken = queryParams.get('bearer')
    github.fetchUser()
    history.replace(queryParams.get('sourceUrl'))
  })
  
  return <></>
}
