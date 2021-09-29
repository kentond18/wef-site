import styles from "../../styles/components/Footer.module.scss";
import Link from "next/link";

const Footer = ({ active }) => {
	return (
		<footer className="bg-dark mt-auto">
			<div className="p-4 d-flex flex-column flex-md-row flex-wrap align-items-center align-items-md-start justify-content-evenly text-light">
				<p className="fs-1 text-center flex-shrink-0">
					World Eye <br /> Foundation
				</p>
				<div className="d-flex flex-column justify-content-evenly">
					<p className="fs-5">Contact Info</p>
					<ul className="list-unstyled fw-light">
						<li className="py-2">
							Address: 123 Apple Street <br />
							Anywhere, Province <br />
							12345
						</li>
						<li className="py-2">Phone: +44 02042 123456</li>
						<li className="py-2">Email: test@test.com</li>
					</ul>
				</div>
				<div className="d-flex flex-column justify-content-evenly">
					<p className="fs-5">Important Links</p>
					<ul className="list-unstyled fw-light">
						<Link href="/about-us/history" passHref>
							<a className="text-reset text-decoration-none">
								<li
									className={`py-2 footer-link ${
										active == "about" ? "active" : null
									}`}
									id="about-us"
								>
									About Us
								</li>
							</a>
						</Link>
						<Link href="/volunteering">
							<a className="text-reset text-decoration-none">
								<li
									className={`py-2 footer-link ${
										active == "volunteering"
											? "active"
											: null
									}`}
									id="get-involved"
								>
									Get Involved
								</li>
							</a>
						</Link>
						<Link href="/donate" passHref>
							<a className="text-reset text-decoration-none">
								<li
									className={`py-2 footer-link ${
										active == "donate" ? "active" : null
									}`}
									id="donate"
								>
									Donate
								</li>
							</a>
						</Link>
						<Link href="/contact" passHref>
							<a className="text-reset text-decoration-none">
								<li
									className={`py-2 footer-link ${
										active == "contact" ? "active" : null
									}`}
									id="contact-us"
								>
									Contact Us
								</li>
							</a>
						</Link>
					</ul>
				</div>
				<div className="d-flex flex-column justify-content-evenly">
					<div className="fs-5 pb-2">Newsletter</div>
					<div className="fw-light pb-3">
						Sign up for updates of our upcoming projects
					</div>
					<form>
						<div className="input-group">
							<input
								type="email"
								className="form-control col-6"
								name="emailAddress"
								id="emailInput"
								placeholder="Email address"
								required
							/>
							<button
								className="btn btn-primary"
								type="submit"
								onSubmit={(data) => console.log(data)}
							>
								<i className="bi bi-envelope"></i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
