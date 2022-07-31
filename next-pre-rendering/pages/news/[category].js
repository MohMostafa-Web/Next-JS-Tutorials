function ArticlesListByCategory({ articles, category }) {
  return (
    <>
      <h2>
        List of News Articles "<i>{category}</i>"
      </h2>
      {articles.length !== 0 ? (
        articles.map((article) => (
          <div key={article.id}>
            <h3>
              {article.id}. {article.title} | {article.category}
            </h3>
            <p>{article.description}</p>
            <hr />
          </div>
        ))
      ) : (
        <h4 style={{ color: "red" }}>No matched Articles</h4>
      )}
    </>
  );
}

export default ArticlesListByCategory;

/* using "getServerSideProps()" to fetch data on every request and generate HTML Page */
export async function getServerSideProps(context) {
  // console.log(context); // debug
  const { params, req, res, query } = context;

  /* How to get cookies from request? */
  console.log(req.headers.cookie);

  /* How to set cookies from response? */
  res.setHeader("Set-Cookie", ["name=Mohamed"]);

  /* How to get query string? */
  console.log(query);

  /* [1] Get external data from API */
  const response = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await response.json();

  console.log(`Pre-rendering News Articles for ${params.category}`);

  /* [2] return Object of the the `props` key will be passed to the `ArticlesListByCategory` component */
  return {
    props: {
      articles: data,
      category: params.category,
    },
  };
}
