import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainJumbotron from "./components/Index/MainJumbotron.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { gql } from "graphql-request";
import graphcms from "../config/graphCMSConfig";

export default function Home({ contactInfo }) {
	return (
		<div className={styles.container}>
			<Header
				title="World Eye Foundation"
				description="World Eye Foundation"
			/>
			<div className="vh-100 d-flex flex-column">
				<NavBar active="/" info={contactInfo} />

				<MainJumbotron data={contactInfo} />

				<Footer active="home" info={contactInfo} />
			</div>
		</div>
	);
}

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
