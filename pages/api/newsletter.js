const mailchimp = require("@mailchimp/mailchimp_marketing");

export default async function handler(req, res) {
	mailchimp.setConfig({
		apiKey: process.env.MAILCHIMP_API_KEY,
		server: "us5",
	});

	const listID = process.env.MAILCHIMP_AUDIENCE_ID;

	async function run() {
		const response = await mailchimp.lists.addListMember(listID, {
			email_address: req.body.email,
			status: "pending",
		});
		return response;
	}

	run()
		.then((e) => {
			res.status(200).send(e);
		})
		.catch((e) => {
			res.status(e.status).send(e.message);
		});
}
