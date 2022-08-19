import { Navigate } from 'react-router-dom';
import { isAuthenticated } from 'api/auth';

const AdminRoutes = ({children}) => {

  if (!(isAuthenticated() && isAuthenticated().admin.role === 2)) {
    return <Navigate to="/" />
  }
  
  return children;
};

export default AdminRoutes;