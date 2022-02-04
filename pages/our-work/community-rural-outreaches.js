import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import graphcms from "../config/graphCMSConfig.js";
import { gql } from "graphql-request";

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
	const QUERY = gql`
		query ContactInfo {
			contactInfos {
				email
				id
				phoneNumber
				fullAddress
				address {
					latitude
					longitude
				}
				taglineText
			}
		}
	`;

	const { contactInfos } = await graphcms.request(QUERY);

	return {
		props: {
			contactInfo: contactInfos[0],
		},
	};
}
