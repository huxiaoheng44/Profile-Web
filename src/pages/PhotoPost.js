import React, { useEffect, useState } from "react";
import interact from "interactjs";
import FloatPhotoMenu from "../components/FloatPhotosMenu";

const PhotoPost = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    interact(".resizable-rotate-draggable")
      .draggable({
        onmove: (event) => {
          const target = event.target;

          const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

          target.style.transform = `translate(${x}px, ${y}px)`;

          target.setAttribute("data-x", x);
          target.setAttribute("data-y", y);
        },
      })
      .resizable({
        modifiers: [
          interact.modifiers.aspectRatio({
            ratio: "preserve",
          }),
          interact.modifiers.restrictSize({
            min: { width: 50, height: 50 },
          }),
        ],
        edges: { left: true, right: true, bottom: true, top: true },
      })
      .on("resizemove", function (event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute("data-x")) || 0;
        var y = parseFloat(target.getAttribute("data-y")) || 0;

        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
          "translate(" + x + "px," + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      })

      .gesturable({
        onmove: (event) => {
          const target = event.target;
          let angle =
            (parseFloat(target.getAttribute("data-angle")) || 0) + event.da;

          target.style.transform += ` rotate(${angle}deg)`;
          target.setAttribute("data-angle", angle);
        },
      });
  }, []);

  const handleDrop = (event) => {
    console.log("drop");
    event.preventDefault();
    const imgData = event.dataTransfer.getData("imageData");
    if (imgData) {
      const x = event.clientX;
      const y = event.clientY;

      setImages([...images, { src: imgData, x, y }]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="w-full h-screen flex flex-col border-8"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <FloatPhotoMenu />
      <div className="w-full h-10">
        <h1>Photo Wall</h1>
      </div>
      <div className="w-full block relative">
        {/* <div
          className="resizable-rotate-draggable w-10 h-10 w-min-10 h-min-10 bg-black"
          style={{ touchAction: "none" }}
        >
          <img
            className="avatar-image"
            src={process.env.PUBLIC_URL + "/avatar.jpg"}
            alt="Avatar"
          />
        </div> */}
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="resizable-rotate-draggable absolute flex-1"
              style={{
                left: `${image.x}px`,
                top: `${image.y - 30}px`,
                touchAction: "none",
              }}
            >
              <img
                src={image.src}
                alt={`img-${index}`}
                className="avatar-image"
                style={{ width: "100px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoPost;
