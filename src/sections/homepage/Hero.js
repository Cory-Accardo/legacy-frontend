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

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="pt-15 pt-lg-20">
        <div
          className="bg-img-1 bg-images pt-18 pt-lg-25 pt-xl-33 mx-lg-13 mx-xl-15 bg-gradient-2"
          style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '1200px' }}
        >
        </div>
      </div>
    </div>
  );
};

export default Hero;
