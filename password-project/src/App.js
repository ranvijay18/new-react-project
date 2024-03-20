import './App.css';
import CreatePassword from './components/CreatePassword/CreatePassword';
import SearchPassword from './components/SearchPassword/SearchPassword';
import SearchForm from './components/SearchForm/SearchForm';
import { useState, useContext } from 'react'; 
import PasswordContext from './store/password-context';

function App(props) {

  const [showForm, setShowForm] = useState(false);
  const [passLength, setPassLength] = useState(0);

  const showFormModal = () => {
    setShowForm(true);
  }

  const hideFormModal = () => {
    setShowForm(false);
  }

  const showPasswordLength = (length) =>{
    setPassLength(length);
  }

  const passwordCtx = useContext(PasswordContext);

  return (
    <div  className="App">
       <h1>Password Keeper</h1>
        <p>Total Passwords: {passLength+1}</p>
        <button onClick={showFormModal}>Add New Password</button>
        {showForm && <CreatePassword onHideForm = {hideFormModal}   passwordLength={showPasswordLength}/> }
      <br />
      <br />
      <SearchForm />
      <SearchPassword />
    </div>
  );
}

export default App;
