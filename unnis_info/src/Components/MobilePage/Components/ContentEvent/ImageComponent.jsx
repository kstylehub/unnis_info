import React from "react";
import defaultImage from "../../../../assets/defaultimg.png"; // Ganti dengan path ke gambar default Anda

const ImageComponent = ({ imageUrl }) => {
  const renderImage = () => {
    if (imageUrl && imageUrl.trim() == "<Error>") {
      return (
        <img src={imageUrl} className="rounded-full" />
      );
    } else {
      return (
        <img src={defaultImage} className="rounded-full" />
      );
    }
  };

  return (
    <div>
      {renderImage()}
    </div>
  );
};

export default ImageComponent;
