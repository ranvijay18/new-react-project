import "./CreatePassword.css"
import Modal from "../UI/Modal";
import { useContext } from "react";
import PasswordContext from "../../store/password-context";




const CreatePassword = (props) => {


    const passwordCtx = useContext(PasswordContext);

 
    

     const handleSubmit = (e) => {
        e.preventDefault();
         const password = {title: e.target.title.value, password: e.target.password.value};
        passwordCtx.addPassword(password);
       
     }


      return(

        <Modal onClose={props.onHideForm}>
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
    </Modal>
      
  )
}


export default CreatePassword;