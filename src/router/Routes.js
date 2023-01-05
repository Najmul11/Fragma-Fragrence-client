import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
        ]
    },
    {
        path:'/blog',
        loader:()=>fetch('http://localhost:5000/qna'),
        element:<Blog></Blog>
    },
    {
        path:'/*',
        element:<Error></Error>
    }
])