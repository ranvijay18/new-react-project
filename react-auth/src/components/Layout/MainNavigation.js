import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import TokenContext from '../../context/token-context';

const MainNavigation = () => {
  const tokenCtx = useContext(TokenContext);
  const navigate = useNavigate()

const handleLogout = () =>{

  tokenCtx.logout();
  navigate('/auth')
}

   
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
          {!tokenCtx.isLogin ? 
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
