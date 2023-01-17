import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "reactstrap";

const WhatSay = () => {
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
          breakpoint: { max: 1024, min: 767 },
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
            <div className=" pe-2">
              {" "}
             <div className="p-5 square border articals">
             <div className=" h-75 ">
              <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div className=""><b>Psychology</b></div>
             </div>
            </div>
           
            
            <div className=" pe-2">
              {" "}
             <div className="p-5 square border articals">
             <div className=" h-75 ">
              <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div className=""><b>Psychology</b></div>
             </div>
            </div>

            <div className=" pe-2">
              {" "}
             <div className="p-5 square border articals">
             <div className=" h-75 ">
              <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div className=""><b>Psychology</b></div>
             </div>
            </div>
            <div className=" pe-2">
              {" "}
             <div className="p-5 square border articals">
             <div className=" h-75 ">
              <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div className=""><b>Psychology</b></div>
             </div>
            </div>
          </Carousel>
          ;
        </Row>
      </div>
    
   </>
  )
}

export default WhatSay