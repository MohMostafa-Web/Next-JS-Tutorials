/* [1] Import "Head" Component from Nextjs */
import Head from "next/head";

function About() {

  return (
    <>
    {/* [2] Use "Head" Component to specify metadata such as title, description, .. */}
    <Head>
      <meta name="description" content="This description for about page" />
      <title>About Page</title>
    </Head>
      <div className="content">
        <h2>About</h2>
      </div>
    </>
  );
}

export default About;
