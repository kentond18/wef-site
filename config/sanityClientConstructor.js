import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "0te03ffb",
	dataset: "production",
	apiVersion: "2021-09-28",
	useCdn: false,
});
