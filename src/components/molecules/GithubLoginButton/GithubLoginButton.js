import React from 'react'
import {useLocation} from 'react-router-dom'
import {observer} from 'mobx-react'

import config from '../../../config'

import Icon from '../../atoms/Icon/Icon'

import './GithubLoginButton.scss'

export default observer(({ githubStore }) => {
  const location = useLocation()
  const logout = e => {
    e.preventDefault()
    githubStore.logout()
  }

  return <span className='github-login-button'>
    {githubStore.isLoggedIn
      ? (
        <a href='#' onClick={logout}>
          <Icon icon='github' /> Logout ({githubStore.user.login})
        </a>
      )
      : (
        <a href={githubStore.loginLink(location)}>
          <Icon icon='github' /> Sign in with GitHub
        </a>
      )}
  </span>
})
