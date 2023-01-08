import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
   const {user, loading}=useContext(AuthContext)
   const location = useLocation();

    if (user) {
        return children
    }
    if (loading) {
        return <div className='flex justify-center h-screen items-center'><progress className="bg-orange-500 progress w-56 "></progress></div>
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;   