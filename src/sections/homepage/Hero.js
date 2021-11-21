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
      <div className="container-fluid mt-19">
        <div className="pl-12 pr-12">
        <img src={backgroundImage} alt="bg-image" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
