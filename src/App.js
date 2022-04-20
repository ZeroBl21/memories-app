import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Auth from './components/Auth';
import PostDetails from './components/PostDetails';

const App = () => {
	const user = JSON.parse(localStorage.getItem('profile'));

	return (
		<BrowserRouter>
			<Container maxWidth="xl">
				<HashRouter>
					<Navbar />
					<Switch>
						<Route path="/" exact component={() => <Redirect to="/posts" />} />
						<Route path="/posts" exact component={Home} />
						<Route path="/posts/search" exact component={Home} />
						<Route path="/posts/:id" exact component={PostDetails} />
						<Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
					</Switch>
				</HashRouter>
			</Container>
		</BrowserRouter>
	)
}

export default App;
