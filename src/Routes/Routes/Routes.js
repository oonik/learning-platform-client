import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course/Course";
import Login from "../../Shared/Login/Login/Login";
import Register from "../../Shared/Login/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Blog from "../../Pages/Blog/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivetRoute><Course></Course></PrivetRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);