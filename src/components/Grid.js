import React from "react";

const Grid = ({ photos }) => {
  return (
    <>
      <h1>My Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`https://photo-gallery-app-backend-s4i2.onrender.com/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
