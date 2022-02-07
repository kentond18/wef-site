import styles from "../../styles/components/NavBar.module.scss";
import Link from "next/link";

const NavBar = ({ active, info }) => {
	if (!info) {
		info = {
			address: {
				street: "123 Test Street",
				city: "Test City",
				province: "Test Province",
				postcode: "12345",
			},
			phoneNumber: "+44 000 000 0000",
			email: "test@email.com",
		};
	}

	return (
		<div className="bg-light">
			{/* Header bar to navbar */}

			<div className="container-fluid d-lg-flex justify-content-between border-bottom py-3 align-items-center text-black d-none fw-lighter">
				<div className="d-flex justify-content-evenly col-6">
					<a
						href="tel:+447307504262"
						className="text-black text-decoration-none"
					>
						{info.phoneNumber || "+44 000 000 0000"}
					</a>
					<span>|</span>

					<a
						className="text-black text-decoration-none"
						href="mailto:test@test.com?subject=Touching Base with World Eye Foundation"
					>
						{info.email || "test@email.com"}
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
					<a
						href="#emailInput"
						className="text-black text-decoration-none"
					>
						Subscribe Now
					</a>
				</div>
			</div>

			{/* MAIN NAVBAR */}

			<nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
				<div className="container-fluid">
					<Link href="/">
						<a className="navbar-brand fw-bolder fs-2">
							World Eye Foundation
						</a>
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
												active == "vision-and-mission"
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
												active == "our-team"
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
									<Link href="/our-work/community-rural-outreaches">
										<a
											className={`nav-link ps-2 ${
												active ==
												"community-rural-outreaches"
													? "active"
													: null
											}`}
										>
											Community and Rural Outreaches
										</a>
									</Link>
								</li>
								<li>
									<Link href="/our-work/school-screening-prog">
										<a
											className={`nav-link ps-2 ${
												active ==
												"school-screening-prog"
													? "active"
													: null
											}`}
										>
											School Screening Programmes
										</a>
									</Link>
								</li>
								<li>
									<Link href="/our-work/research-develop">
										<a
											className={`nav-link ps-2 ${
												active == "research-develop"
													? "active"
													: null
											}`}
										>
											Research and Development
										</a>
									</Link>
								</li>
								<li>
									<Link href="/our-work/conf-webinar-tips">
										<a
											className={`nav-link ps-2 ${
												active == "conf-webinar-tips"
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
						<Link href="/gallery">
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
										<Link href="/get-involved/corporate-partner">
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
										<Link href="/get-involved/project-partner">
											<a
												className={`nav-link ps-2 ${
													active == "project-partner"
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
										<Link href="/get-involved/volunteering">
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
										<Link href="/get-involved/careers">
											<a
												className={`nav-link ps-2 ${
													active == "careers"
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

						<Link href="/news">
							<a
								className={`nav-link ${
									active == "news" ? "active" : null
								}`}
							>
								News
							</a>
						</Link>

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
