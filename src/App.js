import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
function App() {
	return (
		<HashRouter basename='/' className='App'>
			<Switch>
				<Route path='/' exact>
					<Landing />
				</Route>
				{/* <Route path='/register'>
					<Register />
				</Route>
				<Route path='/error'>
					<Error
						a='Error'
						b='Contact Saahil-9898056388 (Check if you have used VIT email ID ending in @vitstudent.ac.in to sign in)'
					/>
				</Route>
				<Route>
					<Error a='404' b=' Page Not Found'></Error>
				</Route> */}
			</Switch>
		</HashRouter>
	);
}

export default App;
