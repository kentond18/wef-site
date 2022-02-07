import Head from "next/head";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { gql } from "graphql-request";
import graphcms from "../config/graphCMSConfig";

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
