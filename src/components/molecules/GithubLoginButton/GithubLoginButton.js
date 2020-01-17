import React from 'react'
import {useLocation} from 'react-router-dom'
import {observer} from 'mobx-react'

import config from '../../../config'

import Icon from '../../atoms/Icon/Icon'

import './GithubLoginButton.scss'

/**
 * Returns a Github login link that will, in conjunction with the
 * GithubLoginSuccesfulPage, always redirect users to the page they initiated
 * the login from.
 */
export default observer(({ githubAuthStore }) => {
  const location = useLocation()
  const redirectUri = `${config.API_URL}/api/Platform/GithubOAuth?sourceUrl=${location.pathname}`
  return <span className='github-login-button'>
    <a href={`https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT_ID}&scope=public_repo&redirect_uri=${window.encodeURIComponent(redirectUri)}`}><Icon icon='github' /> Sign in with Github</a>
  </span>
})