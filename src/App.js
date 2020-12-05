import { useEffect, useState } from "react";
import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import firebase from "firebase";
import { initialize, signIn } from "./firebase-codes";
import Landing from "./Components/Landing";
initialize();
function App() {
	const [auth, updateAuth] = useState(false);
	useEffect(() => {
		const uns = firebase.auth().onAuthStateChanged((user) => {
			updateAuth(!!user);
		});
		return () => {
			uns();
		};
	}, []);
	return (
		<HashRouter basename='/' className='App'>
			<Switch>
				<Route path='/' exact>
					<Landing signIn={signIn} auth={auth} />
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
