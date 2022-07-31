function User({ user }) {
  return (
    <>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </>
  );
}

export default User;
