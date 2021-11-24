import React from "react";
import Select from "../../components/Select";
import Link from "next/link";
import imgA from "../../assets/image/home-1/png/arrow-down-big.png";
import backgroundImage from "../../assets/image/homepage/png/hero-image.png";

// const defaultOptions = [
//   { value: "NY", label: "New York" },
//   { value: "SI", label: "Singapore" },
//   { value: "LN", label: "London" },
//   { value: "DH", label: "Dhaka" },
// ];

const Video = ({ className, embedId, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="video-responsive">
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="ShopLove"
          />
        </div>
      </div>
    </div>
  );
};


export default Video;
