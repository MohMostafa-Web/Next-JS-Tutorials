import { getSession, useSession } from "next-auth/react";

function Blog({ dataProp }) {
  // console.log(dataProp); // debug

  /* No need to use "dataProp" if you used "data" from "useSession()" */
  const { data } = useSession();
  console.log(data); // debug

  return (
    <>
      <h2>Blog Page</h2>
      <h3>{dataProp}</h3>
    </>
  );
}

export default Blog;

/* using SSR to send props to the component "Blog" */
export async function getServerSideProps(context) {
  /* using "getSession()" with passing arg "context" to determine if user is logged in */
  const session = await getSession(context);

  /* 
    Securing Page in Server-side:
      by Checking if session is null to redirect user to signin path 
  */
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session, // Adding "session" as prop to prevent flicker effect in "Blog" page (No need to check everytime if user is logged in or not)
      dataProp: session
        ? "List of personalized blogs"
        : "List of free public blogs",
    },
  };
}
