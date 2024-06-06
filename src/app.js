import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import ContactUS from "./components/contactus";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet />
        </div>
    )
}

//Takes a list of path
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUS />
            },
            {
                path: "/restro/:resId",
                element: <RestroMenu />
            }
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)