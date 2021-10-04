import Head from "next/head";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import client from "../config/sanityClientConstructor";

const Custom404 = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Page Not Found</title>
				<meta
					name="description"
					content="Page Not Found - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar info={contactInfo} />

			<div className="text-center py-5">
				<h1 className="display-3">Sorry, this page was not found!</h1>
				<h3>Navigate above to another page.</h3>
			</div>

			<Footer info={contactInfo} />
		</div>
	);
};

export default Custom404;

export async function getStaticProps() {
	const infoQuery = `*[_type == "contact"]{
		email,
		phone,
		address,
		taglineText,
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
