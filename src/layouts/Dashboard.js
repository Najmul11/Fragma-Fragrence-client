import React,{useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import useTitle from '../hooks/useTitle';
import Nav from '../pages/Shared/Nav/Nav';

const Dashboard = () => {
    useTitle('dashboard')
    const {user}=useContext(AuthContext)
    const [isSeller]=useSeller(user.email)
    const [isAdmin]=useAdmin(user.email)

    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>                
                </div> 
                <div className="drawer-side dark:bg-black ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content dark:text-gray-400">
                        <li><Link to={'/dashboard'} className="font-semibold text-sm uppercase">My orders</Link></li>
                        {
                            isSeller && <>
                                <li><Link to={'/dashboard/addproduct'} className="font-semibold text-sm uppercase">Add a product</Link></li>
                                <li><Link to={'/dashboard/myproducts'} className="font-semibold text-sm uppercase">My products</Link></li>
                                <li><Link to={'/dashboard/mybuyers'} className="font-semibold text-sm uppercase">My buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to={'/dashboard/allsellers'} className="font-semibold text-sm uppercase">All sellers</Link></li>
                                <li><Link to={'/dashboard/allbuyers'} className="font-semibold text-sm uppercase">All buyers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;