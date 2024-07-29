import { createBrowserRouter } from "react-router-dom";
import Content from "../Components/Layout/Content";
import Homepage from "../Components/MobilePage/Homepage/Homepage";
import Subscribe from "../Components/MobilePage/ScreenNavBot/Subscribe";
import NewPage from "../Components/MobilePage/Components/ModalHomepage/New";
import DetailProduct from "../Components/MobilePage/Components/ModalHomepage/DetailProduct";
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
import Video from "../Components/MobilePage/Components/ModalHomepage/Video";
import Community from "../Components/MobilePage/Components/ModalHomepage/Community";
import DetailEvent from "../Components/MobilePage/Components/ContentEvent/DetailEvent";
import DetailFeed from "../Components/MobilePage/Components/ModalHomepage/feeddetail";
import Recycle from "../Components/MobilePage/Components/ModalHomepage/Recycle";
import Cart from "../Components/MobilePage/Components/Transaction/Cart";
import VideoShort from "../Components/MobilePage/Components/ModalHomepage/VideoShort";
import VideoYoutubeDetail from "../Components/MobilePage/Components/ModalHomepage/VideoYoutubeDetail";
import VideoInfluencer from "../Components/MobilePage/Components/ModalHomepage/VideoInfluencer";
import VideoUnnis from "../Components/MobilePage/Components/ModalHomepage/VideoUnnis";
import Feedback from "../Components/MobilePage/ScreenNavBot/Feedback";
import Faq from "../Components/MobilePage/ScreenNavBot/Faq";
import ContactUs from "../Components/MobilePage/ScreenNavBot/ContactUs";
import Account from "../Components/MobilePage/ScreenNavBot/Account";

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
            path: "/event/detailevent/:id",
            element: <DetailEvent />,
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
            path: "/cart",
            element: <Cart/>,
          },
            // MY PAGE ==============================================
          {
            path: "/my-page",
            element: <MyPage/>,
          },
          {
            path: "/mypage/feedback",
            element: <Feedback/>,
          },
          {
            path: "/mypage/contactus",
            element: <ContactUs/>,
          },
          {
            path: "/mypage/account",
            element: <Account/>,
          },
          {
            path: "/mypage/faq",
            element: <Faq/>,
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
            element: <NewPage />
          },
          {
            path: "/newProduct/detailproduct/:id",
            element: <DetailProduct />,
          },
          // VIDEO ==============================================
          {
            path: "/video",
            element: <Video />
          },
          {
            path: "/video/videoshort/:id",
            element: <VideoShort />
          },
          {
            path: "/video/videoyoutube/:id",
            element: <VideoYoutubeDetail />
          }, 
          {
            path: "/video/videounnis/:id",
            element: <VideoUnnis />
          },
          {
            path: "/video/videoinfluencer",
            element: <VideoInfluencer/>
          },
          // COMMUNITY ==============================================
          {
            path: "/community",
            element: <Community />
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
            path: "/feeddetail/:id",
            element: <DetailFeed />,
          },
          {
            path: "/recycle",
            element: <Recycle />,
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
