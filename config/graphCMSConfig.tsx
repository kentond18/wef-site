import { GraphQLClient } from "graphql-request";

const graphcms: GraphQLClient = new GraphQLClient(
	"https://api-us-east-1.graphcms.com/v2/ckyymux0k032b01w9e60acjvd/master",
	{
		headers: {
			Authorization: `Bearer ${process.env.GRAPHCMS_PROD_KEY}`,
		},
	}
);

export default graphcms;
