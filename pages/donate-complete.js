import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Head from "next/head";
import graphcms from "../config/graphCMSConfig.js";
import { gql } from "graphql-request";

const donateComplete = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Thank you! - World Eye Foundation</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Thank you for your support! - World Eye Foundation"
				/>
			</Head>
			<NavBar info={contactInfo} />
			<div className="container w-50 py-3 h-50 d-flex flex-column justify-content-center">
				<h1 className="text-center">Thank you for your donation!</h1>
				<p className="text-center pt-3">
					We are extremely thankful for your support. Sign up below to
					receive updates regarding our progress. Thank you again!
				</p>
				<form action="/email-signup" className="align-self-center py-3">
					<div className="input-group">
						<input
							className="form-control"
							type="email"
							name="emailAddress"
							id="emailInput"
							placeholder="Email address"
							required
						/>
						<button
							type="submit"
							className="btn btn-primary rounded"
						>
							Sign up!
						</button>
					</div>
				</form>
			</div>
			<Footer info={contactInfo} />
		</div>
	);
};

export default donateComplete;

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

	return {
		props: {
			contactInfo: contactInfos[0],
		},
	};
}
