import "../styles/globals.css";
import Navbar from "../components/Navbar"; // import Navbar Comp.
import "../components/Navbar.css"; // import Navbar CSS file
import { SessionProvider } from "next-auth/react" // import "SessionProvider" from NextAuth

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    /* Wrapping MyAPP with "<SessionProvider>" providing "session" prop */
    <SessionProvider session={session}>
      {/* Main Navbar */}
      <Navbar />
      {/* Component renders Pages */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
