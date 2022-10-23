import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  console.log('UserProfile loader data!')
  return {
    id: params.id
  }
}

export default function UserProfile() {
  const {id} = useLoaderData()
  const accessToken = localStorage.getItem('access_token')
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getPerson() {
      const personRequestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${accessToken}`
          },
      }

      const userResponse = await fetch(`https://eleox-interview-api-7n5su.ondigitalocean.app/people/${id}`, personRequestOptions)
      const { person } = await userResponse.json()
      console.log(person)
      
      setUser(person)
    }

    getPerson();

  }, [])

  return (
    <div>
      <h1>{user.first_name} {user.last_name}</h1>

      {user.comments !== undefined && user.comments.length ? (
        user.comments.map((item, i) => {
          return <p key={i}>{item.comment}</p>
        })
      ) : (
        <p>No comments found</p>
      )}
    </div>
  )
}