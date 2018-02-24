class GitHub {
  constructor() {
    this.clientId = '814b9fe35e5884281ff7'
    this.clientSecret = 'a3863217fcb529c88c18692e0a9f30182e3f3f2e'
    this.reposCount = 5
    this.reposSort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)

    const profile = await(profileResponse.json())
    const repos = await(reposResponse.json())

    return {
      profile: profile,
      repos: repos
    }
  }
}