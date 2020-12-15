import React from 'react';
import face from '../assets/facebook.svg';
import inst from '../assets/instagram.svg';
import link from '../assets/linkedin.svg';
import twit from '../assets/twitter.svg';
import yout from '../assets/youtube.svg';
import './Styles/social.css';
const Socialmedia = () => {
	return (
		<div className='sm'>
			<a href='https://www.instagram.com/robovitics' target='_blank'>
				<img src={inst} className='sm-img' />
			</a>
			<a href='https://www.facebook.com/robovitics/' target='_blank'>
				<img src={face} className='sm-img' />
			</a>
			<a href='https://twitter.com/robo_vit' target='_blank'>
				<img src={twit} className='sm-img' />
			</a>
			<a
				href='https://www.youtube.com/channel/UCFiwOI-W5b06NweratR-RdA'
				target='_blank'
			>
				<img src={yout} className='sm-img' />
			</a>
			<a
				href='https://in.linkedin.com/company/robovitics'
				target='_blank'
			>
				<img src={link} className='sm-img' />
			</a>
		</div>
	);
};

export default Socialmedia;
