import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/index'
import List from './pages/List/index'
import Detail from './pages/Detail/index'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Dashboard}/>
				<Route path="/list" component={List}/>
				<Route path="/detail" component={Detail}/>
			</Switch>
		</BrowserRouter>
	)
}