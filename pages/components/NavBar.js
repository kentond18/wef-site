import styles from "../../styles/components/NavBar.module.scss";
import Link from "next/link";

const NavBar = ({ active, info }) => {
	return (
		<div className="bg-light">
			{/* Header bar to navbar */}

			<div className="container-fluid d-lg-flex justify-content-between border-bottom py-3 align-items-center text-black d-none fw-lighter">
				<div className="d-flex justify-content-evenly col-6">
					<a
						href="tel:+447307504262"
						className="text-black text-decoration-none"
					>
						{info.phone}
					</a>
					<span>|</span>

					<a
						className="text-black text-decoration-none"
						href="mailto:test@test.com?subject=Touching Base with World Eye Foundation"
					>
						{info.email}
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
					<span>Subscribe Now</span>
				</div>
			</div>

			{/* MAIN NAVBAR */}

			<nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
				<div className="container-fluid">
					<Link href="/">
						<a className="navbar-brand">World Eye Foundation</a>
					</Link>
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
							<a
								className={`nav-link ${
									active == "home" ? "active" : null
								}`}
							>
								Home
							</a>
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
									<Link href="/about-us/history">
										<a
											className={`nav-link ps-2 ${
												active == "history"
													? "active"
													: null
											}`}
										>
											History
										</a>
									</Link>
								</li>
								<li>
									<Link href="/about-us/vision-and-mission">
										<a
											className={`nav-link ps-2 ${
												active == "mission"
													? "active"
													: null
											}`}
										>
											Mission and Vision
										</a>
									</Link>
								</li>
								<li>
									<Link href="/about-us/our-team">
										<a
											className={`nav-link ps-2 ${
												active == "team"
													? "active"
													: null
											}`}
										>
											Our Team
										</a>
									</Link>
								</li>
								<li>
									<Link href="/about-us/partners">
										<a
											className={`nav-link ps-2 ${
												active == "partners"
													? "active"
													: null
											}`}
										>
											Partners
										</a>
									</Link>
								</li>
								<li>
									<Link href="/about-us/contact-us">
										<a
											className={`nav-link ps-2 ${
												active == "contact"
													? "active"
													: null
											}`}
										>
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
										<a
											className={`nav-link ps-2 ${
												active == "comm-outreach"
													? "active"
													: null
											}`}
										>
											Community and Rural Outreaches
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a
											className={`nav-link ps-2 ${
												active == "school-screening"
													? "active"
													: null
											}`}
										>
											School Screening Programmes
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a
											className={`nav-link ps-2 ${
												active == "research"
													? "active"
													: null
											}`}
										>
											Research and Development
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a
											className={`nav-link ps-2 ${
												active == "conferences"
													? "active"
													: null
											}`}
										>
											Conferences, Webinars, and Eye Care
											Tips
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<Link href="#">
							<a
								className={`nav-link ${
									active == "gallery" ? "active" : null
								}`}
							>
								Gallery
							</a>
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
											<a
												className={`nav-link ps-2 ${
													active == "donate"
														? "active"
														: null
												}`}
											>
												Donate
											</a>
										</Link>
									</li>
									<li>
										<Link href="/corporate-partner">
											<a
												className={`nav-link ps-2 ${
													active ==
													"corporate-partner"
														? "active"
														: null
												}`}
											>
												Become a Corporate Partner
											</a>
										</Link>
									</li>
									<li>
										<Link href="/project-partner">
											<a
												className={`nav-link ps-2 ${
													active == "program-partner"
														? "active"
														: null
												}`}
											>
												Partner for Programmes or
												Projects
											</a>
										</Link>
									</li>
									<li>
										<Link href="/volunteering">
											<a
												className={`nav-link ps-2 ${
													active == "volunteering"
														? "active"
														: null
												}`}
											>
												Volunteering
											</a>
										</Link>
									</li>
									<li>
										<Link href="/other-opportunities">
											<a
												className={`nav-link ps-2 ${
													active ==
													"attachment-opportunities"
														? "active"
														: null
												}`}
											>
												Attachment, Internship, and
												Career Opportunities
											</a>
										</Link>
									</li>
								</div>
							</ul>
						</div>

						<a
							className={`nav-link ${
								active == "news" ? "active" : null
							}`}
							href="#"
						>
							News
						</a>

						<Link href="/donate" passHref>
							<button className="btn btn-primary col-3 col-sm-2 col-md-2 p-2 ms-3">
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
