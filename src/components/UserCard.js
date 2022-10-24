import { Link, Form, redirect } from 'react-router-dom'

// variables
const accessToken = localStorage.getItem('access_token')
const apiBaseUrl = 'https://eleox-interview-api-7n5su.ondigitalocean.app'

export async function deleteUser({params}) {
  console.log('Params:', params)
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${accessToken}`
    }
  }

  const response = await fetch(`${apiBaseUrl}/people/${params.id}`, requestOptions)
  const json = await response.json()
  console.log(json)

  return redirect('/dashboard')


  
}

export default function UserCard(props) {
  const user = props.data
  return (
    <div className="flex my-3">
      <div className="mr-3">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      </div>
      
      <div>
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.job_title}</p>
        <Form method="post" action={`/user/${user.id}/destroy`}>
          <button type="submit">Delete</button>

        </Form>
        <Link to={`/user/${user.id}`}>View Profile</Link>
      </div>
    </div>
  )
}