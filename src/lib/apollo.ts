import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ovm2cq15h901ywdkdea466/master",
  cache: new InMemoryCache(),
});
