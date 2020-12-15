import $ from 'jquery';
import jwt from 'jsonwebtoken';

export const chkUser = async (email, updateSuc) => {
	// check if user exists and then return true/false
	const det = {
		email,
	};
	let asd = false;
	try {
		// const token = await jwt.sign(det, 'password-very-secure');
		// console.log(token);
		$.ajax({
			type: 'POST',
			url: 'https://beepboop.robovitics.in/exists',
			data: det,
			success: async (data) => {
				// console.log(JSON.parse(data));
				if (data) {
					// console.log(data.response);
					if (data.includes('true')) {
						return updateSuc(true);
					} else if (data.includes('false')) return updateSuc(false);
				}
			},
		});
	} catch (err) {
		console.log(err);
	}
};
