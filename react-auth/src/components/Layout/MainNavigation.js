import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useEffect } from 'react';


const MainNavigation = () => {

  const navigate = useNavigate()

  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    if(isLoggedIn){
      setTimeout(() => {
        localStorage.removeItem('token');
      },30000)
    }else{
      navigate('/auth')
    }
    
  },[isLoggedIn,navigate])
   


const handleLogout = () =>{
  // tokenCtx.logout();
  localStorage.removeItem('token');
  navigate('/auth')
 
}

   
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
          {!isLoggedIn ? 
          <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          </ul> :
          <ul>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li> 
          </ul>}
          

      </nav>
    </header>
  );
};

export default MainNavigation;
