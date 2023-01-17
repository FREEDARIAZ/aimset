import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "reactstrap";

const Featured = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767},
      items: 2,
    },
  
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="p-5">
        <Row className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h2>Featured Articls</h2>
          </div>
          <div className="main-line" style={{ width: "50px" }}></div>
        </Row>
        <Row className=" mx-5 my-3">
          <Carousel responsive={responsive}>
            <div className="slider-height pe-1">
              {" "}
             <div className="p-3 square border">
             <div className=" h-75 ">
                <img
                  src="images/physocial.png"
                  className="w-100 h-100 text-white"
                ></img>
              </div>
              <div className="text-center text-info">Psychology</div>
             </div>
            </div>
            <div className="slider-height pe-1">
              {" "}
             <div className="p-3 square border">
             <div className=" h-100 ">
                <img
                  src="images/self2.png"
                  className="w-100 h-100 text-white"
                ></img>
              </div>
              <div className="text-center text-info ">Self</div>
             </div>
            </div>
            <div className="slider-height pe-1">
              {" "}
             <div className="p-3 square border">
             <div className=" h-75 ">
                <img
                  src="images/health.png"
                  className="w-100 h-100 text-white"
                ></img>
              </div>
              <div className="text-center text-info">Behaviroal Health Business</div>
             </div>
            </div>
            <div className="slider-height pe-1">
              {" "}
             <div className="p-3 square border">
             <div className=" h-75 ">
                <img
                  src="images/self2.png"
                  className="w-100 h-100 text-white"
                ></img>
              </div>
              <div className="text-center text-info">Dummy</div>
             </div>
            </div>
          </Carousel>
          ;
        </Row>
      </div>
    </>
  );
};

export default Featured;
