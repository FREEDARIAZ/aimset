import React from 'react'
import { Container, Row, Col,Button } from "reactstrap";

const Footer = () => {
  return (
    <div className='px-lg-5 px-md-5 px-sm-0 mx-5  '>
    <div className='px-5 pt-5 pb-5 subscribe'>
    <Row className='text-center'><h3>Subscribe to our Newsletter</h3></Row>
    <Row className='d-flex justify-content-center align-items-center'>
        <div className='w-50    bg-white '> 
        <Row>
            <Col></Col>
            <Col className='d-flex justify-content-end  justify-content-xs-center p-0 m-0'> 
             <Button color="info" className=" text-white ">
                 <h3>Subscribe</h3> 
                </Button></Col>
        </Row></div>
    </Row>
    </div>
    <div className=''>
    <Row className='pt-5 pb-5'>
    <Col>
        <div className='footer-logo'>
        <img src='images/footerlogo.png' className='w-100 h-100 text-white '></img>
        </div>
    </Col>
    <Col xs="12" sm="4" className='d-flex  align-items-sm-center align-items-xs-start flex-column'>
        <Row>
            <h4>Main</h4>
        </Row>
        <Row> <Button color="info" className=" text-white buthome ">
                 Home 
                </Button></Row>
        <Row className='p-2'>
            About us
        </Row>
        <Row className='p-2'>
            Find Providers
        </Row>
        <Row className='p-2'>
            FAQs
        </Row>
    </Col>
    
    <Col xs="12" sm="4" className='d-flex   align-items-sm-center align-items-xs-start  flex-column pt-xs-2'>
    <Row>
            <h4>Resourses</h4>
        </Row>
        <Row> 
        Contact Us
        </Row>
        <Row className='p-2'>
            Privacy
        </Row>
        <Row className='p-2'>
            Crisis
        </Row>
        <Row className='p-2'>
            Careers
        </Row>
        <Row className='p-2'>
            HealthCare Providers
        </Row>
        <Row className='p-2'>
            Terms and Conditions
        </Row>
    </Col>

    </Row>
    

    </div>
   
        
    </div>
  )
}

export default Footer