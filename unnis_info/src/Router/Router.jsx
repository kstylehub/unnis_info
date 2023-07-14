import { createBrowserRouter } from "react-router-dom";
import Info from "../Components/Layout/Info";
import Layout from "../Components/Layout/index";
import Content from "../Components/Layout/Content";
import Homepage from "../Components/MobilePage/Homepage/Homepage";
import Subscribe from "../Components/MobilePage/ScreenNavBot/Subscribe";
import NewPage from "../Components/MobilePage/Components/ModalHomepage/New";
import Home from "../Components/Layout/Home";
import Event from "../Components/MobilePage/ScreenNavBot/Event";
import ContentNavbar from "../Components/MobilePage/NavbarPhone/contentNavbar";
import Transaction from "../Components/MobilePage/ScreenNavBot/Transaction";
import MyPage from "../Components/MobilePage/ScreenNavBot/MyPage";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Content />,
        children: [
          {
            path: "/",
            element: <Homepage />,
            children: [
              {
                path: "/",
                element: <ContentNavbar />,
              },
            ],
          },
          {
            path: "/subscribe",
            element: <Subscribe />,
          },
          {
            path: "/event",
            element: <Event />,
          },
          {
            path: "/transaction",
            element: <Transaction/>
          },
          {
            path: "/my-page",
            element: <MyPage/>
          },
          {
            path: "/newProduct",
            element: <NewPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
