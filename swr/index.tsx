import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite';
import axios from 'axios'
import Head from 'next/head'

const revalidationOptions = {
  revalidateOnFocus: false,
  revalidateOnMount: false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
};

export const fetcher = ((url: any) =>
  axios.get(url)
    .then((res: any) => res.data
    )
);

export const fetche = ((...args: any) =>
  fetch(...([args] as const))
    .then(res => res.json()
    )
);

export const usePaginatePosts = (urladr: string, PAGE_LIMIT: number = 20) => {
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) => `${urladr}?_page=${index + 1}&_limit=${PAGE_LIMIT}`,
    fetcher, revalidationOptions
  );

  return {
    data: data ? [].concat(...data) : [],
    loading: (!data && !error) || (size > 0 && data && typeof data[size - 1] === 'undefined'),
    error: error,
    size: size,
    setSize: setSize,
    isEmpty: (data?.[0]?.length === 0),
    ReachingEnd: (data?.[0]?.length === 0) || (data && data[data.length - 1]?.length < PAGE_LIMIT)
  }
};

export const useGetPosts = (urladr: string) => {
  const { data, error, mutate } = useSWR(urladr, fetcher, revalidationOptions);

  return {
    data: data,
    loading: !error && !data,
    error: error,
    mutate
  }
};

export const addComment = async ({ address, mutate }: any) => {
  const newComment = {
    comment: 'This is a test comment',
    email: 'rb@doe.com',
  };
  await fetche(address, {
    method: 'POST',
    body: JSON.stringify(newComment),
  });
  mutate(address);
};

export default function Index() {
  const { data: posts, error: isError, loading: isLoadingMore, size, setSize, ReachingEnd: isReachingEnd } = usePaginatePosts('https://jsonplaceholder.typicode.com/posts');
  const { data: users, loading: isLoading, error } = useGetPosts('http://localhost:4000/user');

  if (isLoadingMore) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong!</h1>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://jsonplaceholder.typicode.com/posts" as="fetch"></link>
        <link rel="preload" href="http://localhost:4000/user" as="fetch"></link>
      </Head>

      {users.map((user: any) => (
        <>
          {user.title} {user.title} <p></p>
        </>
      ))}

      {posts.map((post: any) => (
        <div key={post}>
          <p className="font-medium">
            {post.id}.{post.title}
          </p>
          <p>{post.body}</p>
        </div>
      ))}
      <button disabled={isLoadingMore || isReachingEnd} onClick={() => setSize(size + 1)} >
        {isLoadingMore ? 'Loading...' : (isReachingEnd ? 'No more posts' : 'Load more')}
      </button>
    </>
  );
}