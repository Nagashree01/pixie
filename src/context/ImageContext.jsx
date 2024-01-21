/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchClick = async (searchInput) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_API_KEY
        }&q=${searchInput}&image_type=photo`
      );
      const data = await response.json();
      setImages(data.hits);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageContext.Provider value={{ images, loading, handleSearchClick }}>
      {children}
    </ImageContext.Provider>
  );
};

export const UseImage = () => useContext(ImageContext);
