import Head from "next/head";
import Footer from "../pages/components/Footer";
import NavBar from "../pages/components/NavBar";
import client from "./sanityClientConstructor";

const Boilerplate = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Change Title - World Eye Foundation</title>
				<meta
					name="description"
					content="Change Description - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			{/* Change active link prop */}
			<NavBar info={contactInfo} active={""} />

			<div className=""></div>

			{/* Change active link prop */}
			<Footer info={contactInfo} active={""} />
		</div>
	);
};

export default Boilerplate;

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
