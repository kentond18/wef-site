import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import BioCard from "../components/BioCard";
import sanityClient from "@sanity/client";

const client = sanityClient({
	projectId: "0te03ffb",
	dataset: "production",
	apiVersion: "2021-09-28",
	token: process.env.SANITY_TOKEN,
	useCdn: true,
});

const partners = ({ data }) => {
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

			<NavBar active="partners" />
			<h1 className="text-center pt-3">Partners</h1>
			<div className="d-flex justify-content-evenly flex-wrap">
				{pgData}
			</div>

			<Footer />
		</div>
	);
};

export default partners;

export async function getStaticProps() {
	const query = `*[_type == "bio" && references(*[_type == 'section' && sectionName == 'Partners']._id)]{
		name,
		"imgURL": pic.asset->url,
		position,
		biography
	  }`;
	let data;

	await client.fetch(query).then((res) => {
		data = res;
	});

	return {
		props: {
			data: data,
		},
	};
}
