import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import client from "../../config/sanityClientConstructor";

const ResearchDevelop = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Research and Devlopment - World Eye Foundation</title>
				<meta
					name="description"
					content="Research and Devlopment - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar info={contactInfo} active="research-develop" />

			<div className=""></div>

			<Footer info={contactInfo} active="research-develop" />
		</div>
	);
};

export default ResearchDevelop;

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