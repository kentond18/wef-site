import Head from "next/head";

type Props = {
	title: string;
	description: string;
};

const Header: React.FunctionComponent<Props> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/wef_icon.png" />
		</Head>
	);
};

export default Header;
