export default class GithubAuthStore {
  bearerToken = null

  apiRequest (url, data={}, opts={}) {
    let headers = {'Content-Type': 'application/json'}
    const body = JSON.stringify(data)

    if (this.bearerToken) {
      headers['Authorization'] = `Bearer ${this.bearerToken}`
    }

    return fetch(url, { ...{headers}, ...{body}, ...opts })
      .then(res => {
        if (!res.ok) console.error('There is a problem with Github\'s response', res)
        return res.json()
      })
  }
}