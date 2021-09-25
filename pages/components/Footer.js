import styles from "../../styles/components/Footer.module.scss";
import Link from "next/link";

const Footer = (props) => {
	return (
		<footer className="bg-dark mt-auto">
			<div className="p-4 d-flex flex-column flex-md-row flex-wrap align-items-center align-items-md-start justify-content-evenly text-light">
				<p className="fs-1 text-center flex-shrink-0">
					World Eye <br /> Foundation
				</p>
				<div className="d-flex flex-column justify-content-evenly">
					<p className="fs-5">Contact Info</p>
					<ul className="list-unstyled text-muted">
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
					<ul className="list-unstyled text-muted">
						<Link href="/about" passHref>
							<li className="py-2 footer-link">About Us</li>
						</Link>
						<Link href="/volunteering" passHref>
							<li className="py-2 footer-link">Get Involved</li>
						</Link>
						<Link href="/donate" passHref>
							<li className="py-2 footer-link">Donate</li>
						</Link>
						<Link href="/contacy" passHref>
							<li className="py-2 footer-link">Contact Us</li>
						</Link>
					</ul>
				</div>
				<div className="d-flex flex-column justify-content-evenly">
					<div className="fs-5 pb-2">Newsletter</div>
					<div className="text-muted pb-3">
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
								onSubmit
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
