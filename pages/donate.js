import styles from "../styles/Donate.module.scss";
import DonateBlock from "./components/DonateBlock";
import Head from "next/head";
import Script from "next/script";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Donate = (props) => {
	return (
		<div>
			<Head>
				<title>Donate to WEF</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Script src="https://js.paystack.co/v1/inline.js"></Script>
			<body className="vh-100 d-flex flex-column">
				<NavBar />
				<div className="align-self-center h-75 d-flex flex-column justify-content-center">
					<DonateBlock />
				</div>
				<Footer />
			</body>
		</div>
	);
};

export default Donate;
