import React from 'react'
import {useLocation} from 'react-router-dom'
import {observer} from 'mobx-react'

import config from '../../../config'

import Icon from '../../atoms/Icon/Icon'

import './GithubLoginButton.scss'

export default observer(({ githubAuthStore }) => {
  const location = useLocation()
  const logout = e => {
    e.preventDefault()
    githubAuthStore.logout()
  }

  return <span className='github-login-button'>
    {githubAuthStore.isLoggedIn
      ? (
        <a href='#' onClick={logout}>
          <Icon icon='github' /> Logout ({githubAuthStore.user.login})
        </a>
      )
      : (
        <a href={githubAuthStore.loginLink(location)}>
          <Icon icon='github' /> Sign in with GitHub
        </a>
      )}
  </span>
})