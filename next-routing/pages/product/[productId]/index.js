/* import Method "useRouter()" from Next */
import { useRouter } from "next/router";

function ProductDetails() {
  /* using useRouter() to get dynamicRoute value */
  const router = useRouter();
  const productId = router.query.productId;

  return <h2>Details of Product {productId}</h2>;
}

export default ProductDetails;
