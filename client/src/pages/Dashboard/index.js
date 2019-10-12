import React, { Component } from 'react'

import UserList from '../../components/UserList'

import './styles.css'

export default class Dashboard extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
		user: '',
		nrepos: '',
		show: false
	  }
	}

	handleSubmit = async event => {
		event.preventDefault()

		if(this.state.user.length !== undefined && this.state.user.length > 0) localStorage.setItem('user', this.state.user)

		this.setState({user: localStorage.getItem('user')})
	}

	render() {
		return (
			<>
				<p>Pesquise um usuário</p>

				<form onSubmit={this.handleSubmit}>
					<input
						type="user"
						id="user"
						placeholder="Digite o nome"
						value={this.state.user}
						onChange={event => this.setState({user: event.target.value})}
					/>

					<button className="btn" onClick={() => this.setState({show: !this.state.show})} type="submit">PESQUISAR</button>
				</form>
				<UserList show={this.state.show} refresh={this.state.user} />

				<p> ou liste todos</p>
				<button onClick={() => this.props.history.push('/list')} className="btn">LISTAR</button>
			</>
		)
	}
}