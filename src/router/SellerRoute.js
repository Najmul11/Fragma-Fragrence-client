import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';



const SellerRoute = ({children}) => {
    const {user, loading, logout}=useContext(AuthContext)
    const [isSeller,isSellerLoading]=useSeller(user?.email)
   const location = useLocation();

    if (user && isSeller) {
        return children
    }
    if (loading || isSellerLoading) {
        return <div className='flex justify-center h-screen items-center'><progress className=" progress w-56 "></progress></div>
    }
    return logout().then(res=>{<Navigate to="/login" state={{from: location}} replace></Navigate>}).catch(err=>{})
    
};

export default  SellerRoute;