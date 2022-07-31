import { useRouter } from "next/router";

function SingleProduct({ product }) {
  const router = useRouter();

  /*
    If getStaticPaths fallback is true,
      Fallback Msg will be shown if the path is not generated by getStaticPaths() 
  */
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>{product.title}</h3>
      <h4>{"$" + product.price}</h4>
      <p>{product.description}</p>
    </div>
  );
}

export default SingleProduct;

/* using "getStaticProps()" to fetch data from API */
export async function getStaticProps(context) {
  const { params } = context;

  console.log(`Generating / Regenerating ${params.productId}`); // debug

  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 10, // revalidate after 10 seconds if data changes
  };
}

/* using "getStaticPaths()" to define possible values of dynamic route "productId" */
export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }], // pre-render page "products/1" at build time, others pages on request
    fallback: true,
  };
}