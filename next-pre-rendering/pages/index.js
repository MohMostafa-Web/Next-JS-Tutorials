import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Nextjs Pre-rendering</h1>
      <Link href="/users">
        <a>users</a>
      </Link>
      {" "}
      <Link href="/posts">
        <a>posts</a>
      </Link>
    </>
  );
}

export default Home;
