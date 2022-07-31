import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const productId = router.query.productId;

  return <div>
    <h2>Reviews List for Product {productId}</h2>
    <ul>
      <li>Review 1</li>
      <li>Review 2</li>
      <li>Review 3</li>
    </ul>
  </div>;
}

export default Review;
