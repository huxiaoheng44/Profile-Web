import React, { useState, useRef } from "react";
import {
  FileImageTwoTone,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const FloatPhotoMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImages([...images, URL.createObjectURL(file)]);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="fixed bottom-32 left-32">
      <div
        className={`transition-all duration-300 ${
          isMenuOpen
            ? "w-48 h-96 p-4 rounded-lg shadow-2xl"
            : "w-20 h-20 rounded-full shadow-2xl"
        } bg-gray-100 flex items-center justify-center relative`}
      >
        {!isMenuOpen ? (
          <FileImageTwoTone
            onClick={handleMenuOpen}
            style={{ fontSize: "40px", color: "white" }}
          />
        ) : (
          <div className="w-full h-full relative">
            <MinusCircleOutlined
              className="absolute top-2 right-2 text-xl"
              onClick={handleMenuOpen}
            />
            <div className="mt-10">
              <button
                className="border-4 rounded-lg border-blue-300 p-2 absolute bottom-2"
                onClick={handleUploadButtonClick}
              >
                Upload Image
              </button>
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
                ref={fileInputRef}
                accept="image/*"
              />

              <div className="mt-4 grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="w-full h-20">
                    <img
                      src={img}
                      alt={`img-${index}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatPhotoMenu;
