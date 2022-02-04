import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import graphcms from "../config/graphCMSConfig.js";
import { gql } from "graphql-request";

const SchoolScreeningProg = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>School Screening Programs - World Eye Foundation</title>
				<meta
					name="description"
					content="School Screening Programs - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar info={contactInfo} active="school-screening-prog" />

			<div className=""></div>

			<Footer info={contactInfo} active="school-screening-prog" />
		</div>
	);
};

export default SchoolScreeningProg;

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
