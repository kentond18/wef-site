import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { gql } from "graphql-request";
import graphcms from "../../config/graphCMSConfig";
import BioCard from "../components/BioCard";

const ourTeam = ({ profiles, contactInfo }) => {
	let pgData = "";
	if (!profiles) {
		pgData = (
			<div className="display-3 text-center pt-5">
				Unfortunately, this page is currently getting updated. Please
				check back soon.
			</div>
		);
	} else {
		pgData = profiles.map((e, i) => {
			return <BioCard data={e} key={i} />;
		});
	}

	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Our Team - World Eye Foundation</title>
				<meta
					name="description"
					content="Our Team - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>

			<NavBar active="our-team" info={contactInfo} />
			<h1 className="text-center pt-3">Our Team</h1>
			<div className="d-flex justify-content-evenly flex-wrap">
				{pgData}
			</div>

			<Footer info={contactInfo} />
		</div>
	);
};

export default ourTeam;

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

	const QUERY2 = gql`
		query MyQuery {
			profiles(where: { sectionOfSite: Our_Team }) {
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

	const { profiles } = await graphcms.request(QUERY2);

	return {
		props: {
			profiles,
			contactInfo: contactInfos[0],
		},
	};
}
