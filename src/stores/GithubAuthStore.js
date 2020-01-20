import { computed, action, observable } from 'mobx'

import config from '../config'

const authInfo = () => JSON.parse(localStorage.getItem('auth') || '{}')

class GithubAuthStore {
  // ---
  // we hide the implementation details so we can provide a clean interface
  // which persists auth info into local storage and uses it again when the
  // store is constructed
  // ---

  constructor() {
    let auth = authInfo()
    if (auth.bearerToken) this._bearerToken = auth.bearerToken
    if (auth.user) this._user = auth.user
  }

  @observable _bearerToken = null
  @observable _user = {}

  @computed get bearerToken () {
    return this._bearerToken
  }

  set bearerToken(bearerToken) {
    let auth = authInfo()
    window.localStorage.setItem('auth', JSON.stringify(Object.assign(auth, {bearerToken})))
  }

  @computed get user () {
    return this._user
  }

  set user(user) {
    let auth = authInfo()
    window.localStorage.setItem('auth', JSON.stringify(Object.assign(auth, {user})))
  }

  // ---

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

    const method = (opts.method || 'get').toLowerCase()
    const request = method == 'get' || method == 'head'
      ? { ...{headers}, ...opts }
      : { ...{headers}, ...{body}, ...opts }

    return fetch('https://api.github.com/' + endpoint, request)
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
    this.apiRequest('user').then(user => {
      this.user = user
    })
  }
}

export default new GithubAuthStore()