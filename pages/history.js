import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import sanityClient from "@sanity/client";
import BlockContent from "@sanity/block-content-to-react";

const history = ({ data }) => {
	return (
		<body className="vh-100 d-flex flex-column">
			<NavBar />
			<div className="container">
				<h1>{data.header}</h1>
				<p className="text-muted">
					Last updated:{" "}
					{new Date(data._updatedAt).toLocaleDateString()}
				</p>
				<BlockContent blocks={data.content} />
			</div>

			<Footer />
		</body>
	);
};

export default history;

export async function getStaticProps() {
	const client = sanityClient({
		projectId: "0te03ffb",
		dataset: "production",
		apiVersion: "2021-09-28",
		token: process.env.SANITY_TOKEN,
		useCdn: false,
	});
	const query = `*[_type == "aboutUsArticle"]{
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
