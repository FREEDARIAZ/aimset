import React from 'react'
import { Container,Row ,Col } from "reactstrap";
import Videocard from './Videocard';

export const InfoVideos = () => {
   const data = [
    {
      id: 1,
    
      content: "Health Equity Animated :Race (Center for prevention MN)",
      image: "images/video1.png"
    },
    {
      id: 2,
    
      content: "Health Equity Animated :Race (Center for prevention MN)",
      image:"images/video2.png"
    },
    {
      id: 3,
    
      content: "Health Equity Animated :Race (Center for prevention MN)",
      image: "images/video1.png"
    },
    ]
  return (
    <>
         <div className="p-5 mx-lg-5 mx-sm-0">
        <Row className="d-flex justify-content-center align-items-center ">
          <div className="text-center">
            <h2>Featured Informational Videos </h2>
          </div>
          <div className="main-line" style={{ width: "50px" }}></div>
        </Row>
        <Row className="  my-3 d-flex justify-content-center align-items-center">
    
            {data.map(data => (
            <Videocard key={data.id} {...data} />
          ))} 
          
          
        </Row>
        <div>
        </div>
        </div>
    </>
  )
}
