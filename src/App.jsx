import "./App.css";
import Header from "./components/Header";
import searchIcon from "./assets/search-icon.svg";
import { useState } from "react";
import ImageCard from "./components/ImageCard";
import { UseImage } from "./context/ImageContext";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const { images, loading, handleSearchClick } = UseImage();

  return (
    <div className=" bg-[url('./assets/fuji.jpg')]  w-full h-[100vh] bg-no-repeat bg-cover bg-top ">
      <div className="p-1">
        <Header />
        <section className="px-10 lg:px-40 py-24 flex flex-col justify-center items-center text-white space-y-10 ">
          <div className="text-wrap text-xl md:text-6xl lg:text-8xl text-center font-semibold leading-normal">
            Discover over 2,000,000 free stock images
          </div>
          <div className="w-auto h-12 bg-[rgba(217, 217, 217, 0.12)] border-2 rounded-sm border-white flex items-center  px-2 py-3 backdrop-blur-3xl">
            <div className="bg-slate-300 rounded-md opacity-30">
              <img src={searchIcon} alt="search" width={30} height={30} />
            </div>

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Photo"
              className="p-2 text-lg w-full focus:outline-none text-white bg-slate-900 opacity-85 backdrop-blur-sm"
            />
            <button
              className="border-2 border-white rounded-sm p-1 text-white bg-black"
              onClick={() => handleSearchClick(searchInput)}
            >
              Go!
            </button>
          </div>
          <div className="border-2 rounded-md border-white p-2">
            <span className="font-semibold">Trending :</span> flowers, forest,
            river
          </div>
        </section>
      </div>
      <div className="bg-white mt-16 ">
        {loading ? (
          <h1 className="text-4xl text-center ">Loading . . .</h1>
        ) : (
          images.length > 0 && (
            <section className="flex flex-col px-4 ">
              <div className="text-4xl text-center py-8">
                Showing Results for {searchInput}
              </div>
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 ">
                {images.map((image) => (
                  <ImageCard key={image.id} img={image} />
                ))}
              </div>
            </section>
          )
        )}
      </div>
    </div>
  );
}

export default App;
