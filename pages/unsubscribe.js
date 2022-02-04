import Head from "next/head";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import graphcms from "../config/graphCMSConfig.js";
import { gql } from "graphql-request";

const Unsubscribe = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>
					Unsubscribe from Newsletter - World Eye Foundation
				</title>
				<meta
					name="description"
					content="Unsubscribe - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar info={contactInfo} />

			<div className=""></div>

			<Footer info={contactInfo} />
		</div>
	);
};

export default Unsubscribe;

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
