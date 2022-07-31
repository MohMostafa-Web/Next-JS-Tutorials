function News({ data }) {
  return (
    <div className="content">
      <h2>{data}</h2>
    </div>
  );
}

export default News;

/* 
  using Static Generation to create a page at build-time oncetime
    but it will run everytime in "Preview Mode"
*/
export async function getStaticProps(context) {

  console.log("Running getStaticProps");
  console.log(context.previewData); // {user: "Mohamed"}

  return {
    props: {
      data: context.preview // check if Preview Mode enabled
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}
