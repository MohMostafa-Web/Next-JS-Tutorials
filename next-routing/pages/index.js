import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Your order is placing");
    /* using "router.push()" to add new url in the history stack */
    router.push("/product");

    /* using "router.replace()" to replace the current url with the new one in the history stack */
    // router.replace("/product");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/blog">
          <a style={{ color: "blue" }}>Blog</a>
        </Link>{" "}
        <Link href="/product">
          <a style={{ color: "blue" }}>Products</a>
        </Link>
      </nav>
      {/* Click button to navigate to the Product Page */}
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
