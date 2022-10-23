import Modal from "react-modal"

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

  function closeModal(){
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

    <form className="flex flex-col">
      <input type="text" name="first_name" placeholder="First name" />
      <input type="text" name="last_name" placeholder="Last name" />
      <input type="email" name="email" placeholder="Email addresss" />
      <input type="text" name="job_title" placeholder="Job Title" />
      <input type="text" name="avatar" placeholder="Avatar Image URL" />
    </form>
  </Modal>
  )
}