import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Head from "next/head";
import Link from "next/link";
import client from "../config/sanityClientConstructor";

const FormSubmitted = ({ contactInfo }) => {
	return (
		<div className="vh-100 d-flex flex-column">
			<Head>
				<title>Form Submitted - World Eye Foundation</title>
				<meta
					name="description"
					content="Form Submitted - World Eye Foundation"
				/>
				<link rel="icon" href="/wef_icon.png" />
			</Head>
			<NavBar info={contactInfo} />
			<div className="container text-center py-5">
				<h1>We will be in touch!</h1>
				<h3>
					We have received your submission, and will get back to you
					in due time.
				</h3>
				<Link href="/">
					<a>
						<h3 className="py-5">Home</h3>
					</a>
				</Link>
			</div>
			<Footer info={contactInfo} />
		</div>
	);
};

export default FormSubmitted;

export async function getStaticProps() {
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
			contactInfo: contactData[0],
		},
	};
}
