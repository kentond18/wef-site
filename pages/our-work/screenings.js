import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { gql } from "graphql-request";
import graphcms from "../../config/graphCMSConfig";

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
			<NavBar info={contactInfo} active={"/our-work/screenings"} />

			<div className="display-2 text-center py-3">Screenings</div>

			{/* Change active link prop */}
			<Footer info={contactInfo} active={"/screenings"} />
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
