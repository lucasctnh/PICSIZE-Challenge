import React, { Component } from 'react'

import api from '../services/api'

export default class UserList extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
		users: [],
		refresh: ''
	  }
	}

	async componentDidMount() {
		if(this.props.userQuery !== undefined && this.props.userQuery.length > 0) {
			const response = await api.get(`/user?user=${this.props.userQuery}`)

			this.setState({users: response.data.items})
		}
	}

	async componentWillReceiveProps({refresh, show}) {
		this.setState({ ...this.state, refresh})

		if(this.props.show === false && this.props.refresh !== undefined && this.props.refresh.length > 0) {
			const response = await api.get(`/user?user=${this.props.refresh}`)

			this.setState({users: response.data.items})
		}
	}

	handleGo = user => {
		localStorage.setItem('user', user)
	}

	render() {
		return (
			<ul className="list-users">
			<p>
				Resultado da pesquisa:
			</p>
            	{this.state.users ? this.state.users.map(user => (
                	<li key={user.id}>
						<a onClick={() => this.handleGo(user.login)} href="/detail">
							<img src={user.avatar_url} alt="User avatar"/>
                    		<span>{user.login}</span>
						</a>
                	</li>
            	)) : null}
        	</ul>
		)
	}
}