import { useContext } from 'react';
import './AllPassword.css';
import PasswordContext from '../../store/password-context';

const AllPassword = (props) => {

    const passwordCtx = useContext(PasswordContext);

    const handleDelete = (id) => {
        passwordCtx.deletePassword(id);
   }

   const handleEdit = (id) => {
    passwordCtx.editPassword(id);
    props.showEditForm(true);
   }

 

    return(
        <div className='passwords'>
        <h1>All Passwords: </h1>
        <ul>
        {passwordCtx.passwords.map((ele, index) => {
                return  <li key={index}>
                    {ele.title}: {ele.password}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                </li>
             })}
        </ul>
        </div>
    )
}


export default AllPassword;