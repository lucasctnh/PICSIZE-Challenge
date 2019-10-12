import React, { Component } from 'react'

import api from '../../services/api'

export default class Detail extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
		user: {},
	  }
	}

	async componentDidMount() {
		const aux = localStorage.getItem('user')
		const response = await api.get(`/users/${aux}`)

		this.setState({user: response.data})
	}

	render() {
		return (
			<ul className="list-all">
				{this.state.user.id ?
					<li key={this.state.user.id}>
						<img src={this.state.user.avatar_url} alt="User avatar"/>
						<span>{this.state.user.name}</span>
					</li>
				: null}

				{this.state.user.id ? this.state.user.repos.map(repo => (
					<a href={repo.url}><li key={repo.id}>{repo.name}</li></a>
				))
				: null}
			</ul>
		)
	}
}