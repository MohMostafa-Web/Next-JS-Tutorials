import { useRouter } from "next/router";

function house() {
  /* using "useRouter()", "router.query" to get array of rangePrices */
  const router = useRouter();
  const { rangePrices = [] } = router.query;

  console.log(rangePrices); // debug

  if (rangePrices.length === 2) { // Check if there is two Nested Routes for min & max prices 
    return <h2>Houses from {"$" + rangePrices[0]} to {"$" + rangePrices[1]}</h2>;
  }

  return <h1>Houses Home Page</h1>;
}

export default house;
