import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header'
import { authActions } from './store';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
 
  return (
    <>
    <Header />
    {isAuthenticated && <Auth/>}
    <Counter />
    </>
  );
}

export default App;
