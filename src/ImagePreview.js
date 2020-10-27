/* import src from "*.avif"; */
import React from "react";
import "./ImagePreview.css";

export default function ImagePreview({ imgSrc, imgAlt, author }) {
  return (
    <div className="imgContainer">
      <img className="image" src={imgSrc} alt={imgAlt} />
      <p className="imgAuthor">
        by <b>{author}</b>
      </p>
    </div>
  );
}
