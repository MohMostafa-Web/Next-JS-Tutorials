import Link from "next/link";
/* [1] import Methods "useSession", "signIn", "signOut" from "NextAuth" */
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  /* [2] using "useSession" to get "data", "status" */
  const { data, status } = useSession();

  // console.log({data, status}); // debug

  return (
    /* using "status" to control clasess "loading" or "loaded" */
    <nav className={`main-nav ${status === "loading" ? "loading" : "loaded"}`}>
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className="links">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {/* Check if status is authenticated, to show "dashboard" link */}
        {status === "authenticated" && (
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        {/* 
          [3] Toggle between "Sign in" and "Sign out" Btns
              - Check if data is null and status is unauthenticated, to show "Sign in" Btn 
              - Check if data is Session and status is authenticated, to show "Sign out" Btn 
        */}
        {!data && status === "unauthenticated" && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  // signIn();
                  signIn("github");
                }}
              >
                Sign in
              </a>
            </Link>
          </li>
        )}
        {data && status === "authenticated" && (
          <li>
            <span>Hello, {data?.user.name.split(" ")[0]}</span>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
