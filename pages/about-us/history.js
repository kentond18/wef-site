import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import sanityClient from "@sanity/client";
import SanityBlockContent from "@sanity/block-content-to-react";

const history = ({ data }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<NavBar active="history" />
			<div className="container">
				<h1 className="text-center pt-3">{data.header}</h1>
				<p className="text-muted text-end">
					Last updated:{" "}
					{new Date(data._updatedAt).toLocaleDateString()}
				</p>
				<SanityBlockContent blocks={data.content} />
			</div>

			<Footer />
		</div>
	);
};

export default history;

export async function getStaticProps() {
	const client = sanityClient({
		projectId: "0te03ffb",
		dataset: "production",
		apiVersion: "2021-09-28",
		token: process.env.SANITY_TOKEN,
		useCdn: true,
	});
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

	return {
		props: {
			data: data,
		},
	};
}
