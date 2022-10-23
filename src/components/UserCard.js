import { Link } from 'react-router-dom'

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
        <button>Delete</button>
        <br />
        <Link to={`/user/${user.id}`}>View Profile</Link>
      </div>
    </div>
  )
}