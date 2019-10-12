import React from 'react'
import './App.css'

import Routes from './routes'

function App() {
	function handleClean() {
		localStorage.clear('user')

		window.location.replace('/')
	}

    return (
		<div className="container">
			<button className="btnClean" onClick={handleClean}>Limpar cache</button>
			<div className="content">
				<Routes />
			</div>
		</div>
    )
}

export default App