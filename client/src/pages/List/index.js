import React, { useEffect, useState } from 'react'

import api from '../../services/api'

export default function List() {
	const [users, setUsers] = useState([])

	useEffect(() => {
        async function loadUsers() {
			const response = await api.get('/users')

			setUsers(response.data)
        }

        loadUsers()
	}, [])

	function handleGo(user) {
		localStorage.setItem('user', user)
	}

	return (
		<>
			<p>Lista de todos os usuários do Github ordenados pelo número de repositórios:</p>
			<ul className="list-all">
                {users.items ? users.items.map(user => (
                    <li key={user.id}>
						<a onClick={() => handleGo(user.login)} href="/detail">
							<img src={user.avatar_url} alt="User avatar"/>
                        	<span>{user.login}</span>
						</a>
                    </li>
                )) : null}
            </ul>
		</>
	)
}