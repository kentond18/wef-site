import { useState } from "react";
import styles from "../../styles/components/DonateBlock.module.scss";

const DonateBlock = (props) => {
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState(0);

	const onChangeHandler = (e) => {
		if (e.target.name == "amount") setAmount(e.target.value);
		else setEmail(e.target.value);
	};

	const startPayment = (e) => {
		e.preventDefault();

		let handler = PaystackPop.setup({
			key: "pk_test_50988ea6de4aa7a346924072a1d5974c42a88bbd",
			email: email,
			amount: amount * 100,
			currency: "GHS",
			onClose: () => {
				alert("Window closed");
			},
			callback: (res) => {
				alert("Payment complete! Reference: " + res.reference);
			},
		});

		handler.openIframe();
	};

	return (
		<div className="card" style={{ width: "24rem" }}>
			<h1 className="card-title text-center  mt-3">Donate today!</h1>
			<form className="card-body" onSubmit={startPayment}>
				<div className="mb-3">
					<label htmlFor="email-input" className="form-label">
						Email:
					</label>
					<div className="input-group">
						<input
							type="email"
							name="email-input"
							id="emailAddress"
							required
							className="form-control"
							placeholder="janedoe@acme.com"
							onChange={onChangeHandler}
						/>
						<div className="invalid-feedback">
							Please enter a valid email
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="amount" className="form-label">
						Amount:
					</label>
					<div className="input-group has-validation">
						<span className="input-group-text" id="donate-amount">
							GHS
						</span>
						<input
							type="number"
							name="amount"
							id="amount"
							required
							className="form-control"
							placeholder="5"
							aria-label="Amount"
							aria-describedby="donate-amount"
							onChange={onChangeHandler}
						/>
					</div>
				</div>
				<button
					className="btn btn-light btn-outline-primary"
					type="submit"
				>
					Donate
				</button>
			</form>
		</div>
	);
};

export default DonateBlock;
