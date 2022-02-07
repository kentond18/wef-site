import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import BioCard from "../components/BioCard";
import graphcms from "../../config/graphCMSConfig.js";
import { gql } from "graphql-request";

const partners = ({ data, contactInfo }) => {
	let pgData = "";
	if (data.length < 1)
		pgData = (
			<div className="display-3 text-center pt-5">
				Unfortunately, this page is currently getting updated. Please
				check back soon.
			</div>
		);
	else
		pgData = data.map((e, i) => {
			return <BioCard data={e} client={client} key={i} />;
		});

	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Partners - World Eye Foundation</title>
				<meta
					name="description"
					content="Partners - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar active="/about-us/partners" info={contactInfo} />
			<h1 className="text-center pt-3">Partners</h1>
			<div className="d-flex justify-content-evenly flex-wrap">
				{pgData}
			</div>

			<Footer info={contactInfo} />
		</div>
	);
};

export default partners;

// TODO: Refactor this fetch from the CMS

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

	const QUERY2 = gql`
		query Partners {
			profiles(where: { sectionOfSite: Partners }) {
				smallProfileBlurb
				sectionOfSite
				profilePicture {
					url
					width
					height
				}
				name
				postiion
				fullBiography {
					html
				}
			}
		}
	`;

	const { contactInfos } = await graphcms.request(QUERY);

	const { profiles } = await graphcms.request(QUERY2);

	return {
		props: {
			data: profiles,
			contactInfo: contactInfos[0],
		},
	};
}
