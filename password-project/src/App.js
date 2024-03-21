import './App.css';
import CreatePassword from './components/CreatePassword/CreatePassword';
import AllPassword from './components/AllPasswords/AllPassword';
import SearchForm from './components/SearchForm/SearchForm';
import { useState } from 'react'; 
import PasswordProvider from './store/PasswordProvider';
import Head from './components/UI/Head';
import EditPassword from './components/CreatePassword/EditPassword';

function App(props) {

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);


  const showFormModal = () => {
    setShowForm(true);
  }

  const hideFormModal = () => {
    setShowForm(false);
  }

  const hideEditForm = () => {
    setShowEditForm(false);
  }

  const onShowEditForm = () => {
    setShowEditForm(true);
  }

  return (
    <div  className="App">
    <PasswordProvider>
       <Head />
        <button onClick={showFormModal}>Add New Password</button>
        {showForm && <CreatePassword onHideForm = {hideFormModal}/>}
        {showEditForm && <EditPassword onHideForm = {hideEditForm} />}
      <br />
      <br />
      <SearchForm />
      <AllPassword showEditForm={onShowEditForm}/>
      </PasswordProvider>
    </div>
  );
}

export default App;
