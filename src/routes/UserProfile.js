import { useLoaderData } from "react-router-dom";

// variables
const accessToken = localStorage.getItem("access_token");
const apiBaseUrl = "https://eleox-interview-api-7n5su.ondigitalocean.app";

export async function getPerson({params}) {
  const personRequestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const userResponse = await fetch(
    `${apiBaseUrl}/people/${params.id}`,
    personRequestOptions
  );
  const { person } = await userResponse.json();

  return person;

}

export default function UserProfile() {
  const user = useLoaderData();

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-t-lg rounded-b-lg">
      {user !== undefined ? (
        <div className="flex flex-col md:flex-row items-center px-6 py-6 border border-b-1 border-x-0">
          <div className="w-24 h-24 mr-3 rounded-full overflow-hidden">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
          </div>
          <div>
            <h1 className="text-3xl text-center md:text-left font-medium leading-6 text-gray-900 mt-4 md:mt-0">
              {user.first_name} {user.last_name}
            </h1>
            <p className="text-lg mt-2 text-gray-500 text-center md:text-left">{user.job_title}</p>
            <p className="text-md mt-3 text-gray-500 text-center md:text-left">
              Email:{" "}
              <a className="text-cyan-600" href={`mailto:${user.email}`}>
                {user.email}
              </a>
            </p>
          </div>
        </div>
      ) : (
        <p className="px-6 py-4">No user data found.</p>
      )}

      {user.comments !== undefined && user.comments.length ? (
        <ul>
          {user.comments.map((item, i) => {
            return (
              <li className="px-6 py-4 flex items-center" key={i}>
                <div>
                  <div className="rounded-full overflow-hidden w-10 h-10 mr-3">
                    <img src="http://placehold.jp/150x150.png" alt="" />
                  </div>
                </div>
                <div className="bg-slate-100 p-3 rounded-md">
                  <p>{item.comment}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="px-6 py-4">No comments found.</p>
      )}
    </div>
  );
}
