import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import client from "../../config/sanityClientConstructor";

const CommunityRuralOutreaches = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>
					Community and Rural Outreaches - World Eye Foundation
				</title>
				<meta
					name="description"
					content="Community and Rural Outreaches - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar info={contactInfo} active="community-rural-outreaches" />

			<div className=""></div>

			<Footer info={contactInfo} active="community-rural-outreaches" />
		</div>
	);
};

export default CommunityRuralOutreaches;

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
