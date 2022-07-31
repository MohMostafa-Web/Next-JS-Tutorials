import Link from "next/link";

function PostsList({ posts }) {
  return (
    <>
      <h2>Posts List</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {/* adding prop "passHref" to "Link" Component if we have a child not anchor tag "<a>" */}
          <Link href={`/posts/${post.id}`} passHref>
            <h3 style={{ width: "fit-content", cursor: "pointer" }}>
              {post.id}. {post.title}
            </h3>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export default PostsList;

/* using "getStaticProps()" to fetch data from API */
export async function getStaticProps() {
  /* [1] Get external data from API */
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  /* [2] return Object of the `props` key will be passed to the `PostsList` component */
  return {
    props: {
      // posts: data.slice(0, 3),
      posts: data,
    },
  };
}
