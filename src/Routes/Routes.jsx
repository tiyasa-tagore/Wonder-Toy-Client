import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../Components/Error/Error";
import Blog from "../Components/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import About from "../pages/About/About";
import AddAToy from "../pages/AddAToy/AddAToy";
import ToyDetails from "../pages/AllToys/ToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: '/addatoy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/toydetails/:id',
                element: <ToyDetails></ToyDetails>
            },
            {
                path: "*",
                element: <Error></Error>
            },
        ]
   } ])

    export default router;