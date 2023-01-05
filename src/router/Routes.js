import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/*',
                element:<Error></Error>
            } 
              
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    {
        path:'/blog',
        loader:()=>fetch('http://localhost:5000/qna'),
        element:<Blog></Blog>
    },
    
    
])