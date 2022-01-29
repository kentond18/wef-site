import Head from "next/head";
import Footer from "../pages/components/Footer";
import NavBar from "../pages/components/NavBar";
import { gql } from "graphql-request";
import { graphcms } from "./graphCMSConfig";

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
			}
		}
	`;

	const { contactInfos } = await graphcms.request();

	return {
		props: {
			contactInfo: contactInfos[0],
		},
	};
}
