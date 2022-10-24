import { useEffect, useState } from "react"
import { redirect, useLoaderData } from "react-router-dom"
import UserCard from "../components/UserCard"
import NewUserModal from "../components/NewUserModal";

// variables
const accessToken = localStorage.getItem('access_token')
const apiBaseUrl = 'https://eleox-interview-api-7n5su.ondigitalocean.app'

export async function action({ request, params }) {
  const formData = await request.formData();
  const newUserData = Object.fromEntries(formData);

  const postRequestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${accessToken}`
    },
    body: JSON.stringify(newUserData)
  }

  const response = await fetch(`${apiBaseUrl}/people`, postRequestOptions)
  const json = await response.json()
  console.log(json)
  
}

export async function getPeople() {
  const peopleRequestOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${accessToken}`
      },
  }

  const peopleResponse = await fetch(`${apiBaseUrl}/people`, peopleRequestOptions)
  const { people } = await peopleResponse.json()

  console.log('people:', people)
  
  return people;
}


export default function Dashboard() {

  const users = useLoaderData();

  const [ modalIsOpen, setIsOpen ] = useState(false);

  function handleAddUser(e){
    setIsOpen(true)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1>Dashboard</h1>
      <button onClick={handleAddUser}>Add User</button>
      {users && users.length ? (
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