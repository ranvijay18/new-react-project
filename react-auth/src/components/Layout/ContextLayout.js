import { Outlet } from 'react-router-dom';
import TokenProvider from '../../context/TokenProvider';

const ContextLayout = () => {
  return (
    <TokenProvider>
      <Outlet />
    </TokenProvider>
  );
};

export default ContextLayout;