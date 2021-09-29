import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainJumbotron from "./components/Index/MainJumbotron.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import sanityClient from "@sanity/client";

const client = sanityClient({
	projectId: "0te03ffb",
	dataset: "production",
	apiVersion: "2021-09-28",
	token: process.env.SANITY_TOKEN,
	useCdn: true,
});

export default function Home({ contactInfo }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>World Eye Foundation</title>
				<meta name="description" content="World Eye Foundation" />
				<link rel="icon" href="/wef_icon.png" />
			</Head>
			<div className="vh-100 d-flex flex-column">
				<NavBar active="home" info={contactInfo} />

				<MainJumbotron />

				<Footer active="home" info={contactInfo} />
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const infoQuery = `*[_type == "contact"]{
		email,
		phone,
		address,
	  }`;
	let contactData;

	await client.fetch(infoQuery).then((res) => {
		contactData = res;
	});

	return {
		props: {
			contactInfo: contactData[0],
		},
	};
}
