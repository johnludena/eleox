import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserCard from "../components/UserCard";
import NewUserModal from "../components/NewUserModal";

// variables
const apiBaseUrl = "https://eleox-interview-api-7n5su.ondigitalocean.app";

export async function action({ request, params }) {
  const accessToken = localStorage.getItem("access_token");

  const formData = await request.formData();
  const newUserData = Object.fromEntries(formData);

  const postRequestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(newUserData),
  };

  const response = await fetch(`${apiBaseUrl}/people`, postRequestOptions);
  const newUserObj = await response.json();
  return newUserObj
  // console.log('New user obj:', newUserObj);
}

export async function getPeople() {
  const accessToken = localStorage.getItem("access_token");
 
  const peopleRequestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const peopleResponse = await fetch(
    `${apiBaseUrl}/people`,
    peopleRequestOptions
  );
  const { people } = await peopleResponse.json();

  console.log("people:", people);

  return people;
}

export default function Dashboard() {
  const users = useLoaderData();

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleAddUser(e) {
    setIsOpen(true);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-t-lg rounded-b-lg">
      <div className="flex flex-col justify-between items-center md:flex-row px-6 py-4 border border-b-1 border-x-0">
        <h1 className="text-2xl font-medium leading-6 text-gray-900 mb-3">Dashboard</h1>
        <button
          onClick={handleAddUser}
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-violet-500 hover:bg-violet-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Add User
        </button>
      </div>
      {users && users.length ? (
        <ul className="divide-y">
          {users.map((user, i) => (
            <UserCard data={user} key={i} />
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
      <NewUserModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
