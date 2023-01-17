import React from 'react'
import { Container,Row ,Col } from "reactstrap";

const ServingStudent = () => {
  return (
    <>
    
    <div className=''>
        <Row className='d-flex justify-content-center align-items-center' >
        <div className='d-flex justify-content-center align-items-center '>
        <h2>Serving Student & Faculity</h2>
        
        </div>
        <div className='main-line' style={{width:"50px"}}></div>
        </Row>
        <Row className='mx-5 my-3 px-5'>
        <div className='bg-secondary' >
        <Row>
        <Col sm="12" md="6" lg="4" xl="4" xxl="4" className='d-flex justify-content-center align-items-center' >
                <div className='w-50 h-50 '>
                    <img src='images/logo-black.png' className='w-100 h-100 text-white'></img>
                </div>
            </Col>
            <Col sm="12" md="6" lg="4" xl="4" xxl="4" className='d-flex justify-content-center align-items-center'>
            <div className='w-100 h-75  my-5  text-white d-flex justify-content-center align-items-center'>
           <h4> University of the District Columbia</h4>
                  
                </div>
            </Col>
            <Col sm="12" md="6" lg="4" xl="4" xxl="4" className='d-flex justify-content-center align-items-center'>
            <div className='w-50 h-50 '>
                    <img src='images/logo-black.png' className='w-100 h-100 text-white'></img>
                </div>
            </Col>
        </Row>

        </div>
          
        </Row>

        </div>

       
    </>
  )
}

export default ServingStudent