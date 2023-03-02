import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Navbar from './components/Navbar';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="/blogs/:id">
						<BlogDetails />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
