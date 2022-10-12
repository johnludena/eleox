import {useState} from 'react'

function LoginScreen() {
  const [username, setUsername] = useState('interview')
  const [password, setPassword] = useState('eleox')

  console.log(username, password)

  async function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  return (
    <div className="flex flex-col max-w-sm mx-auto h-screen justify-center">
      <h1 className="text-center text-black dark:text-white text-4xl mb-5">
        Welcome!
      </h1>
      <p className="text-black dark:text-white text-lg mb-5 text-center">
        You don't know it yet, but there's some good stuff on the other side.
      </p>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="p-2 mb-3"
          type="text"
          placeholder="Your username"
          defaultValue={username}
        />
        <input
          className="p-2 mb-3"
          type="password"
          placeholder="Your password"
          defaultValue={password}
        />

        <input
          type="submit"
          className="p-2 bg-violet-500 hover:bg-violet-600 text-white rounded-md "
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginScreen;
