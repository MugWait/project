import React, { useRef, useState } from "react";

const DragAndDrop = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFile() {
    fileInputRef.current.click();
  }
  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }
  function deleteImages(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }
  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function uploadImages() {
    console.log("Images", images);
  }
  return (
    <>
      <div className="card_drop">
        <div className="top_drop">
          <p>Dreg and Drop</p>
        </div>
        <div
          className="dreg-area"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging ? (
            <span className="select">Drop Image Here</span>
          ) : (
            <>
              Drop & Drop Image Here or -
              <span className="select" role="button" onClick={selectFile}>
                Browse
              </span>
            </>
          )}

          <input
            type="file"
            className="file_drop"
            multiple
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>
        <div className="container_drop">
          {images.map((images, index) => (
            <div className="image_drop" key={index}>
              <span className="delete_drop" onClick={() => deleteImages(index)}>
                &times;
              </span>
              <img src={images.url} alt={images.name} />
            </div>
          ))}
        </div>
        <button type="button" onClick={uploadImages}>
          UpLoad
        </button>
      </div>
    </>
  );
};

export default DragAndDrop;
