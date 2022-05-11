import Head from "next/head";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import { gql } from "graphql-request";
import graphcms from "../../../config/graphCMSConfig";
import {
	GetServerSideProps,
	GetStaticPaths,
	GetStaticProps,
	NextPage,
} from "next";
import { contactInfo } from "../../../types";
import { useRouter } from "next/router";

type Props = {
	contactInfo: contactInfo;
};

const TeamMember: NextPage<Props> = ({ contactInfo }) => {
	const router = useRouter();
	const { id } = router.query;

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

			<NavBar contactInfo={contactInfo} active={"our-team"} />

			<div className=""></div>

			<Footer contactInfo={contactInfo} active={"our-team"} />
		</div>
	);
};

export default TeamMember;

export const getStaticProps: GetStaticProps = async (context) => {
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

export const getStaticPaths: GetStaticPaths = async () => {};
