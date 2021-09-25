import styles from "../../styles/components/NavBar.module.scss";
import Link from "next/link";

const NavBar = (props) => {
	return (
		<div className="bg-light">
			{/* Header bar to navbar */}

			<div className="container-fluid d-lg-flex justify-content-between border-bottom py-3 align-items-center text-black-50 d-none fw-light">
				<div className="d-flex justify-content-evenly col-6">
					<a
						href="tel:+447307504262"
						className="text-black-50 text-decoration-none"
					>
						Phone: +44 73075 04262
					</a>
					<span>|</span>

					<a
						className="text-black-50 text-decoration-none"
						href="mailto:test@test.com?subject=Touching Base with World Eye Foundation"
					>
						Email: test@test.com
					</a>
					<span>|</span>
					<div className="d-flex justify-content-evenly">
						<a href="#" className="px-2">
							<i className="bi bi-facebook"></i>
						</a>
						<a href="#" className="px-2">
							<i className="bi bi-twitter"></i>
						</a>
						<a href="#" className="px-2">
							<i className="bi bi-linkedin"></i>
						</a>
						<a href="#" className="px-2">
							<i className="bi bi-google"></i>
						</a>
					</div>
				</div>
				<div>
					<span className="text-decoration-underline">
						Subscribe Now
					</span>
				</div>
			</div>

			{/* MAIN NAVBAR */}

			<nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						World Eye Foundation
					</a>
					<button
						className="navbar-toggler border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<div className="d-flex flex-column">
							<span className={styles.tealTogglerLine}></span>
							<span className={styles.tealTogglerLine}></span>
							<span className={styles.tealTogglerLine}></span>
						</div>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end text-secondary"
						id="navbarNavAltMarkup"
					>
						<Link aria-current="page" href="/">
							<a className="nav-link active">Home</a>
						</Link>
						<div className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								About Us
							</a>
							<ul
								className="dropdown-menu border-0 bg-light text-decoration-none"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">History</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											Mission and Vision
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											Our Team
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											Partners
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											Contact Us
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Our Work
							</a>
							<ul
								className="dropdown-menu border-0 bg-light text-decoration-none"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											Community and Rural Outreaches
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											School Screening Programmes
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											Research and Development
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a className="nav-link ps-2">
											Conferences, Webinars, and Eye Care
											Tips
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<Link href="#">
							<a className="nav-link">Gallery</a>
						</Link>

						<div className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Get Involved
							</a>
							<ul
								className="dropdown-menu border-0 text-decoration-none"
								aria-labelledby="navbarDropdown"
							>
								<div className="bg-light">
									<li>
										<Link href="/donate">
											<a className="nav-link ps-2">
												Donate
											</a>
										</Link>
									</li>
									<li>
										<Link href="/corporate-partner">
											<a className="nav-link ps-2">
												Become a Corporate Partner
											</a>
										</Link>
									</li>
									<li>
										<Link href="/project-partner">
											<a className="nav-link ps-2">
												Partner for Programmes or
												Projects
											</a>
										</Link>
									</li>
									<li>
										<Link href="/volunteering">
											<a className="nav-link ps-2">
												Volunteering
											</a>
										</Link>
									</li>
									<li>
										<Link href="/other-opportunities">
											<a className="nav-link ps-2">
												Attachment, Internship, and
												Career Opportunities
											</a>
										</Link>
									</li>
								</div>
							</ul>
						</div>

						<a className="nav-link" href="#">
							News
						</a>

						<Link href="/donate" passHref>
							<button className="btn btn-primary col-2 py-2 ms-3">
								<a className="text-light text-decoration-none">
									Donate
								</a>
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
