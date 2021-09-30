import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import client from "../components/sanityClientConstructor";

const contactUs = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Partners - World Eye Foundation</title>
				<meta
					name="description"
					content="Partners - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>
			<NavBar active="contact" info={contactInfo} />
			<h1 className="text-center pt-3">Contact Us</h1>
			<form className="container col-10 pb-3 col-md-8 col-lg-6 col-xl-4">
				<div className="mb-3">
					<label htmlFor="inputName" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="inputName"
						name="Name"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="emailInput" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="emailInput"
						aria-describedby="emailHelp"
						name="Email"
						required
					/>
					<div id="emailHelp" className="form-text">
						We&apos;ll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="inputMessage" className="form-label">
						Message
					</label>
					<textarea
						type="textarea"
						className="form-control"
						rows="3"
						id="inputMessage"
						name="Message"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary text-white">
					Submit
				</button>
			</form>

			<Footer active="contact" info={contactInfo} />
		</div>
	);
};

export default contactUs;

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
