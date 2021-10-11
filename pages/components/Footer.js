import styles from "../../styles/components/Footer.module.scss";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const Footer = ({ active, info }) => {
	const [email, setEmail] = useState("");

	const onClickHandler = async (e) => {
		e.preventDefault();

		try {
			await axios
				.post("/api/newsletter", {
					email: email,
				})
				.then((response) => {
					console.log(response);
					if (response.status == 200) {
						switch (response.data.info) {
							case "User already subscribed":
								setEmail("");
								document
									.getElementById("emailErrorText")
									.classList.remove("d-none");
								break;
							case "User added":
								setEmail("");
								document
									.getElementById("confirmationText")
									.classList.remove("d-none");
								break;

							default:
								break;
						}
					}
				});
		} catch (error) {
			console.log(error);
			// Clear input field
			setEmail("");
			// Display error message and inform to try again
			document
				.getElementById("serverErrorText")
				.classList.remove("d-none");
		}
	};

	const onChangeHandler = (e) => {
		if (e.target.name == "emailAddress") {
			setEmail(e.target.value);
		}
	};

	if (!info) {
		info = {
			address: {
				street: "123 Test Street",
				city: "Test City",
				province: "Test Province",
				postcode: "12345",
			},
			phone: "+44 000 000 0000",
			email: "test@email.com",
		};
	}

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
							{info.address.street} <br />
							{info.address.city}, {info.address.province} <br />
							{info.address.postcode}
						</li>
						<li className="py-2">{info.phone}</li>
						<li className="py-2">{info.email}</li>
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
						<Link href="/about-us/contact-us" passHref>
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
						<div
							className="text-center fw-normal pt-2 text-primary d-none"
							id="confirmationText"
						>
							Sign up complete!
							<br /> Check your email to confirm subscription.
						</div>
						<div
							className="text-center fw-normal pt-2 text-warning d-none"
							id="serverErrorText"
						>
							There was an error with the sign up! <br />
							Please refresh the page and try again.
						</div>
						<div
							className="text-center fw-normal pt-2 text-warning d-none"
							id="emailErrorText"
						>
							You&apos;re already a member! <br />
							Enter a different email or unsubscribe and
							resubscribe.
						</div>
					</div>
					<form>
						<div className="input-group">
							<input
								type="email"
								className="form-control col-6"
								name="emailAddress"
								id="emailInput"
								placeholder="Email address"
								value={email}
								required
								onChange={onChangeHandler}
							/>
							<button
								className="btn btn-primary"
								type="submit"
								onClick={onClickHandler}
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
