import React from "react";

/*
  Update the filenames below to match the files you placed in public/images.
  Use short names and make sure those files exist.
*/
const IMAGES = [
  "/images/dress1.jpeg",
  "/images/dress2.jpeg",
  "/images/african1.jpeg",
  "/images/hijabi.jpeg",
  "/images/shop-online.jpeg",
  "/images/saudi.jpeg",
  "/images/european1.jpeg",
  "/images/yoruba.jpeg",
  "/images/wedding-orange.jpeg",
  "/images/download (1).jpeg",
  "/images/download (2).jpeg",
  "/images/download.jpeg",
];

export default function Gallery() {
  return (
    <div className="img">
      {IMAGES.map((src, idx) => (
        <img key={idx} src={src} alt={`fashion ${idx + 1}`} />
      ))}
    </div>
  );
}
