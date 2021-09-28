import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import MainJumbotron from "./components/Index/MainJumbotron.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>World Eye Foundation</title>
				<meta name="description" content="World Eye Foundation" />
				<link rel="icon" href="/wef_icon.png" />
			</Head>
			<div className="vh-100 d-flex flex-column">
				<NavBar active="home" />

				<MainJumbotron />

				<Footer active="home" />
			</div>
		</div>
	);
}
