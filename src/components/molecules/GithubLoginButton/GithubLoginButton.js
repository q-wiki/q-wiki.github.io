import React from 'react'
import {useLocation} from 'react-router-dom'
import {observer} from 'mobx-react'

import config from '../../../config'

import Icon from '../../atoms/Icon/Icon'

import './GithubLoginButton.scss'

export default observer(({ githubAuthStore }) => {
  const location = useLocation()
  return <span className='github-login-button'>
    <a href={githubAuthStore.loginLink(location)}>
      <Icon icon='github' />
      {githubAuthStore.isLoggedIn
      ? `Logout (${githubAuthStore.user.login})`
      : 'Sign in with Github'}
    </a>
  </span>
})