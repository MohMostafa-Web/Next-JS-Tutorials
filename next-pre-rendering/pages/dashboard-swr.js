import useSWR from "swr"; // import useSWR from "swr" package

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  /* using "useSWR()" to fetch client-side data */
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return <h2>Failed to fetch data</h2>;
  if (!data) return <h2>...Loading</h2>;
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts: {data.posts}</h3>
      <h3>Likes: {data.likes}</h3>
      <h3>Followers: {data.followers}</h3>
      <h3>Following: {data.following}</h3>
    </div>
  );
}

export default DashboardSWR;
