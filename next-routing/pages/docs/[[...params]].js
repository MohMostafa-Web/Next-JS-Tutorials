import { useRouter } from "next/router";

function Doc() {
  /* using "useRouter()", "router.query" to get array of params */
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params); // debug

  if (params.length === 2) { // Check if docs has two Nested Routes "Segements"
    return <h2>Docs for {params[0]} {params[1]}</h2>;
  } else if (params.length === 1) { // Check if docs has one Nested Route "Segement"
    return <h2>Docs for {params[0]}</h2>;
  }

  return <h1>Docs Home Page</h1>; // In Case of (params.length > 2 or params.length == 0)
}

export default Doc;
