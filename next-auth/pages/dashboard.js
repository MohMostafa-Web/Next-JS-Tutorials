/* [1] import Methods "useSession", "signIn" from "NextAuth" */
import { useSession, signIn } from "next-auth/react";

function Dashboard() {
  const { data, status } = useSession();

  // console.log({data, status}); // debug

  /* [2] using "status" from "useSession()" to secure the page */
  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <h2>Access denied</h2>
        <button type="button" onClick={() => signIn("github")}>
          Sign in with GitHub
        </button>
      </>
    );
  }

  return <h2>Dashboard Page</h2>;
}

export default Dashboard;
