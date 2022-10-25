import { Link, Form, redirect } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

// variables
const apiBaseUrl = "https://eleox-interview-api-7n5su.ondigitalocean.app";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

export async function deleteUser({ params }) {

  const accessToken = localStorage.getItem("access_token");

  console.log("Params:", params);
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(
    `${apiBaseUrl}/people/${params.id}`,
    requestOptions
  );
  const json = await response.json();
  console.log(json);

  return redirect("/dashboard");
}

export default function UserCard(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const user = props.data;
  return (
    <li className="flex flex-col items-center justify-between px-6 py-4 hover:bg-slate-50 md:flex-row">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-12 h-12 mr-3 rounded-full overflow-hidden">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        </div>
        <div>
          <h2 className="text-center text-lg font-medium leading-6 text-gray-900 mt-3 md:mt-0 md:text-left">
            {user.first_name} {user.last_name}
          </h2>
          <p className="text-md text-gray-500">{user.job_title}</p>
        </div>
      </div>

      <div className="flex items-center w-full mt-4 md:mt-0 md:w-auto">
        <Link
          to={`/user/${user.id}`}
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3 md:mr-0 md:w-auto md:text-sm"
        >
          View Profile
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex w-full justify-center rounded-md border border-red-700 px-4 py-2 text-base font-medium text-red-700 hover:text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 md:ml-3 md:w-auto md:text-sm"
        >
          Delete
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="p-4 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Delete user
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this user? This action cannot be
              undone.
            </p>
          </div>
        </div>

        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <Form
            method="post"
            action={`/user/${user.id}/destroy`}
            onSubmit={() => setIsOpen(false)}
          >
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Delete User
            </button>
          </Form>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </li>
  );
}
