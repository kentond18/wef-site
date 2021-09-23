import styles from "../../../styles/components/Nav/NavBar.module.scss";

const NavBar = (props) => {
	return (
		<div className="bg-light">
			{/* Header bar to navbar */}

			<div className="container-fluid d-lg-flex justify-content-between border-bottom py-3 align-items-center text-black-50 d-none fw-light">
				<div className="d-flex justify-content-evenly col-6">
					<span>Phone: +44 73075 04262</span>
					<span>|</span>

					<span>Email: test@test.com</span>
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
						<a
							className="nav-link active"
							aria-current="page"
							href="#"
						>
							Home
						</a>
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Latest Causes
						</a>
						<a className="nav-link" href="#">
							Social Events
						</a>

						<div className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Blog
							</a>
							<ul
								className="dropdown-menu border-0 bg-light text-decoration-none"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<a className="nav-link ps-2" href="#">
										Blog
									</a>
								</li>
								<li>
									<a className="nav-link ps-2" href="#">
										Blog Details
									</a>
								</li>
							</ul>
						</div>
						<a className="nav-link" href="#">
							Contact
						</a>
						<button className="btn btn-primary col-2 py-2 ms-3">
							<a
								className="text-light text-decoration-none"
								href="#"
							>
								Donate
							</a>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
