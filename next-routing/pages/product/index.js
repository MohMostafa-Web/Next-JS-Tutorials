import Link from "next/link";

function Product({productId = 100}) {
  return (
    <div>
      <Link href="/">
        <a style={{ color: "blue" }}>Home</a>
      </Link>
      <h1>Products List</h1>
      {/* using "Link" to navigate to Nested Dynamic Route */}
      <ul>
        <li>
          <Link href="/product/1">
            <a style={{ color: "blue" }}>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href="/product/2">
            <a style={{ color: "blue" }}>Product 2</a>
          </Link>
        </li>
        {/* using "replace" prop to prevent user go back to the last page */}
        <li>
          <Link href="/product/3" replace>
            <a style={{ color: "blue" }}>Product 3</a>
          </Link>
        </li>
        {/* using prop "productId" inside "href" */}
        <li>
          <Link href={`/product/${productId}`}>
            <a style={{ color: "blue" }}>Product 3</a>
          </Link>
        </li>
        <li>Product ..</li>
      </ul>
    </div>
  );
}

export default Product;
