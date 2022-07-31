import User from "../components/user";

function UsersList({ users }) {
  return (
    <div>
      <h2>List of users</h2>
      {users.map((u) => (
        <div key={u.id}>
          {/* use Component "User" */}
          <User user={u} />
        </div>
      ))}
    </div>
  );
}

export default UsersList;

/* using "getStaticProps()" to fetch data from API */
export async function getStaticProps() {
  /* [1] Get external data from API */
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  /* [2] return Object of the `props` key will be passed to the `UsersList` component */
  return {
    props: {
      users: data,
    },
  };
}
