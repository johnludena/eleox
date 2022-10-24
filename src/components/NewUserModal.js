import {Form } from "react-router-dom"
import { useState } from "react";
import Modal from "react-modal"

// ADA: Set 'aria-hidden="true" on #root app container while modal is active
Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function NewUserModal(props){

  const [form, setForm] = useState({
    firstName: 'John',
    lastName: 'Ludena',
    email: 'johnludena@gmail.com',
    jobTitle: 'Senior Front-end Developer',
    avatar: ''
  })

  function closeModal(){
    props.setIsOpen(false)
  }

  function handleSubmission(e) {
    props.setIsOpen(false)
  }
  

 return (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal">
    
    <button onClick={closeModal}>close</button>

    <p>This is some content inside the modal.</p>

    <Form method="post" className="flex flex-col" onSubmit={handleSubmission}>
      <input type="text" name="first_name" placeholder="First name" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
      <input type="text" name="last_name" placeholder="Last name" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})}  />
      <input type="email" name="email" placeholder="Email addresss" value={form.email} onChange={e => setForm({...form, email: e.target.value})}  />
      <input type="text" name="job_title" placeholder="Job Title" value={form.jobTitle} onChange={e => setForm({...form, jobTitle: e.target.value})}  />
      <input type="text" name="avatar" placeholder="Avatar Image URL" value={form.avatar} onChange={e => setForm({...form, avatar: e.target.value})}  />
      <input type="submit" value="Submit" />
    </Form>
  </Modal>
  )
}