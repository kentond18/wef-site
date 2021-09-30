import SanityBlockContent from "@sanity/block-content-to-react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import client from "../../config/sanityClientConstructor";

const visionAndMission = ({ data, contactInfo }) => {
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
			<NavBar active="mission" info={contactInfo} />
			<div className="container">
				<h1 className="text-center pt-3">{data.header}</h1>
				<SanityBlockContent
					blocks={data.content}
					serializers={{ types: { block: BlockRenderer } }}
				/>
			</div>

			<Footer info={contactInfo} />
		</div>
	);
};

export default visionAndMission;

export async function getStaticProps() {
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
