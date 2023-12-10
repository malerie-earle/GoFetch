import React from 'react';
import bannerImg from "../Images/banner.png";
import "../styles/index.css"; 

const Banner = () => {
  return (
    <div className="banner">
      <img 
      src={bannerImg} 
      alt="Fetch" 
      className = "fetchBanner"
      style = {{
        width: "100%",
        height: "100%",
      }}
      />
            
    </div>
  );
};

export default Banner;
