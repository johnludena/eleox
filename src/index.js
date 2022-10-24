import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/Root";
import LoginScreen from "./routes/Login";
import Dashboard, {action as newUserAction, getPeople} from "./routes/Dashboard";
import UserProfile, { getPerson } from "./routes/UserProfile";
import { deleteUser } from "./components/UserCard";
import ErrorPage from "./routes/404";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginScreen />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: getPeople,
        action: newUserAction
      },
      {
        path: "/user/:id",
        element: <UserProfile />,
        loader: getPerson
      },
      {
        path: "/user/:id/destroy",
        action: deleteUser
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
