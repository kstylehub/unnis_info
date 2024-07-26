import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Community from "../../../assets/NavigationButtom/community.svg";
import Video from "../../../assets/NavigationButtom/video.svg";
import Account from "../../../assets/NavigationButtom/account.svg";
import Home from "../../../assets/NavigationButtom/home.svg";
import Products from "../../../assets/NavigationButtom/products.svg";
import CommunityWhite from "../../../assets/NavigationButtom/community_white.svg";
import VideoWhite from "../../../assets/NavigationButtom/video_white.svg";
import AccountWhite from "../../../assets/NavigationButtom/account_white.svg";
import HomeWhite from "../../../assets/NavigationButtom/home_white.svg";
import ProductsWhite from "../../../assets/NavigationButtom/products_white.svg";

function NavigationButtom() {
  const [selected, setSelected] = useState(null); // State for selected item

  const handleMouseEnter = (index) => {
    if (selected === null) { // Only set hovered state if no item is selected
      setSelected(index);
    }
  };

  const handleMouseLeave = () => {
    if (selected === null) { // Clear hovered state if no item is selected
      setSelected(null);
    }
  };

  const handleClick = (index) => {
    setSelected(index); // Set selected item on click
  };

  const navItems = [
    { src: Home, srcHover: HomeWhite, label: "Home", size: 'small', link: "/" },
    { src: Products, srcHover: ProductsWhite, label: "Products", size: 'large', link: "/newProduct" },
    { src: Video, srcHover: VideoWhite, label: "Video", size: 'large', link: "/video" },
    { src: Community, srcHover: CommunityWhite, label: "Community", size: 'small', link: "/community" },
    { src: Account, srcHover: AccountWhite, label: "Account", size: 'large', link: "/my-page" },
  ];

  const getSizeClass = (size) => {
    if (size === 'small') {
      return 'h-[80%] w-[80%]';
    }
    return 'h-[90%] w-[90%]';
  };

  return (
    <div className="flex justify-center items-center bg-white w-full gap-3 text-sm text-center text-[#868E96]">
      {navItems.map((item, index) => (
        <Link to={item.link} key={index} style={{ textDecoration: 'none', width: '20%' }}>
          <div
            className={`flex flex-col justify-center items-center cursor-pointer rounded-lg`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: selected === index ? '#4ABFA1' : 'transparent',
              color: selected === index ? 'white' : '#868E96',
              width: '100%'
            }}
          >
            <div className="h-10 w-10 flex justify-center items-center">
              <img
                src={selected === index ? item.srcHover : item.src}
                className={`${getSizeClass(item.size)} object-contain`}
              />
            </div>
            <p>{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavigationButtom;
