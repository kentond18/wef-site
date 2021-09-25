import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const donateComplete = (props) => {
	return (
		<body className="vh-100 d-flex flex-column">
			<NavBar />
			<div className="container w-50 py-3 h-50 d-flex flex-column justify-content-center">
				<h1 className="text-center">Thank you for your donation!</h1>
				<p className="text-center pt-3">
					We are extremely thankful for your support. Sign up below to
					receive updates regarding our progress. Thank you again!
				</p>
				<form action="/email-signup" className="align-self-center py-3">
					<div className="input-group">
						<input
							className="form-control"
							type="email"
							name="emailAddress"
							id="emailInput"
							placeholder="Email address"
							required
						/>
						<button type="submit" className="btn btn-primary">
							Sign up!
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</body>
	);
};

export default donateComplete;
