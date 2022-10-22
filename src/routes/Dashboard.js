import { useLoaderData } from "react-router-dom"

export default function Dashboard() {

  const users = useLoaderData();

  return (
    <div>
      <h1>This is the Dashboard!</h1>
      {users.length ? (
        <ul>
          {users.map(user => <li>{user}</li>)}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  )
}