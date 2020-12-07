import { useEffect, useState } from "react";
import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import { initialize } from "./firebase-codes";
import Landing from "./Components/Landing";
import Register from "./Components/Register";
import Error from "./Components/Error";
initialize();
function App() {
	return (
		<HashRouter basename='/' className='App'>
			<Switch>
				<Route path='/' exact>
					<Landing />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/error'>
					<Error
						a='Oops :('
						b='Please check if you have used your VIT email,ending with 2020@vitstudent.ac.in to sign in.'
					/>
				</Route>
				<Route>
					<Error a='Oops :(' b=' Page Not Found'></Error>
				</Route>
			</Switch>
		</HashRouter>
	);
}

export default App;
