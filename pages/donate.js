import styles from "../styles/Donate.module.scss";
import DonateBlock from "./components/DonateBlock";
import Head from "next/head";
import Script from "next/script";

const donate = (props) => {
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
			<div className="container">
				<h1 className={styles.header}>Donate Page</h1>
				<div>
					<DonateBlock />
				</div>
			</div>
		</div>
	);
};

export default donate;
