import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TokenProvider from './context/TokenProvider';
import ContextLayout from './components/Layout/ContextLayout';

function App() {
  return (
    <Layout>
      <TokenProvider>
      <Routes>
        <Route element={<ContextLayout />}>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' element={ <UserProfile />} />
        </Route>
      </Routes>
      </TokenProvider>
    </Layout>
  );
};

export default App;
