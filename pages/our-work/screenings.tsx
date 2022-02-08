import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { gql } from "graphql-request";
import graphcms from "../../config/graphCMSConfig";
import { contactInfo } from "../../types";
import { GetStaticProps, NextPage } from "next";

type Props = {
	contactInfo: contactInfo;
};

const Screenings: NextPage<Props> = ({ contactInfo }) => {
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
			<NavBar contactInfo={contactInfo} active={"/our-work/screenings"} />

			<div className="display-2 text-center py-3">Screenings</div>

			{/* Change active link prop */}
			<Footer contactInfo={contactInfo} active={"/screenings"} />
		</div>
	);
};

export default Screenings;

export const getStaticProps: GetStaticProps = async () => {
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
};
