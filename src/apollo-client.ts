import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { NewsResponse } from "./interfaces";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://localhost:4000/graphql",
    }),
    cache: new InMemoryCache(),
});

export default client;



export const getNews = async () => {
  try {
    client.cache.reset();
    const { data } = await client.query<NewsResponse>({
      query: gql`
          query {
            getNews {
              _id
              source
              author
              title
              description
              url
              image
              published_at
            }
          }
        `,
    });
    return data.getNews;

  } catch (error: any) {
    console.error(error.message);
  }
}