function ArticlesList({ articles }) {
  return (
    <>
      <h2>List of News Articles</h2>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>
            {article.id}. {article.title} | {article.category}
          </h3>
        </div>
      ))}
    </>
  );
}

export default ArticlesList;

/* using "getServerSideProps()" to fetch data on every request and generate HTML Page */
export async function getServerSideProps() {
  /* [1] Get external data from API */
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  console.log("Pre-rendering News Articles List");

  /* [2] return Object of the the `props` key will be passed to the `ArticlesList` component */
  return {
    props: {
      articles: data,
    },
  };
}
