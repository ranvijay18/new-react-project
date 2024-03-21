import PasswordContext from "./password-context";
import { useState } from "react";



const PasswordProvider = (props) => {

    const [passwordDetails, setPasswordDetails] = useState([]);

    const [editPass, setEditPass] = useState([]);

    const handleChange = (password) => {

        if(passwordDetails.length > 0){
            const editedPassword = passwordDetails.filter((ele) => ele.title !== password.title);
            setPasswordDetails(editedPassword);
        }
     setPasswordDetails(prev => {
          return [...prev, password];
     });
    }

    const handleDelete =(id) => {
        const removePassword = passwordDetails.filter((ele,index) => {
            return index !== +id;
        })
        setPasswordDetails(removePassword);
    }

    const handleEdit = (id) => {
        const editPassword = passwordDetails.filter((ele,index) => {
            return index === +id;
        })
        setEditPass(editPassword);
    }

    

    const passwordContext = {
       passwords: passwordDetails,
        addPassword: handleChange,
        deletePassword: handleDelete,
        editPassword: handleEdit,
        updatePassword: editPass
    }
    return(
        <PasswordContext.Provider value={passwordContext}>
               {props.children}
        </PasswordContext.Provider>
    )
}

export default PasswordProvider;