import Image from "next/image";
import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const BioCard = ({ data, client }) => {
	const imgBuilder = imageUrlBuilder(client);

	return (
		<div
			className="container d-flex flex-column align-items-center py-3"
			style={{ width: "24rem" }}
		>
			<div className="card align-items-center pt-3">
				<div className="">
					<Image
						src={imgBuilder
							.image(data.imgURL)
							.width(200)
							.height(200)
							.fit("min")
							.crop("focalpoint")
							.url()}
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
						<SanityBlockContent
							blocks={data.biography}
							className="card-text"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BioCard;
