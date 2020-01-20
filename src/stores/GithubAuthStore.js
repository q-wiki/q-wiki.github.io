import { computed, action } from 'mobx'

import config from '../config'

class GithubAuthStore {
  bearerToken = null
  user = {}

  @computed get isLoggedIn () {
    return this.user.login != null
  }

  @action apiRequest (endpoint, data={}, opts={}) {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json'
    }
    const body = JSON.stringify(data)

    if (this.bearerToken) {
      headers['Authorization'] = `Bearer ${this.bearerToken}`
    }

    return fetch('https://api.github.com/' + endpoint, { ...{headers}, ...{body}, ...opts })
      .then(res => {
        if (!res.ok) console.error('There is a problem with Github\'s response', res)
        return res.json()
      })
  }

  /**
   * Returns a Github login link that will, in conjunction with the
   * GithubLoginSuccesfulPage, always redirect users to the page they initiated
   * the login from.
   */
  loginLink = (location, scope = 'public_repo') => {
    const authUri = `${config.API_URL}/api/Platform/GithubOAuth?sourceUrl=${location.pathname}`
    const redirectUri = window.encodeURIComponent(authUri)
    return `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT_ID}&scope=${scope}&redirect_uri=${redirectUri}`
  }

  logout = () => {
    this.bearerToken = null
    this.user = {}
  }

  //
  // ---
  // Below are API requests that change this store directly; if you just want
  // to make an authorized request, use the apiRequest method above.
  // ---
  //

  fetchUser () {
    this.apiRequest('user').then(user => { this.user = user })
  }
}

export default new GithubAuthStore()