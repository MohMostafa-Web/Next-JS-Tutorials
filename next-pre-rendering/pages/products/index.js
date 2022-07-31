function ProductsList({ products }) {
  return (
    <>
      <h2>Products List</h2>
      {products.map((prod) => (
        <div key={prod.id}>
          <h2>
            {prod.id}. {prod.title} costs {"$" + prod.price}
          </h2>
          <hr />
        </div>
      ))}
    </>
  );
}

export default ProductsList;

/* using "getStaticProps()" to fetch data from API */
export async function getStaticProps() {
  console.log("Generating / Regenerating ProductList"); // debug

  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30, // revalidate after 30 seconds if data changes
  };
}
