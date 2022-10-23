import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import UserCard from "../components/UserCard"
import NewUserModal from "../components/NewUserModal";

export default function Dashboard() {

  const [users, setUsers ] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const accessToken = localStorage.getItem('access_token')
    console.log(accessToken)

    async function getPeople() {
      const peopleRequestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${accessToken}`
          },
      }

      const peopleResponse = await fetch(`https://eleox-interview-api-7n5su.ondigitalocean.app/people`, peopleRequestOptions)
      const { people } = await peopleResponse.json()
      console.log(people)
      
      setUsers(people)
    }

    getPeople();

  }, [])

  function handleAddUser(e){
    setIsOpen(true)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1>Dashboard</h1>
      <button onClick={handleAddUser}>Add User</button>
      {users.length ? (
        <ul>
          {users.map((user, i) => <UserCard data={user} key={i} />)}
        </ul>
      ) : (
        <p>No users found</p>
      )}
      <NewUserModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      
    </div>
  )
}