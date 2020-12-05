export const Redir = (email) => {
	// const history = useHistory();
	console.log("oioi");
	//console.log(firebase.auth().currentUser.email);
	if (
		(email.includes("2019") && email.includes("vitstudent.ac.in")) ||
		(email.includes("2018") && email.includes("vitstudent.ac.in")) ||
		(email.includes("2017") && email.includes("vitstudent.ac.in"))
	) {
		return true;
	} else {
		return false;
	}
};
