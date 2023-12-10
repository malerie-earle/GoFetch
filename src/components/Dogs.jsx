import React, { useState, useEffect } from 'react';
import '../styles/index.css';

const Dogs = ({ updateBackground2Height }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogImages, setDogImages] = useState([]);
  const [imageCount, setImageCount] = useState(8);


  useEffect(() => {
    const fetchBreedsAndImages = async () => {
      try {
        const breedsResponse = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!breedsResponse.ok) {
          throw new Error('Network response for breeds was not ok');
        }
        const breedsData = await breedsResponse.json();
        setBreeds(Object.keys(breedsData.message));
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchBreedsAndImages();
  }, []);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        if (selectedBreed) {
          const imagesResponse = await fetch(
            `https://dog.ceo/api/breed/${selectedBreed}/images/random/${imageCount}`
          );
          if (!imagesResponse.ok) {
            throw new Error('Network response for images was not ok');
          }
          const imagesData = await imagesResponse.json();
          setDogImages(imagesData.message);
          
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchDogImages();
  }, [selectedBreed, imageCount]);

  const handleImageCountChange = (e) => {
    const count = e.target.value;
    setImageCount(count);
  };

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    setSelectedBreed(breed);
  };

  useEffect(() => {
    // Update background height here if needed
  }, [dogImages]);

  return (
    <div className="fetchDogs">
      <h3 className="h3">What's Your Favorite Dog Breed?</h3>
      <form id="dogs-form" className="dogForm">
        <select
          className="breeds"
          name="breeds"
          onChange={handleBreedChange}
        >
          <option value="">Select a Breed</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <h4 className="h4">How Many Puppies Should We Get?</h4>
        <input
          type="number"
          min="1"
          max="100"
          defaultValue={imageCount.toString()} 
          onChange={handleImageCountChange}
          id="image-count"
          style={{
            width: '60px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        />
      </form>

      <div className="dogImages" id="dogImages">
        {dogImages &&
          dogImages.length > 0 &&
          dogImages.map((image, index) => (
            <img key={index} src={image} alt={`Dog ${index}`} className="dogPic" />
          ))}
      </div>
    </div>
  );
};

export default Dogs;
