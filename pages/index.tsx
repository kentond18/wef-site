import styles from "../styles/Home.module.scss";
import MainJumbotron from "./components/Index/MainJumbotron";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { gql } from "graphql-request";
import graphcms from "../config/graphCMSConfig";
import { GetStaticProps } from "next";

type Props = {
	contactInfo;
};

export default function Home({ contactInfo }: Props) {
	return (
		<div className={styles.container}>
			<Header
				title="World Eye Foundation"
				description="World Eye Foundation"
			/>
			<div className="vh-100 d-flex flex-column">
				<NavBar active="/" contactInfo={contactInfo} />

				<MainJumbotron contactInfo={contactInfo} />

				<Footer active="home" contactInfo={contactInfo} />
			</div>
		</div>
	);
}

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
