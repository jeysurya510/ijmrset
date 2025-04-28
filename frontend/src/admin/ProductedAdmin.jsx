import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdmin = () => {
  const token = Cookies.get('Admin_Token');

  if (!token) {
    return <Navigate to="/adminpage/Authorization" replace />;
  }

  return <Outlet />;
};

export default ProtectedAdmin;
