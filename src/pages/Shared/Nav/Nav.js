import React, {useContext} from "react";
import {NavLink,Link} from "react-router-dom"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import {BsWhatsapp} from "react-icons/bs";
import { AuthContext } from "../../../contexts/AuthProvider"
import { DarkContext}  from "../../../App";
import './Nav.css'
import brandLogo from '../../../assets/images/brand_logo.png'

const Nav = () => {
  const {darkMode, setDarkMode}=useContext(DarkContext)
    const handleDarkMode=()=>{
        setDarkMode(!darkMode)
    }

    const {user, logout}=useContext(AuthContext)

    const handleLogout=()=>{
        logout()
        .then(result=>{})
        .catch(error=>{})
    }
  return (
    <div className=" text-dark mb-0 dark:bg-black  dark:text-gray-300">
        <div className="container mx-auto py-6">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          <li className="px-3"><Link to='/' className="rounded-md btn btn-ghost">Home</Link></li>
                          <li className="px-3"><NavLink to='/services' className='btn btn-ghost rounded-md'>Services</NavLink></li>
                          <li className="px-3"><NavLink to='/blog' className='btn btn-ghost rounded-md'>Blog</NavLink></li>
                          {
                            user && <>
                                <li className="px-3"><NavLink to='/dashboard' className='btn btn-ghost rounded-md'>Dashboard</NavLink></li>
                                <li><button onClick={handleLogout} className="btn btn-ghost rounded-md">Logout</button></li>
                            </>
                          }
                        </ul>
                    </div>
                    <Link to='/' className="normal-case font-mono text-4xl flex items-center"><img src={brandLogo} style={{height:'80px'}} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                       <li className="px-3"><Link to='/' className="rounded-md btn btn-ghost">Home</Link></li>
                       <li className="px-3"><NavLink to='/allproducts' className='btn btn-ghost rounded-md'>All products</NavLink></li>
                       <li className="px-3"><NavLink to='/blog' className='btn btn-ghost rounded-md'>Blog</NavLink></li>
                       {
                            user && <>
                                <li className="px-3"><NavLink to='/dashboard' className='btn btn-ghost rounded-md'>Dashboard</NavLink></li>
                                <li><button onClick={handleLogout} className="btn btn-ghost rounded-md">Logout</button></li>
                            </>
                          }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                        {
                            darkMode ? 
                            <HiOutlineSun onClick={handleDarkMode} className="text-2xl mr-4 hover:fill-white cursor-pointer"/> 
                            :
                            <HiOutlineMoon onClick={handleDarkMode} className="text-2xl mr-4 hover:fill-black cursor-pointer"/>
                        }
                        </div>
                        <a alt='' href='whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND' className="btn btn-ghost ml-4 text-green-500 group"><BsWhatsapp className="mr-2 group-hover:scale-125"/> Whatsapp</a>
                        {
                            user ?
                            <div className="dropdown dropdown-end hidden md:block">
                                <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" title=""/>
                                        </div>
                                    </label>
                                </div>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className="px-3"><Link to='/' className="rounded-md btn btn-ghost">Profile</Link></li>
                                    <li><button onClick={handleLogout} className="btn btn-ghost">Logout</button></li>
                                </ul>
                            </div>
                            :
                            <NavLink to='/login' className="ml-2 md:ml-4 btn btn-ghost">Login</NavLink>
                        }
                        <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Nav;