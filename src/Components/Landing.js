import "./Styles/Landing.css";
import img from "../assets/robovitics.png";
import googleImg from "../assets/google.svg";
import svg from "../assets/langingPhoto.svg";
const Landing = () => {
	return (
		<div className='landing'>
			<div className='left'>
				<div className='lab'>
					<img src={img} className='roboLogo' />
					<br />
					<br />
					<br />
					<button className='signinBtn'>
						<span>Sign in with Google</span>
						<img src={googleImg} className='googleImg' />
					</button>
					<br />
					<br />
					<br />
					<span className='vitE'>
						Please sign in with VIT e-mail ID
					</span>
				</div>
			</div>
			<div className='right'>
				<div className='rab'>
					<img src={svg} className='foto' />
				</div>
				<span className='ccs'>Core Committee Selection 2020</span>
			</div>
		</div>
	);
};

export default Landing;
