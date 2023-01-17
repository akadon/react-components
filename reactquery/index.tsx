import React, { useState } from "react";
import { Hydrate, dehydrate, QueryClient } from "react-query";
import { useQuery, QueryClientProvider } from "react-query";
import axios from "axios";

export const fetcher = (url: any) =>
  axios.get(url).then((res: any) => res.data);

const fetchPosts = async (url: any) => {
  const parsed: any = await fetcher(url);
  return parsed;
};

const usePosts = (url: any, limit: any) => {
  return useQuery([limit], () => fetchPosts(url));
};

export const PostList = () => {
  const [postCount, setPostCount] = useState(10);
  const { data, isLoading, isFetching } = usePosts("https://akavm.fritz.box/db.json", postCount);

  return (
    <section>
      <ul>
        {data?.posts.map((post: any, index: any) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href="#">{post.name}</a>
            </div>
          </li>
        ))}
      </ul>
      {postCount <= 90 && (
        <button
          onClick={() => setPostCount(postCount + 2)}
          disabled={isFetching}>
          {isFetching ? "Loading..." : "Show More"}
        </button>
      )}
    </section>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["posts", 10], () => fetchPosts("https://akavm.fritz.box/db.json"));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <PostList />
      </Hydrate>
    </QueryClientProvider>
  );
}
