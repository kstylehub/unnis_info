import { createBrowserRouter } from "react-router-dom";
import Info from "../Components/Layout/Info";
import Layout from "../Components/Layout/index";
import Content from "../Components/Layout/Content";
import Home from '../Components/MobilePage/Homepage/Homepage'
import Subscribe from "../Components/MobilePage/Subscribe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/subscribe',
                element: <Subscribe/>
            }
        ]
    }
])

export default router