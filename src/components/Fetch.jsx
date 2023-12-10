import React, { useState } from 'react';
import goFetchImg from "../Images/tennisball-removebg-preview.png";
import fetchBackground from '../Images/9323152.jpg';
import breedBackground from '../Images/OQ1OSR0.png';
import "../styles/index.css"; 
import Dogs from "./Dogs"; 

const Fetch = () => { 
  const [isSpinning, setIsSpinning] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(fetchBackground);
  const [showDogs, setShowDogs] = useState(false);
  const [showOriginalContent, setShowOriginalContent] = useState(true);
  const [background2Height, setBackground2Height] = useState(0);
  const [breeds, setBreeds] = useState([]); 

  // Function to update background2Height in Fetch component
  const updateBackground2Height = (height) => {
    setBackground2Height(height);
  };

  
  const changeBackground = () => {
    setBackgroundImage(breedBackground);
    setShowDogs(true);
    setShowOriginalContent(false);
    setIsSpinning(false);
  };

  const handleImageClick = () => {
    setIsSpinning(true);

    setTimeout(() => {
      changeBackground();
    }, 1000);
  };

  return (
    <div className="goFetch">
      {showOriginalContent && (
        <div 
          className="background1"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div className = "tennisBall">
          <img
            src={goFetchImg} 
            alt="Go Fetch"
            className={`tennisball ${isSpinning ? 'spin' : ''}`}
            onClick={handleImageClick}
            style={{ 
              cursor: 'pointer'
            }}
          />
        </div></div>
      )}

      {!showOriginalContent && (
        <div className="background2">
          {showDogs && <Dogs
        updateBackground2Height={updateBackground2Height}
        dogBreeds={breeds} // Pass 'breeds' as a prop
      />}

        </div>
      )}
    </div>
  );
};

export default Fetch;
