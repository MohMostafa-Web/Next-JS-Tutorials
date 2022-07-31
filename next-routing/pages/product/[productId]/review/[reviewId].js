import { useRouter } from "next/router";

function ReviewDetails() {
  const router = useRouter();
  /* Destructure router.query */
  const { productId, reviewId } = router.query;

  return (
    <h2>
      Review {reviewId} for Product {productId}
    </h2>
  );
}

export default ReviewDetails;
