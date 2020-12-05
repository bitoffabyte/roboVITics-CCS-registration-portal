import { useEffect, useState, useRef } from "react";
import "./Styles/Landing.css";
import { Redir } from "../handleRedir";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import img from "../assets/robovitics.png";
import googleImg from "../assets/google.svg";
import svg from "../assets/landingPhoto.svg";
import svg2 from "../assets/landingPhoto2.svg";
const Landing = ({ signIn, auth }) => {
	const history = useHistory();
	// useEffect()
	// const size = useWindowSize();
	console.log(signIn);
	const [width, setWidth] = useState(window.innerWidth);
	const logo = useRef(svg);
	const handleResize = () => setWidth(window.innerWidth);
	if (width < 801) {
		logo.current = svg2;
	} else logo.current = svg;

	useEffect(() => {
		firebase.auth().signOut();

		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		if (auth) {
			if (Redir(firebase.auth().currentUser.email)) {
				history.push("/register");
			} else {
				firebase.auth().signOut();
				history.push("/error");
			}
		}
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	return (
		<div className='landing'>
			<div className='left'>
				<div className='lab'>
					<img src={img} className='roboLogo' />
					<br />
					<br />
					<br />
					<button className='signinBtn' onClick={signIn}>
						<span>Sign in with Google</span>
						<img src={googleImg} className='googleImg' />
					</button>
					<br />
					<span className='vitE'>
						Please sign in with VIT e-mail ID
					</span>
				</div>
			</div>
			<div className='right'>
				<div className='rab'>
					<img src={logo.current} className='foto' />
				</div>
				{/* <img src={logo.current} className='foto' /> */}

				<span className='ccs'>Core Committee Selection 2020</span>
			</div>
		</div>
	);
};

export default Landing;
