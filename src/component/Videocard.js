import React from 'react'
import { Container,Row ,Col } from "reactstrap";

const Videocard = (props) => {
    console.log(props)
    // const data = [
    //     {
    //       id: 1,
        
    //       content: "Health Equity Animated :Race (Center for prevention MN)",
    //       image: "images/video1.png"
    //     },
    //     {
    //       id: 2,
        
    //       content: "Health Equity Animated :Race (Center for prevention MN)",
    //       image:"images/video2.png"
    //     },
    //     {
    //       id: 3,
        
    //       content: "Health Equity Animated :Race (Center for prevention MN)",
    //       image: "images/video1.png"
    //     },
    //     ]
  return (
    <>
             <Col md="6" sm="12" lg="4" className=' d-flex justify-content-center align-items-center'>
            <div className="videoCard  pb-1">
              {" "}
             <div className="p-3 square border">
             <div className=" h-75 ">
                <img
                  src={props.image}
                   className="w-100 h-100 text-white"
                ></img>
              </div>
              <div className="text-center "><b>"{props.content}</b></div>
             </div>
            </div>
            </Col>
    </>
  )
}

export default Videocard