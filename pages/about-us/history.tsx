import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Head from "next/head";
import graphcms from "../../config/graphCMSConfig";
import { gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import renderers from "../../config/richTextRenders";
import { GetStaticProps, NextPage } from "next";
import { Article, contactInfo } from "../../types";

type Props = {
	contactInfo: contactInfo;
	article: Article;
};

const history: NextPage<Props> = ({ article, contactInfo }) => {
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
			<NavBar active="/about-us/history" contactInfo={contactInfo} />
			<div className="container">
				<h1 className="text-center pt-3">{article.title}</h1>
				<p className="text-muted text-end">
					Last updated:{" "}
					{new Date(article.publishedAt).toLocaleString()}
				</p>
				<RichText
					content={article.content.raw}
					renderers={renderers()}
				/>
			</div>

			<Footer active="/about-us/history" contactInfo={contactInfo} />
		</div>
	);
};

export default history;

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
			article: articles[0],
			contactInfo: contactInfos[0],
		},
	};
};
