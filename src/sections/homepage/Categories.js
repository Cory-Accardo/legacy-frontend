import React, { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

import jordonHotDog from "../../assets/image/homepage/png/categories/jordon-hot-dog.png";
import studioD from "../../assets/image/homepage/png/categories/studiod-contract.png";
import myFishStop from "../../assets/image/homepage/png/categories/my-fish-stop.png";
import hotCoolCafe from "../../assets/image/homepage/png/categories/hot-&-cool-cafe.png";
import creshawYogaDance from "../../assets/image/homepage/png/categories/creshaw-yoga.png";
import rideOnBike from "../../assets/image/homepage/png/categories/ride-on-bike.png";
import martgolsMagic from "../../assets/image/homepage/png/categories/martgols-magic.png";
import tossItUp from "../../assets/image/homepage/png/categories/toss-it-up.png";
import pipsOnLaBrea from "../../assets/image/homepage/png/categories/pips-on-labrea.png";
import freewayEasy from "../../assets/image/homepage/png/categories/freeway-easy.png";
import deliciousAtDunbar from "../../assets/image/homepage/png/categories/delicious-at-dunbar.png";
import AF from "../../assets/image/homepage/png/categories/AF.png";
import misla from "../../assets/image/homepage/png/categories/misla.png";
import * as gtag from '../../utils/gtag';
const handleClick = () => {
  gtag.event({ action: 'shop_love_now', category: gtag.EventCategories.click, label: window.location.pathname, value: window.location.pathname });
};
const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const items = [
  {
    title: "Misla",
    link: "misla",
    image: misla,
    primaryColor: '#F86825'
  },
  {
    title: "Aqua Equity",
    link: "aquaequity",
    image: AF,
    primaryColor: '#00A0DE'
  },
  {
    title: "Jordan's Hot Dogs",
    link: "jordanshotdogs",
    image: jordonHotDog,
    primaryColor: '#92291D'
  },
  {
    title: "Studio D",
    link: "studiodcontractfinishes",
    image: studioD,
    primaryColor: '#A11F61'
  },
  {
    title: "My Fish Stop",
    link: "myfishstop",
    image: myFishStop,
    primaryColor: '#F02E2D'
  },
  {
    title: "Hot & Cool Cafe",
    link: "hotcoolcafe",
    image: hotCoolCafe,
    primaryColor: '#000000'
  },
  {
    title: "Ride On! Bike Shop",
    link: "rideon",
    image: rideOnBike,
    primaryColor: '#F3592D'
  },
  {
    title: "Martgol’s Magic",
    link: "martgolsmagic",
    image: martgolsMagic,
    primaryColor: '#E3A120'
  },
  {
    title: "Toss It Up Salads",
    link: "tossItup",
    image: tossItUp,
    primaryColor: '#62AF2F'
  },
  {
    title: "PIPS On La Brea",
    link: "pipsonlabreas",
    image: pipsOnLaBrea,
    primaryColor: '#600A0F'
  },
  {
    title: "Freeway Easy",
    link: "freewayeasy",
    image: freewayEasy,
    primaryColor: '#00CAF2'
  },
  {
    title: "Delicious at the Dunbar",
    link: "deliciousatthedunbar",
    image: deliciousAtDunbar,
    primaryColor: '#7B0203'
  },
];

const Categories = ({ className, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 800,
    centerPadding: "28%",
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "25%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1595,
        settings: {
          centerPadding: "15%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1488,
        settings: {
          centerPadding: "10%",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          centerPadding: "16%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "12%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          centerPadding: "8%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "5%",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 890,
        settings: {
          centerPadding: "18%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          centerPadding: "15%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          centerPadding: "30%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "28%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          centerPadding: "26%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: "24%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: "22%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "18%",
          slidesToShow: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerPadding: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
          autoplay: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <section id="slashcard" className={className} {...rest}>
        <Container>
          <Row className="row align-items-center justify-content-between mb-6 mb-lg-19">
            <Col sm="12" md="6" lg="6" xl="5">
              <div
                className="mb-5 text-center text-md-left"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h2 className="font-40 mb-0">
                  Show Some Love,<br className="d-none d-md-block"></br> Shop local.
                </h2>
              </div>
            </Col>
            <Col md="4">
              <div className="l1-category-slider text-center text-md-right">
                <button
                  className="slick-prev slick-arrow bg-black"
                  aria-label="Previous"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickPrev();
                  }}
                >
                  <i className="icon icon-small-left" style={{ color: '#39B54A' }}></i>
                </button>
                <button
                  className="slick-next slick-arrow bg-black"
                  aria-label="Next"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickNext();
                  }}
                >
                  <i className="icon icon-small-right" style={{ color: '#E50707' }}></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          className="category-one"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <SliderStyled ref={elSlider} {...slickSettings} className="h1-category-slider">
            {items.map(({ link, title, image, jobs, primaryColor }, index) => (
              <Link key={index} href={link} onClick={handleClick}>
                <a
                  target="_blank"
                  className="single-category mx-xs-9 mx-lg-7 focus-reset slick-slide"
                  tabIndex="-1"
                >
                  <div className="bg-cat shadow-2 min-w-255 min-h-222 gr-hover-1 text-center">
                    
                      <img src={image} alt="Landing image" className="max-w-193" />
                    
                    <h4 className="font-size-6 p-2 font-weight-medium text-white text-center w-100 mb-0" style={{ padding: '15px 0px !important', background: `${primaryColor}`, marginBottom: '0 !important' }}>
                      {title}
                    </h4>
                  </div>
                </a>
              </Link>
            ))}
          </SliderStyled>
        </div>
      </section>
    </>
  );
};

export default Categories;
