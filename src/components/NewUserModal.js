import { Form } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

// ADA: Set 'aria-hidden="true" on #root app container while modal is active
Modal.setAppElement(document.getElementById("root"));

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

export default function NewUserModal(props) {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Ludena",
    email: "johnludena@gmail.com",
    jobTitle: "Senior Front-end Developer",
    avatar: "",
  });

  function closeModal() {
    props.setIsOpen(false);
  }

  function handleSubmission(e) {
    props.setIsOpen(false);
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Form method="post" onSubmit={handleSubmission}>
        <div className="p-4 sm:px-6 flex flex-col">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add new user
          </h3>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500">
              Please fill in all fields below.
            </p>
          </div>

          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="first_name"
            placeholder="First name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="p-2 mb-3 bg-slate-100"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="last_name"
            placeholder="Last name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="p-2 mb-3 bg-slate-100"
          />
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email addresss"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-2 mb-3 bg-slate-100"
          />
          <label htmlFor="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            type="text"
            name="job_title"
            placeholder="Job Title"
            value={form.jobTitle}
            onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
            className="p-2 mb-3 bg-slate-100"
          />
          <label htmlFor="avatar">Avatar Image URL</label>
          <input
            id="avatar"
            type="text"
            name="avatar"
            placeholder="Avatar Image URL"
            value={form.avatar}
            onChange={(e) => setForm({ ...form, avatar: e.target.value })}
            className="p-2 mb-3 bg-slate-100"
          />
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="submit" className="inline-flex w-full justify-center rounded-md border border-transparent bg-violet-500 hover:bg-violet-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Create New User</button>
          <button onClick={closeModal} className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div>
      </Form>
    </Modal>
  );
}
