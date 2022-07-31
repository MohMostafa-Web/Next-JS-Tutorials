import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setIsLoading(false);
      setDashboardData(data);
    }
    fetchDashboardData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>Dashboard</h2>
          <h3>Posts: {dashboardData.posts}</h3>
          <h3>Likes: {dashboardData.likes}</h3>
          <h3>Followers: {dashboardData.followers}</h3>
          <h3>Following: {dashboardData.following}</h3>
        </div>
      )}
    </>
  );
}

export default Dashboard;
