/* eslint-disable react/prop-types */

import { useState } from "react";

const ImageCard = ({ img }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-3 cursor-pointer">
      <img
        src={img.largeImageURL}
        alt=""
        className="w-full h-auto object-cover rounded-sm"
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <div className=" fixed h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center cursor-default">
          <div className=" bg-white p-5 relative  ">
            <span
              className=" absolute text-5xl top-0 right-1 cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-center">
                <img src={img.largeImageURL} alt="" width={400} height={400} />
              </div>
              <div>
                <div className="flex justify-center">
                  <button className="px-2 py-3 text-xl bg-green-500 text-white font-semibold">
                    <a href={img.previewURL}>Download for free</a>
                  </button>
                </div>
                <div className="flex flex-wrap gap-10">
                  <div>
                    <p className="text-lg font-palanquin font-bold">User</p>
                    <p className="leading-7 font-montserrat text-slate-gray">
                      {img.user}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-palanquin font-bold">User ID</p>
                    <p className="leading-7 font-montserrat text-slate-gray">
                      {img.user_id}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-palanquin font-bold">Type</p>
                    <p className="leading-7 font-montserrat text-slate-gray">
                      {img.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-palanquin font-bold">Views</p>
                    <p className="leading-7 font-montserrat text-slate-gray">
                      {img.views}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-palanquin font-bold">
                      Downloads
                    </p>
                    <p className="leading-7 font-montserrat text-slate-gray">
                      {img.downloads}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-palanquin font-bold">Likes</p>
                    <p className="leading-7 font-montserrat text-slate-gray">
                      {img.likes}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                {img.tags.split(",").map((tg) => (
                  <span key={tg} className="bg-gray-400 px-1">
                    {tg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
