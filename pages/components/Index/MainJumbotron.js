import styles from "../../../styles/components/jumbotron.module.scss";
import Image from "next/image";
import Link from "next/link";

const MainJumbotron = (props) => {
	return (
		<div className="container-fluid position-relative col-10 col-lg-12 rounded my-3 pb-3 shadow">
			<div className="d-none d-lg-block">
				<Image
					src="/h1_hero.png"
					alt="Boy smiling with notebook"
					width={1922}
					height={844}
				/>
			</div>
			<div
				className={`${styles.heroImg} d-flex flex-column d-lg-block align-items-center`}
			>
				<h1
					className={`align-lg-left display-2 text-secondary fw-bolder ${styles.headerText}`}
				>
					Our Helping To
					<br />
					The World
				</h1>
				<p className="col-lg-8 col-sm-6 w-75 text-center fw-lighter">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Rem vitae laborum eum officiis repudiandae! Earum voluptate
					natus qui, ut molestias, distinctio consequatur accusamus
					vitae incidunt repellat nisi molestiae? Quos, id.
				</p>
				<div className="d-flex align-items-center justify-content-center w-75 flex-column flex-md-row">
					<button className="btn btn-primary px-4 py-2">
						<Link href="/donate">
							<a className="text-dark text-decoration-none">
								Donate
							</a>
						</Link>
					</button>
					<a
						className="px-3 text-secondary fw-lighter"
						href="tel:+447307504262"
					>
						<i className="bi bi-telephone text-secondary pe-1"></i>
						+44 73075 04262
					</a>
				</div>
			</div>
		</div>
	);
};

export default MainJumbotron;
