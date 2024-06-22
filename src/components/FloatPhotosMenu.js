import React, { useState, useRef } from "react";
import {
  FileImageTwoTone,
  MinusCircleOutlined,
  DeleteTwoTone,
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
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragStart = (event, img) => {
    console.log(img);
    event.dataTransfer.setData("imageData", img);
  };

  function handleDeleteImage() {}

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isMenuOpen
            ? "w-56 h-4/6 p-4 rounded-lg shadow-2xl"
            : "w-20 h-20 rounded-full shadow-2xl"
        } bg-gray-100 flex items-center justify-center fixed bottom-32 left-32`}
      >
        {!isMenuOpen ? (
          <FileImageTwoTone
            onClick={handleMenuOpen}
            style={{ fontSize: "40px", color: "white" }}
          />
        ) : (
          <div className="w-full h-full">
            <MinusCircleOutlined
              className="absolute top-2 right-2 text-xl"
              onClick={handleMenuOpen}
            />
            <div className="mt-4 overflow-auto h-full pb-16">
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
                ref={fileInputRef}
                accept="image/*"
              />

              <div className="flex flex-col h-full overflow-auto">
                {images.map((img, index) => (
                  <div key={index} className="w-full relative">
                    <DeleteTwoTone
                      className="absolute top-3 right-1 text-lg"
                      onClick={handleDeleteImage}
                    />
                    <img
                      src={img}
                      alt={`img-${index}`}
                      className="w-full h-full object-cover rounded py-2"
                      draggable
                      onDragStart={(e) => handleDragStart(e, img)}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 left-0  w-full flex justify-center">
                <button
                  className="rounded-lg bg-blue-300 p-2 text-white"
                  onClick={handleUploadButtonClick}
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatPhotoMenu;
