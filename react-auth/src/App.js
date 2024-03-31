import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TokenProvider from './context/TokenProvider';



function App() {
  return (

    <TokenProvider>
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/profile' element={<UserProfile/>} />
      </Routes>
    </Layout>
    </TokenProvider>
    
  );
};

export default App;
