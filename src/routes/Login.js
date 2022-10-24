import {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'

function LoginScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    const apiBaseUrl = 'https://eleox-interview-api-7n5su.ondigitalocean.app'
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username, 
            "password": password
        })
    }

    const response = await fetch(`${apiBaseUrl}/login`, requestOptions)
    const data = await response.json()

    localStorage.setItem('access_token', data.access_token)

    navigate('/dashboard')
  }

  return (
    <div className="flex flex-col max-w-sm mx-auto h-screen justify-center">
      <h1 className="text-center text-black text-4xl mb-5">
        Welcome!
      </h1>
      <p className="text-black text-lg mb-5 text-center">
        You don't know it yet, but there's some good stuff on the other side.
      </p>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="p-2 mb-3 bg-slate-100"
          type="text"
          placeholder="Your username"
          defaultValue={username}
          onChange={event => setUsername(event.target.value)}
          required
        />
        <input
          className="p-2 mb-3 bg-slate-100"
          type="password"
          placeholder="Your password"
          defaultValue={password}
          onChange={event => setPassword(event.target.value)}
          required
        />

        <input
          type="submit"
          className="p-2 bg-violet-500 hover:bg-violet-600 text-white rounded-md cursor-pointer"
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginScreen;
