import type { NextPage } from 'next'

const Ssr: NextPage = ({ posts }: any) => {

  return (
    <>
      {posts.map((post: any) => (
        <div key={post}>
          <p className="font-medium">
            {post.id}.{post.title}
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

//ssg
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=4')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default Ssr
