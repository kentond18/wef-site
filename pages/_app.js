import "../styles/globals.scss";
// import "bootstrap/scss/bootstrap.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		typeof document !== undefined
			? require("bootstrap/dist/js/bootstrap")
			: null;
	}, []);
	return <Component {...pageProps} />;
}

export default MyApp;
