import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import sanityClient from "@sanity/client";

const client = sanityClient({
	projectId: "0te03ffb",
	dataset: "production",
	apiVersion: "2021-09-28",
	useCdn: true,
});

const donateComplete = ({ contactInfo }) => {
	return (
		<body className="vh-100 d-flex flex-column">
			<NavBar info={contactInfo} />
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
			<Footer info={contactInfo} />
		</body>
	);
};

export default donateComplete;

export async function getStaticProps() {
	const infoQuery = `*[_type == "contact"]{
		email,
		phone,
		address,
	  }`;
	let contactData;

	await client.fetch(infoQuery).then((res) => {
		contactData = res;
	});

	return {
		props: {
			contactInfo: contactData[0],
		},
	};
}
