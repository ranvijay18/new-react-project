import "./CreatePassword.css"
import Modal from "../UI/Modal";
import PasswordProvider from "../../store/PasswordProvider";
import { useState } from "react";

const CreatePassword = (props) => {

    const [passwords, setPasswords] = useState([]);

     const handleSubmit = (e) => {
        e.preventDefault();

        setPasswords(preValue => {
            return [ ...preValue , {title: e.target.title.value, password: e.target.password.value}]
        })

        props.passwordLength(passwords.length);

     }


      return(
        <Modal onClose={props.onHideForm}>
            <PasswordProvider onAdd={passwords}>
            <form className="password-form" onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" />
                <br />
                <br />
                <label>Password: </label>
                <input type="text" name="password" />
                <br />
                <br /> 
                <button type="submit">Add</button>
                <button className="close-btn"  onClick={props.onHideForm}>Close</button>
            </form>
            </PasswordProvider>
        </Modal>
    
      )
}


export default CreatePassword;