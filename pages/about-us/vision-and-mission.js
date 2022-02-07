import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import graphcms from "../../config/graphCMSConfig.js";
import { gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";

const visionAndMission = ({ data, contactInfo }) => {
	const article = data[0];

	const createMarkup = (html) => {
		return { __html: html };
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
			<NavBar active="vision-and-mission" info={contactInfo} />
			<div className="container">
				<h1 className="text-center py-3">{article.title}</h1>
				<RichText
					content={article.content.raw}
					renderers={{
						blockquote: ({ children }) => (
							<div className="blockquote text-black-50">
								{children}
							</div>
						),
					}}
				/>
			</div>

			<Footer info={contactInfo} />
		</div>
	);
};

export default visionAndMission;

// TODO: Refactor this fetch from the CMS
export async function getStaticProps() {
	const QUERY2 = gql`
		query MissionAndVision {
			articles(where: { section: Vision_And_Mission }) {
				author {
					name
				}
				content {
					raw
				}
				title
				publishedAt
			}
		}
	`;
	const { articles } = await graphcms.request(QUERY2);

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
			data: articles,
			contactInfo: contactInfos[0],
		},
	};
}
