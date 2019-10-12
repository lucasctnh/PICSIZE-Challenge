const axios = require('axios')

module.exports = {
	async search(req, res) {
		await axios({
			method: 'get',
			url: `https://api.github.com/search/users?q=${req.query.user}`,
			responseType: 'json',
		}).then(response => {
			return res.json(response.data);
		})
	},

	async index(req, res) {
		await axios({
			method: 'get',
			url: `https://api.github.com/search/users?q=repos:%3E0&sort=repositories&order=desc`,
			responseType: 'json',
		}).then(response => {
			return res.json(response.data);
		})
	},

	async show(req, res) {
		await axios({
			method: 'get',
			url: `https://api.github.com/users/${req.params.username}`,
			responseType: 'json',
		}).then(async response => {
			const { id, name, avatar_url, repos_url } = response.data
			const listOfRepos = []

			await axios({
				method: 'get',
				url: `${repos_url}`,
				responseType: 'json',
			}).then(response => {
				response.data.map(repo => listOfRepos.push({ id: repo.id, name: repo.name, url: repo.html_url }))
			})

			return res.json({ id, name, avatar_url, repos: listOfRepos });
		})
	}
}