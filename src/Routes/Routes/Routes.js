import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layouts/Main"
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Categorie from "../../Pages/Home/Categories/Categorie";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/catergorie/:brand',
                element: <Categorie></Categorie>
            }
        ]
    }
])

export default router;