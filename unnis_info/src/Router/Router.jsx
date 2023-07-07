import { createBrowserRouter } from "react-router-dom";
import Info from "../Components/Layout/Info";
import Layout from "../Components/Layout/index";
import Content from "../Components/Layout/Content";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        // children: [
        //     {
        //         element: <Info/>
        //     },
        //     {
        //         element: <Content/>
        //     }
        // ]
    }
])

export default router