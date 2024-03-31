import { useContext, useRef,  } from 'react';
import classes from './ProfileForm.module.css';
import TokenContext from '../../context/token-context';
import { useNavigate } from 'react-router-dom';


const ProfileForm = () => {
  const newPasswordRef = useRef();
  const tokenCtx = useContext(TokenContext);
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
      e.preventDefault();
      const newPassword = newPasswordRef.current.value;

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAWnTSSM62-LxPcuSBx2HBV5wVcYcp6138',{
        method:'POST',
        body:JSON.stringify({ 
          idToken: tokenCtx.token,
          password: newPassword,
          returnSecureToken: false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.ok){
          res.json().then(data => {
            tokenCtx.login(data.idToken);
            navigate('/auth')
          })
        }else{
          return res.json().then(data => alert(data.error.message))
        }
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
