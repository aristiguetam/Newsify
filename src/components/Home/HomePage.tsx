import { gql, useQuery } from "@apollo/client";
import { NewCard } from "../NewsCard/NewCard";
import { DataNewsResponse, NewsResponse } from "@/interfaces";

const QUERY = gql`
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
`;
export const HomePage = () => {

    const { data: news } = useQuery<NewsResponse>(QUERY);

    if (!news) return null

    return (
        <div className="container mx-auto my-10 space-y-4 ">
            {
                news.getNews.map((news) => (
                    <NewCard key={news._id} news={news} />
                ))
            }
        </div>
    )
}
