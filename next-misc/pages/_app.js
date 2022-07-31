import Head from "next/head";  // import "Head" Component from Nextjs

/* using Relative Import (by default) */
// import Header from "../components/Header"; // import layout "Header"
// import Footer from "../components/Footer"; // import layout "Footer"
// import "../styles/globals.css";
// import "../styles/layout.css"; // import layout css file

/* using Absolute Import */
import Header from "@comps/Header"; // import layout "Header"
import Footer from "@comps/Footer"; // import layout "Footer"
import "styles/globals.css";
import "styles/layout.css"; // import layout css file

function MyApp({ Component, pageProps }) {
  /* Check if there is customized layout to render */
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      {/* Use "Head" Component to specify metadata such as title, description, .. */}
      <Head>
        <meta name="description" content="This description for the website" />
        <title>Nextjs App Title</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
