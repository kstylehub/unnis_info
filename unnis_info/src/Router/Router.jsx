import { createBrowserRouter } from "react-router-dom";
import Info from "../Components/Layout/Info";
import Layout from "../Components/Layout/index";
import Content from "../Components/Layout/Content";
import Homepage from "../Components/MobilePage/Homepage/Homepage";
import Subscribe from "../Components/MobilePage/ScreenNavBot/Subscribe";
import NewPage from "../Components/MobilePage/Components/ModalHomepage/New";
import DetailProduct from "../Components/MobilePage/Components/ModalHomepage/detailProduct";
import Home from "../Components/Layout/Home";
import Event from "../Components/MobilePage/ScreenNavBot/Event";
import ContentNavbar from "../Components/MobilePage/NavbarPhone/contentNavbar";
import Transaction from "../Components/MobilePage/ScreenNavBot/Transaction";
import MyPage from "../Components/MobilePage/ScreenNavBot/MyPage";
import TransSubs from "../Components/MobilePage/Components/Transaction/Subscription";
import TransProduct from "../Components/MobilePage/Components/Transaction/ProductPurchase";
import SkinAnalysis from "../Components/MobilePage/Components/MenuHome/SkinAnalysis";
import SkinSectionOne from "../Components/MobilePage/Components/SkinAnalysis/skinsectionone";
import SkinSectionTwo from "../Components/MobilePage/Components/SkinAnalysis/skinsectiontwo";
import SkinSectionThree from "../Components/MobilePage/Components/SkinAnalysis/skinsectionthree";
import ContentEvent from "../Components/MobilePage/Components/ContentEvent/ContentEvent";
import NavbarCategoryHome from "../Components/MobilePage/NavbarPhone/NavbarCategoryHome";
import SkinPageOne from "../Components/MobilePage/Components/SkinAnalysis/skinpageone";
import SkinPageTwo from "../Components/MobilePage/Components/SkinAnalysis/skinpagetwo";
import SkinPageThree from "../Components/MobilePage/Components/SkinAnalysis/skinpagethree";
import SkinPageFive from "../Components/MobilePage/Components/SkinAnalysis/skinpagefive";
import SkinPageFour from "../Components/MobilePage/Components/SkinAnalysis/skinpagefour";
import SkinPageSix from "../Components/MobilePage/Components/SkinAnalysis/skinpagesix";
import LoginPage from "../Components/MobilePage/ScreenNavBot/LoginPage";
import Register from "../Components/MobilePage/ScreenNavBot/Register";
import SearchProduct from "../Components/MobilePage/Components/SearchProduct/SearchProduct";
import Feed from "../Components/MobilePage/Components/ModalHomepage/feed";
import FeedDetail from "../Components/MobilePage/Components/ModalHomepage/feeddetail";

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
                children: [
                  {
                    path: "/",
                    element: <NavbarCategoryHome/>
                  }
                ]
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
            children:[
              {
                path:"/event",
                element:<ContentEvent/>
              }
            ]
          },
          {
            path: "/transaction",
            element: <Transaction/>,
            children: [
              {
                path: "/transaction/transsubs",
                element: <TransSubs />,
              },
              {
                path: "/transaction/transproduct",
                element: <TransProduct />,
              },
            ],
          },
          {
            path: "/my-page",
            element: <MyPage/>,
          },
          {
            path: "/login",
            element: <LoginPage/>
          },
          {
            path: "/register",
            element: <Register/>
          },
          {
            path: "/newProduct",
            element: <NewPage />,
            children: [
            ]
          },
          {
            path: "/newProduct/detailproduct/:id",
            element: <DetailProduct />,
          },
          {
            path: "/skinanalysis",
            element: <SkinAnalysis />,
          },
          // {
          //   path: "/detailproduct",
          //   element: <DetailProduct />,
          // },
          {
            path: "/skinsectionone",
                element: <SkinSectionOne />,
          },
          {
            path: "/skinsectiontwo",
            element: <SkinSectionTwo />,
            children: [
              {
                path: "/skinsectiontwo/pageone",
                element: <SkinPageOne />,
              },
              {
                path: "/skinsectiontwo/pagetwo",
                element: <SkinPageTwo />,
              },
              {
                path: "/skinsectiontwo/pagethree",
                element: <SkinPageThree />,
              },
              {
                path: "/skinsectiontwo/pagefour",
                element: <SkinPageFour />,
              },
              {
                path: "/skinsectiontwo/pagefive",
                element: <SkinPageFive />,
              },
              {
                path: "/skinsectiontwo/pagesix",
                element: <SkinPageSix />,
              },
            ],
          },
          {
            path: "/skinsectionthree",
            element: <SkinSectionThree />,
          },
          {
            path: "/feed",
            element: <Feed />,
          },
          {
            path: "/feeddetail",
            element: <FeedDetail />,
          },
          {
            path: "/search",
            element: <SearchProduct/>
          }
        ],
      },
    ],
  },
]);

export default router;
