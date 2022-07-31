import { useRouter } from "next/router";
import Head from "next/head"; /* [1] Import "Head" Component from Nextjs */

function SingleBlog({ id, title, desc }) {
  console.log(process.env.DB_USER); // undefined
  console.log(process.env.NEXT_PUBLIC_TEST_NAME); // Testing

  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {/* [2] Use "Head" Component to specify metadata such as title, description, .. */}
      <Head>
        <meta name="description" content={desc} />
        <title>{title}</title>
      </Head>
      <div className="content">
        <h2>Blog {id}</h2>
      </div>
    </>
  );
}

export default SingleBlog;

/* using Server-side Rendering "SSR" */
// export async function getServerSideProps(context) {
//   const { blogId } = context.params;

//   return {
//     props: {
//       id: blogId,
//       title: `Blog ${blogId} Title`,
//       desc: `Blog ${blogId} Description`,
//     },
//   };
// }

/* using Static Generation "SG" */
export async function getStaticProps(context) {
  const { blogId } = context.params;

  console.log(process.env.DB_USER); // Mohamed
  console.log(process.env.NEXT_PUBLIC_TEST_NAME); // Testing

  return {
    props: {
      id: blogId,
      title: `Blog ${blogId} Title`,
      desc: `Blog ${blogId} Description`,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogId: "1" } },
      { params: { blogId: "2" } },
      { params: { blogId: "3" } },
    ],
    fallback: true,
  };
}
