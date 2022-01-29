import Image from "next/image";

const BioCard = ({ data }) => {
	if (!data) {
		return (
			<div className="display-3">
				The card was not rendered properly. Missing Data
			</div>
		);
	}

	return (
		<div
			className="container d-flex flex-column align-items-center py-3"
			style={{ width: "24rem" }}
		>
			<div className="card align-items-center pt-3">
				<div>
					<Image
						src={data.profilePicture.url}
						alt={`Image of ${data.name}`}
						height={200}
						width={200}
						className="card-img-top rounded-circle"
					/>
				</div>
				<div className="card-body">
					<h4 className="card-title">{data.name}</h4>
					<p className="card-subtitle text-muted mb-2">
						{data.position}
					</p>
					<div className="text-center">
						<div className="card-text">
							{data.smallProfileBlurb}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BioCard;
