import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import client from "../../config/sanityClientConstructor";
import SanityBlockContent from "@sanity/block-content-to-react";

const history = ({ data, contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<meta
					name="description"
					content="History - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
				<title>History - World Eye Foundation</title>
			</Head>
			<NavBar active="history" info={contactInfo} />
			<div className="container">
				<h1 className="text-center pt-3">{data.header}</h1>
				<p className="text-muted text-end">
					Last updated:{" "}
					{new Date(data._updatedAt).toLocaleDateString()}
				</p>
				<SanityBlockContent blocks={data.content} />
			</div>

			<Footer active="about" info={contactInfo} />
		</div>
	);
};

export default history;

export async function getStaticProps() {
	// const client = sanityClient({
	// 	projectId: "0te03ffb",
	// 	dataset: "production",
	// 	apiVersion: "2021-09-28",
	// 	useCdn: true,
	// });
	const query = `*[_type == "article" && references(*[_type == 'section' && sectionName == 'History']._id)]{
		title,
		"header": section->sectionName,
		_updatedAt,
		content,
	  }`;
	let data;

	await client.fetch(query).then((res) => {
		data = res[0];
	});

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
			data: data,
			contactInfo: contactData[0],
		},
	};
}
