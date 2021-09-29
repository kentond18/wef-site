import SanityBlockContent from "@sanity/block-content-to-react";
import sanityClient from "@sanity/client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";

const visionAndMission = ({ data }) => {
	const BlockRenderer = (props) => {
		const { style = "normal" } = props.node;

		if (style === "blockquote") {
			return (
				<blockquote className="blockquote">
					<p>{props.children}</p>
				</blockquote>
			);
		}

		// Fall back to default handling
		return SanityBlockContent.defaultSerializers.types.block(props);
	};

	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Vision & Mission - World Eye Foundation</title>
				<meta
					name="description"
					content="Vision and Mission - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>
			<NavBar active="mission" />
			<div className="container">
				<h1 className="text-center pt-3">{data.header}</h1>
				<SanityBlockContent
					blocks={data.content}
					serializers={{ types: { block: BlockRenderer } }}
				/>
			</div>

			<Footer />
		</div>
	);
};

export default visionAndMission;

export async function getStaticProps() {
	const client = sanityClient({
		projectId: "0te03ffb",
		dataset: "production",
		apiVersion: "2021-09-28",
		token: process.env.SANITY_TOKEN,
		useCdn: true,
	});
	const query = `*[_type == "article" && references(*[_type == 'section' && sectionName == 'Vision and Mission']._id)]{
		title,
		"header": section->sectionName,
		_updatedAt,
		content,
	  }`;
	let data;

	await client.fetch(query).then((res) => {
		data = res[0];
	});

	return {
		props: {
			data: data,
		},
	};
}
