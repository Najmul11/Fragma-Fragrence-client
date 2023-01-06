import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';



const AdminRoute = ({children}) => {
    const {user, loading,logout}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]=useAdmin(user?.email)
   const location = useLocation();

    if (user && isAdmin) {
        return children
    }
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    return logout().then(res=>{<Navigate to="/login" state={{from: location}} replace></Navigate>}).catch(err=>{})
};

export default AdminRoute; 