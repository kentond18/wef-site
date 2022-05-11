import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { gql } from "graphql-request";
import graphcms from "./graphCMSConfig";
import { GetStaticProps, NextPage } from "next";
import { contactInfo } from "../types";

type Props = {
	contactInfo: contactInfo;
};

const Boilerplate: NextPage<Props> = ({ contactInfo }) => {
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
			<NavBar contactInfo={contactInfo} active={""} />

			<div className=""></div>

			{/* Change active link prop */}
			<Footer contactInfo={contactInfo} active={""} />
		</div>
	);
};

export default Boilerplate;

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
