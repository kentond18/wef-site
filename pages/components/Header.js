import Head from "next/head";

const Header = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/wef_icon.png" />
		</Head>
	);
};

export default Header;
