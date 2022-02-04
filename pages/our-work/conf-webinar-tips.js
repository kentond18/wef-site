import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import graphcms from "../config/graphCMSConfig.js";
import { gql } from "graphql-request";

const ConferenceWebinarTips = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>
					Conferences, Webinars, and Eye Tips - World Eye Foundation
				</title>
				<meta
					name="description"
					content="Conferences, Webinars, and Eye Tips - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar info={contactInfo} active="conf-webinar-tips" />

			<div className=""></div>

			<Footer info={contactInfo} active="conf-webinar-tips" />
		</div>
	);
};

export default ConferenceWebinarTips;

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
