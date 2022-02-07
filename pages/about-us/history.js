import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import graphcms from "../../config/graphCMSConfig";
import { gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";

const history = ({ data, contactInfo }) => {
	let article = data[0];

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
				<h1 className="text-center pt-3">{article.title}</h1>
				<p className="text-muted text-end">
					Last updated: {new Date(article.updatedAt).toLocaleString()}
				</p>
				<RichText content={article.content.raw} />
			</div>

			<Footer active="about" info={contactInfo} />
		</div>
	);
};

export default history;

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
		query History {
			articles(where: { section: History }) {
				author {
					name
				}
				title
				content {
					raw
				}
				updatedAt
			}
		}
	`;

	const { articles } = await graphcms.request(QUERY2);

	return {
		props: {
			data: articles,
			contactInfo: contactInfos[0],
		},
	};
}
